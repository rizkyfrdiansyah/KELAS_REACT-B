import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import KontenMuseum from "../../components/Section/KontenMuseum";
import { useParams } from "react-router-dom";

const DetailKonten = () => {
  const { id } = useParams();
  return (
    <div className="bg-[#F8F9FA]">
      <Navbar />
      <KontenMuseum id={id} />
      <Footer admin={false} textColor={"text-white"} bg={"bg-[#0B3B36]"} />
    </div>
  );
};

export default DetailKonten;
