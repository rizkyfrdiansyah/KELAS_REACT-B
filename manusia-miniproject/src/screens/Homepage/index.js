import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SearchBarV2 from "../../components/SearchBar/v2";
import SedangPopuler from "../../components/Section/SedangPopuler";
import { Link } from "react-router-dom";
import { SubscriptionAllMuseum, SubscriptionAllUlasan } from "../../queries";
import { useSubscription } from "@apollo/client";
import { useState, useEffect } from "react";

const Homepage = () => {
  const { data: dataMuseum, loading: loadingMuseum } = useSubscription(SubscriptionAllMuseum);
  const { data: dataUlasan, loading: loadingUlasan } = useSubscription(SubscriptionAllUlasan);
  const [dataOlahMusuem, setDataOlahMusuem] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);
  // const [dataSedangPopuler, setDataSedangPopuler] = useState([])
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");

  const Olahdata = (Museum, Ulasan) => {
    const newDataTable = [];
    Museum.mini_project_museum.map((Museum, index) => {
      const temp = Ulasan.mini_project_ulasan.filter((Ulasan, index) => Ulasan.id_museum === Museum.id);

      newDataTable.push({ ...Museum, ["jumlahUlasan"]: temp.length, ["No"]: index + 1 });
    });
    setDataOlahMusuem(newDataTable);
  };

  useEffect(() => {
    if (dataMuseum !== undefined && dataUlasan !== undefined) {
      Olahdata(dataMuseum, dataUlasan);
    } else if (loadingMuseum === false && dataMuseum === undefined) {
      setMessage("Data Tidak Berhasil Di Load");
    } else if (loadingUlasan === false && dataUlasan === undefined) {
      setMessage("Ulasan Tidak Berhasil Di Load");
    }
  }, [dataMuseum, dataUlasan, loadingMuseum, loadingUlasan]);

  useEffect(() => {
    if (search.length > 1 && dataOlahMusuem.length > 1) {
      const tempData = [];
      dataOlahMusuem.map((data) => {
        if (data.nama.toLowerCase().includes(search.toLowerCase()) || data.alamat.toLowerCase().includes(search.toLowerCase())) {
          tempData.push(data);
        }
      });
      setDataSearch(tempData);
    } else {
      setDataSearch([]);
    }
  }, [search]);

  console.log(dataOlahMusuem);

  return (
    <div className="bg-[#F8F9FA]">
      <Navbar />
      <div className="h-[80vh] flex flex-col">
        <div className="flex justify-between gap-16 m-auto w-[85%]">
          <img src="/landingimg.png" className="h-auto" />
          <p className="self-center text-[#0A6C62] text-[64px] font-semibold w-auto">Temukan dan bagikan pengalaman anda!</p>
        </div>
        <div className="flex justify-center">
          <div className="relative w-[600px]">
            <SearchBarV2 value={search} setValue={setSearch} />
            <div className="absolute bg-white w-full">
              {dataSearch.map((data, dataIndex) => (
                <Link to={"/page/" + data.id}>
                  <div className="flex gap-4 border-y-2">
                    <img src={data.gambar} className="w-[125px] h-auto" />
                    <div className="self-center">
                      <p className="text-[#09564E] font-normal text-[24px] leading-8">{data.nama}</p>
                      <p className="text-[#09564E] font-light text-[20px] leading-5 overflow-hidden">{data.alamat}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {/* <button className="w-[140px] p-[10px] text-[#252A31] bg-white shadow-md border hover:bg-gray-100 text-[20px] leading-5 tracking-[0.25px] font-bold rounded-lg">Cari</button> */}
        </div>
      </div>
      <div className="bg-white my-10 py-5">
        <div className="flex mx-auto w-[90%]">
          <SedangPopuler data={dataOlahMusuem} />
        </div>
      </div>
      <Footer role={false} textColor={"text-white"} bg={"bg-[#0B3B36]"} />
    </div>
  );
};

export default Homepage;
