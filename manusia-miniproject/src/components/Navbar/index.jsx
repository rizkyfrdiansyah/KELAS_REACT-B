import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUser } from "../../queries";
import { useLazyQuery } from "@apollo/client";
import { handleChanges } from "../../redux/userSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [GetUser, { data }] = useLazyQuery(getUser, {
    onCompleted: (data) => {
      if (data.mini_project_users.length < 1) {
        dispatch(
          handleChanges({
            id: "",
            nama: "",
            role: "",
            remember_me: "",
          })
        );
      } else {
        dispatch(
          handleChanges({
            id: data.mini_project_users[0].id,
            nama: data.mini_project_users[0].nama,
            role: data.mini_project_users[0].role,
            remember_me: data.mini_project_users[0].remember_me,
          })
        );
      }
    },
  });

  useEffect(() => {
    if (localStorage.getItem("remember_me") !== null) {
      GetUser({
        variables: {
          where: {
            remember_me: { _eq: localStorage.getItem("remember_me") },
          },
        },
      });
    } else {
      GetUser({
        variables: {
          where: {
            remember_me: { _eq: user.remember_me },
          },
        },
      });
    }
  }, []);

  const Logout = () => {
    dispatch(
      handleChanges({
        id: "",
        nama: "",
        role: "",
        remember_me: "",
      })
    );
    localStorage.clear();
  };

  return (
    <div className="flex justify-between px-[25px] bg-white shadow-md">
      <div className="self-center cursor-pointer">
        <Link to={"/"}>
          <h5 className="font-bold text-[22px] leading-6">Hi!Story</h5>
        </Link>
      </div>
      {user.role.length > 1 ? (
        <div className="flex gap-[10px] py-2">
          <span className="px-[10px] py-3">{user.nama}</span>
          <button
            className="p-[10px] text-[#09564E] bg-white border-2 border-[#09564E] hover:bg-[#0a3c37] hover:text-white text-[20px] leading-5 tracking-[0.25px] font-normal rounded-lg"
            onClick={() => {
              Logout();
            }}
          >
            Keluar
          </button>
        </div>
      ) : (
        <div className="flex gap-[10px] py-2">
          <button
            className="p-[10px] text-[#09564E] bg-white border-2 border-[#09564E] hover:bg-[#0a3c37] hover:text-white text-[20px] leading-5 tracking-[0.25px] font-normal rounded-lg"
            onClick={() => {
              navigate("/login");
            }}
          >
            Masuk
          </button>
          <button
            className="p-[10px] text-white bg-[#09564E] border-2 border-[#09564E] hover:bg-[#0a3c37] hover:text-white text-[20px] leading-5 tracking-[0.25px] font-normal rounded-lg"
            onClick={() => {
              navigate("/daftar");
            }}
          >
            Daftar
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
