import CustomInput from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { useLazyQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { getUser, updateRememberMe } from "../../queries";
import { makeRandomText } from "../../utils/makeRandomText";
import { useSelector, useDispatch } from "react-redux";
import { handleChanges } from "../../redux/userSlice";

const Login = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const [UpdateRememberMe, { data: dataRemember }] = useMutation(updateRememberMe, {
    onCompleted: (dataRemember) => {
      dispatch(
        handleChanges({
          id: dataRemember.update_mini_project_users.returning[0].id,
          nama: dataRemember.update_mini_project_users.returning[0].nama,
          role: dataRemember.update_mini_project_users.returning[0].role,
          remember_me: dataRemember.update_mini_project_users.returning[0].remember_me,
        })
      );
      localStorage.setItem("remember_me", dataRemember.update_mini_project_users.returning[0].remember_me);
      if (dataRemember.update_mini_project_users.returning[0].role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    },
  });

  const [GetUser, { data, loading }] = useLazyQuery(getUser, {
    onCompleted: (data) => {
      if (data.mini_project_users.length < 1) {
        setMessage("Email Atau Password Salah");
      } else {
        UpdateRememberMe({
          variables: {
            where: {
              id: { _eq: data.mini_project_users[0].id },
            },
            _set: {
              remember_me: makeRandomText(16),
            },
          },
        });
      }
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.clear();
    if (value.email.length < 1 && value.password.length < 1) {
      setMessage("Email Atau Password Tidak Boleh Kosong");
    } else {
      GetUser({
        variables: {
          where: {
            email: { _eq: value.email },
            password: { _eq: value.password },
          },
        },
      });
    }
  };

  return (
    <div className="w-full flex h-screen">
      <div className="m-auto w-[350px]">
        <p className="text-[33px] font-[700] leading-[40px] tracking-[0.25px] pb-10">Masuk</p>
        <form action="#" className="">
          <CustomInput label={"Email"} value={value} name="email" placeholder="mail@mail.com" type="email" setValue={setValue} />
          <CustomInput label={"Password"} value={value} name="password" placeholder="**********" type="password" setValue={setValue} />
          <div className="pt-10">
            {loading ? (
              <div type="submit" className="w-full flex justify-center bg-[#0B3B36] p-3 rounded-lg">
                <div className="animate-pulse">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <span className="ml-2 self-center text-gray-100 tracking-wide font-semibold animate-pulse">Loading...</span>
              </div>
            ) : (
              <button
                type="submit"
                className="w-full flex justify-center bg-[#0B3B36] text-gray-100 p-3 rounded-lg tracking-wide font-semibold cursor-pointer"
                onClick={(e) => {
                  handleLogin(e);
                }}
              >
                Masuk
              </button>
            )}
            {message.length > 1 ? <p className="text-sm font-medium text-red-600 text-center pt-2">{message}</p> : <></>}
          </div>
        </form>
        <p className="text-sm pt-10">
          Belum memiliki akun?{" "}
          <Link to="/daftar">
            <span className="text-[#0B3B36] font-[600] cursor-pointer">Daftar</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
