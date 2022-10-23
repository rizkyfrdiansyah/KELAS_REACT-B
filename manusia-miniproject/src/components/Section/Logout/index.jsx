import { handleChanges } from "../../../redux/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.user)
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
    navigate("/");
  };

  return (
    <div className="flex gap-2 py-7">
      <p className="text-[#252A31] self-center font-medium text-[22px]">Halo Admin</p>
      <button
        className="bg-[#252A31] text-white rounded-lg py-[5px] px-[8.5px] text-[18px] font-normal"
        onClick={() => {
          Logout();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
