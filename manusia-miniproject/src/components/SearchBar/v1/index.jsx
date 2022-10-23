import SearchIcon from "@mui/icons-material/Search";

const SearchBarV1 = ({ value, setValue, handleSearch }) => {
  const handleInput = () => {
    // setValue(e.target.value);
    handleSearch(value);
  };
  return (
    <div className="relative">
      <input
        className="w-full xl:w-[475px] text-base px-4 py-[6px] border border-gray-300 rounded-lg focus:outline-none"
        type="search"
        placeholder="Search...."
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleInput();
          }
        }}
      />
      <div
        className="absolute top-1 right-2"
        onClick={() => {
          handleInput();
        }}
      >
        <SearchIcon className="text-[18px] text-gray-500 mt-[4px] cursor-pointer" />
      </div>
    </div>
  );
};

export default SearchBarV1;
