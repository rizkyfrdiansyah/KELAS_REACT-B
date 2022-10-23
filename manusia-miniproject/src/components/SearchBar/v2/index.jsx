const SearchBarV2 = ({ value, setValue }) => {
  return (
    <div className="w-full shadow-md">
      <input
        className="p-5 rounded-lg w-full border border-gray-300 focus:outline-none placeholder:font-bold font-bold"
        value={value}
        placeholder="Kata Kunci"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBarV2;
