import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import SearchBarV1 from "../../SearchBar/v1";
import ListMuseum from "../../Table/ListMuseum";
import Pagination from "../../Pagination";
import { useEffect, useState } from "react";
import { useMutation, useSubscription } from "@apollo/client";
import { deleteMuseum, SubscriptionAllMuseum, SubscriptionAllUlasan } from "../../../queries";
import { useNavigate } from "react-router-dom";

const DetailMuseum = () => {
  const router = useNavigate();
  const [index, setIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(1);
  const [dataList, setData] = useState([]);
  const [dataTable, setDataTable] = useState([]);
  const [search, setSearch] = useState("");
  const [previewSearch, setPreviewSearch] = useState("");
  const [message, setMessage] = useState("");

  const handleShowData = (index, dataList) => {
    const start = (index - 1) * 5;
    const end = start + 5;
    setEndIndex(dataList.length);
    setData(dataList.slice(start, end));
  };

  const Olahdata = (Museum, Ulasan) => {
    const newDataTable = [];
    Museum.mini_project_museum.map((Museum, index) => {
      const temp = Ulasan.mini_project_ulasan.filter((Ulasan, index) => Ulasan.id_museum === Museum.id);

      newDataTable.push({ ...Museum, ["jumlahUlasan"]: temp.length, ["No"]: index + 1 });
    });
    setDataTable(newDataTable);
    handleShowData(1, newDataTable);
    // console.log(newDataTable)
    // console.log(Museum, Ulasan)
  };

  const { data: dataSubsMuseum, loading: loadingSubsMuseum, error: errorSubsMuseum } = useSubscription(SubscriptionAllMuseum);
  const { data: dataSubsUlasan, loading: loadingSubsUlasan, error: errorSubsUlasan } = useSubscription(SubscriptionAllUlasan);
  const [DeleteMuseum, { data: dataDeleted, loading: loadingDelete, error: errorDelete }] = useMutation(deleteMuseum);

  // const { data:dataQuery, loading, error} = useQuery(getAllMuseumAndUlasan, {
  //   onCompleted: dataQuery => {
  //     Olahdata(dataQuery)
  //     if(dataQuery.mini_project_museum.length === 0){
  //       setMessage("Data Kosong")
  //     }
  //   }
  // });

  // const {data:dataSubsMuseum, loading:loadingSubsMuseum, error:errorSubsMuseum} = useSubscription(SubscriptionMuseum)

  const handleSearch = (key) => {
    const result = dataTable.filter((data) => {
      if (data.nama.toLowerCase().includes(key)) {
        return data;
      } else if (data.alamat.toLowerCase().includes(key)) {
        return data;
      } else if (data.deksripsi.toLowerCase().includes(key)) {
        return data;
      } else if (data.jumlahUlasan.toString().includes(key)) {
        return data;
      }
    });
    setData(result);
    handleShowData(1, result);
    setPreviewSearch(key);
  };

  useEffect(() => {
    handleShowData(index, dataTable);
  }, [index]);

  useEffect(() => {
    if (search.length === 0) {
      handleShowData(index, dataTable);
      setPreviewSearch("");
    }
  }, [search]);

  useEffect(() => {
    if (dataSubsMuseum !== undefined && dataSubsUlasan !== undefined) {
      Olahdata(dataSubsMuseum, dataSubsUlasan);
    } else if (loadingSubsMuseum === false && dataSubsMuseum === undefined) {
      setMessage("Data Tidak Berhasil Di Load");
    } else if (loadingSubsUlasan === false && dataSubsUlasan === undefined) {
      setMessage("Ulasan Tidak Berhasil Di Load");
    }
  }, [dataSubsMuseum, dataSubsUlasan, loadingSubsMuseum, loadingSubsUlasan]);

  // console.log(dataSubsMuseum, loadingSubsMuseum)

  return (
    <div className="bg-white shadow-lg p-8 mb-8">
      <h4 className="font-semibold text-[30px] leading-10 tracking-[0.25px] text-[#252A31] mb-6">Museum</h4>
      <div className="flex justify-between mb-4">
        <SearchBarV1 value={search} setValue={setSearch} handleSearch={handleSearch} />
        <button className="py-[10px] px-6 border-2 border-[#E0E0E0] rounded-lg gap-2 text-[#116E1C] hover:bg-[#116E1C] hover:border-white hover:text-white" onClick={() => router("/admin/tambah")}>
          {" "}
          <AddCircleOutlineRoundedIcon /> Tambah
        </button>
      </div>
      {previewSearch.length > 0 ? (
        <div>
          <span className="text-[10px] text-gray-500">keyword yang dicari : {previewSearch}</span>
          {dataList.length === 0 ? <p className="text-[10px] text-gray-500">Data Tidak Ditemukan</p> : <ListMuseum data={dataList} DeleteMuseum={DeleteMuseum} />}
        </div>
      ) : message.length > 1 ? (
        <span className="text-[10px] text-gray-500">{message}</span>
      ) : (
        <ListMuseum data={dataList} DeleteMuseum={DeleteMuseum} />
      )}
      <div className="mt-8 flex justify-center">
        <Pagination lengthData={endIndex} index={index} setIndex={setIndex} />
      </div>
    </div>
  );
};

export default DetailMuseum;
