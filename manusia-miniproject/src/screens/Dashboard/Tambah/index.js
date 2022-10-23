import Sidebar from "../../../components/Sidebar";
import Logout from "../../../components/Section/Logout";
import Footer from "../../../components/Footer";
import TambahMuseum from "../../../components/Section/TambahMuseum";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Tambah = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user.role !== "admin") {
      navigate("/");
    }
  });
  return (
    <>
      <div className="flex bg-[#F6F7FB]">
        <Sidebar active={1} />
        <div className="w-full min-h-screen flex flex-col justify-between ">
          <div className="mx-10">
            <div className="flex justify-end">
              <Logout />
            </div>
            <TambahMuseum />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Tambah;
