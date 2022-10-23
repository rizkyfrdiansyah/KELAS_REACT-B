const CustomInput = ({ label, value, setValue, optional, placeholder, name, type, regex }) => {
  const HandelChange = (e, regex) => {
    if (regex) {
      if (e.target.value.match(regex) || e.target.value === "") {
        setValue({ ...value, [e.target.name]: e.target.value });
      }
    } else {
      setValue({ ...value, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className="flex flex-col w-full">
      <label className="text-sm font-medium text-gray-700 tracking-wide">
        {label} <span className={optional ? "text-[#C4351A]" : "hidden"}>*</span>
      </label>
      <input
        className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0A6C62] mt-2 mb-6"
        value={value[name]}
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={(e) => {
          HandelChange(e, regex);
        }}
      />
    </div>
  );
};
CustomInput.defaultProps = {
  optional: true,
  type: "text",
  regex: "",
};

export default CustomInput;
