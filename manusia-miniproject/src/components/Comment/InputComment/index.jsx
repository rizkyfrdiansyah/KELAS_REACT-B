import InputImageSingle from "../../InputImage/single";

const InputComment = ({ value, setValue }) => {
  return (
    <div className="">
      <textarea
        className="p-3 rounded-lg w-full border border-gray-300 focus:outline-none placeholder:font-normal font-normal resize-none"
        placeholder="Tambahkan Ulasan"
        name="text"
        value={value.text}
        onChange={(e) => {
          setValue({ ...value, ["text"]: e.target.value });
        }}
      ></textarea>
      <InputImageSingle label={"Gambar"} name={"Gambar"} value={value} setValue={setValue} />
    </div>
  );
};

export default InputComment;
