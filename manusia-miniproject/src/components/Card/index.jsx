import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <Link to={"/page/" + data.id}>
      <div className="w-full p-[10] bg-[#F8F9FA] border shadow-xl rounded-lg cursor-pointer">
        <img src={data.gambar} className="h-[220px] w-full object-cover"></img>
        <div className="flex justify-between mx-3 my-3 overflow-hidden">
          <div className="w-[70%]">
            <p className="text-[#09564E] font-bold">{data.nama}</p>
          </div>
          <div className="w-[30%]">
            <p className="text-[#09564E] font-normal">
              Jumlah Ulasan : <span className="font-bold">{data.jumlahUlasan}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Card;
