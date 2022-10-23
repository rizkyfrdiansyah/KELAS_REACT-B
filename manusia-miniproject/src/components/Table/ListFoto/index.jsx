import DeleteIcon from "@mui/icons-material/Delete";

const ListFoto = ({ data, animate, loadingMessage }) => {
  // console.log(data)
  const handleDelete = (id) => {
    console.log(id);
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
              <td className="px-3 py-2">Gambar</td>
              <td className="px-3 py-2">Tanggal Upload</td>
              <td className="px-3 py-2">Aksi</td>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => (
              <tr key={index} className={`text-left font-normal text-[14px] leading-[24px] tracking-[0.25px] text-[#232D42] ${index % 2 !== 0 ? "bg-[#F4FAFF]" : "bg-white"}`}>
                <td className="py-2 text-center w-[50px]">{index + 1}</td>
                <td className="py-2 flex justify-center">
                  <img src={data.img} alt={index} />
                </td>
                <td className="px-4 text-center py-2 w-1/4">{data.upload_date}</td>
                <td className="px-4 w-[100px]">
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
ListFoto.defaultProps = {
  loadingMessage: "Loading...",
  animate: true,
};

export default ListFoto;
