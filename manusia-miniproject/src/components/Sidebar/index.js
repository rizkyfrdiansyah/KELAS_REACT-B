import DashboardIcon from "@mui/icons-material/Dashboard";
import AddBoxIcon from "@mui/icons-material/AddBox";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Sidebar = ({ active }) => {
  // const [ active, setActive ] = useState(0);
  const navigate = useNavigate();
  // console.log(active)

  return (
    <div className="w-[250px] h-auto bg-white shadow-md">
      <div className="flex justify-center mx-auto mt-6 mb-10">
        <Link to={"/"}>
          <p className="font-bold text-[22px] leading-[26px] cursor-pointer">Hi!Story</p>
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <div
          onClick={() => {
            navigate("/admin");
          }}
          className={`${active === 0 ? "bg-[#0A6C62] text-white py-2" : "bg-white text-[#8A92A6]"} mx-4 px-6 rounded-lg cursor-pointer`}
        >
          <div className="flex gap-4">
            <div className="self-center">
              <DashboardIcon />
            </div>
            <p className="text-[16px] font-normal leading-7">Dashboard</p>
          </div>
        </div>
        <div
          onClick={() => {
            navigate("/admin/tambah");
          }}
          className={`${active === 1 ? "bg-[#0A6C62] text-white py-2" : "bg-white text-[#8A92A6]"} mx-4 px-6 rounded-lg cursor-pointer`}
        >
          <div className="flex gap-4">
            <div className="self-center">
              <AddBoxIcon />
            </div>
            <p className="text-[16px] font-normal leading-7">Tambah</p>
          </div>
        </div>
        <div className={`${active === 2 ? "bg-[#0A6C62] text-white py-2" : "bg-white text-[#8A92A6]"} mx-4 px-6 rounded-lg cursor-pointer`}>
          <div className="flex gap-4">
            <div className="self-center">
              <EditIcon />
            </div>
            <p className="text-[16px] font-normal leading-7">Edit</p>
          </div>
        </div>
        <div className="mx-4 border-b"></div>
      </div>
    </div>
  );
};

export default Sidebar;
