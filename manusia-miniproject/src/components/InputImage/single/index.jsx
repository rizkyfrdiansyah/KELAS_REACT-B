import { useState } from "react";
import { getBase64 } from "../../../utils/getBase64";

const InputImageSingle = ({ label, optional, id, value, setValue, name }) => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    getBase64(e.target.files[0])
      .then((result) => {
        setValue({ ...value, [name]: result });
        setInput(e.target.files[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 tracking-wide mb-2 text-left">
        {label} <span className={optional ? "text-[#C4351A]" : "hidden"}>*</span>
      </label>
      <input
        type="file"
        className="hidden"
        id={id}
        onChange={(e) => {
          handleInput(e);
        }}
        accept="image/png, image/jpeg, image/jpg"
      />
      <div className="flex gap-4">
        <button onClick={() => document.getElementById(id).click()} className="border border-[#D0D5DD] bg-[#F2F4F7] py-[6px] px-4 rounded-lg">
          <span>Upload File</span>
        </button>
        {input.length != 0 ? (
          <span className="self-center font-normal text-sm leading-5 tracking-[0.25px] text-[#667085]">{input.name}</span>
        ) : (
          <span className="self-center font-normal text-sm leading-5 tracking-[0.25px] text-[#667085]">No file chosen</span>
        )}
      </div>
    </div>
  );
};
InputImageSingle.defaultProps = {
  id: "gambar",
  optional: false,
};

export default InputImageSingle;
