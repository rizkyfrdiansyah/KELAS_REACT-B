import { getBase64 } from "../../../utils/getBase64";

const InputImageMultiple = ({ label, id, inputsFoto, setinputsFoto }) => {
  const handleChange = (e, index) => {
    console.log(e.target.files[0]);
    getBase64(e.target.files[0])
      .then((result) => {
        const newInput = [...inputsFoto];
        newInput[index].imgBase64 = result;
        newInput[index].filename = e.target.files[0].name;
        setinputsFoto(newInput);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const tambahInputFoto = () => {
    const newInputs = [...inputsFoto];
    newInputs.push({
      filename: "",
      imgBase64: "",
    });
    setinputsFoto(newInputs);
  };

  const deleteInputFoto = (index) => {
    const newInputs = inputsFoto.filter((data, dataIdx) => dataIdx !== index);
    setinputsFoto(newInputs);
  };

  const ResetInputs = () => {
    setinputsFoto([
      {
        filename: "",
        imgBase64: "",
      },
    ]);
  };
  return (
    <div className="flex flex-col">
      <label className="text-[25px] font-bold text-gray-700 tracking-wide mb-2">{label} </label>
      {inputsFoto.map((input, inputIdx) => {
        return (
          <div key={inputIdx} className="pb-2">
            <input type="file" className="hidden" id={id + inputIdx} onChange={(e) => handleChange(e, inputIdx)} accept="image/png, image/jpeg, image/jpg" />
            <div className="flex gap-4">
              <button onClick={() => document.getElementById(id + inputIdx).click()} className="border border-[#D0D5DD] bg-[#F2F4F7] py-[6px] px-4 rounded-lg">
                <span>Upload File</span>
              </button>
              {input.filename.length > 0 ? (
                <span className="self-center font-normal text-sm leading-5 tracking-[0.25px] text-[#667085]">{input.filename}</span>
              ) : (
                <span className="self-center font-normal text-sm leading-5 tracking-[0.25px] text-[#667085]">No file chosen</span>
              )}
              <button className={`self center bg-red-600 rounded-lg py-2 px-6 text-white ${inputsFoto.length > 1 ? "" : "hidden"}`} onClick={() => deleteInputFoto(inputIdx)}>
                Hapus
              </button>
            </div>
          </div>
        );
      })}
      <div className="pt-4 flex gap-3">
        <button className="bg-green-800 p-2 text-white rounded-lg" onClick={() => tambahInputFoto()}>
          Tambah Input File
        </button>
        <button className="bg-gray-800 p-2 text-white rounded-lg" onClick={() => ResetInputs()}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default InputImageMultiple;
