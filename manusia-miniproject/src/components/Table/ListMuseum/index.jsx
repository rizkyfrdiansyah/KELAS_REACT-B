import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const ListMuseum = ({ data, loadingMessage, animate, DeleteMuseum }) => {
  console.log(data);
  const navigate = useNavigate();
  const handleDelete = (id) => {
    DeleteMuseum({
      variables: {
        id: { _eq: id },
      },
    });
  };
  return (
    <>
      {data.length <= 0 ? (
        <span className={`flex justify-center text-3xl ${animate === true ? "animate-pulse" : ""}`}>{loadingMessage}</span>
      ) : (
        <table className="table-auto w-full">
          <thead className="border-collapse text-center bg-[#0A6C62] text-white">
            <tr>
              <td className="px-3 py-2">No</td>
              <td className="py-2 text-left">Foto</td>
              <td className="px-3">Nama Tempat</td>
              <td className="px-3">Alamat</td>
              <td className="px-3">Deskripsi</td>
              <td className="px-3 w-[200px]">Jumlah Ulasan</td>
              <td className="px-3">Aksi</td>
            </tr>
          </thead>
          <tbody className="">
            {data.map((data, index) => (
              <tr key={index} className={`text-left font-normal text-[14px] leading-[24px] tracking-[0.25px] text-[#232D42] ${index % 2 !== 0 ? "bg-[#F4FAFF]" : "bg-white"}`}>
                <td className="text-center">{data.No}</td>
                <td className="px-4 py-2 w-[180px] h-[130px]">
                  <img src={data.gambar} className="w-full h-full object-cover rounded-xl" />
                </td>
                <td className="px-4 py-2">{data.nama}</td>
                <td className="px-4 py-2">{data.alamat}</td>
                <td className="px-4 py-2 w-[250px]">
                  <p className="line-clamp-3">{data.deksripsi}</p>
                </td>
                <td className="text-center p-2">{data.jumlahUlasan}</td>
                <td className="px-4 w-[100px]">
                  <button
                    className="flex w-full my-2 px-6 py-2 rounded-lg border bg-white hover:bg-[#116E1C] text-[#116E1C] hover:text-white text-[14px] leading-[20px] tracking-[0.25px]"
                    onClick={() => {
                      navigate("/admin/edit/" + data.id);
                    }}
                  >
                    <EditIcon className="text-[20px]" /> <span className="self-center font-medium ml-2">Edit</span>
                  </button>
                  <button
                    className="flex w-full my-2 px-6 py-2 rounded-lg border bg-white hover:bg-red-700 text-red-700 hover:text-white text-[14px] leading-[20px] tracking-[0.25px]"
                    onClick={() => {
                      handleDelete(data.id);
                    }}
                  >
                    <DeleteIcon className="text-[20px]" /> <span className="self-center font-medium ml-2">Delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
ListMuseum.defaultProps = {
  loadingMessage: "Loading...",
  animate: true,
};

export default ListMuseum;
