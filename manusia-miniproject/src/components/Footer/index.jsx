const Footer = ({ role, bg, textColor }) => {
  return (
    <div className="w-full shadow-md">
      <div className={role === true ? "hidden" : "py-10 px-9 bg-[#0A6C62] text-white"}>
        <p className="text-[22px] font-bold mb-[10px]">Hi!Story</p>
        <p className="w-[430px] text-justify">
          “Hi!Story” adalah platform berbagi pengalaman tempat wisata museum, pengguna dapat menambahkan ulasan terkait tempat wisata, sehingga pengguna lain dapat melihat pengalaman dari pengguna lainnya
        </p>
      </div>
      <div className={"shadow-md " + bg}>
        <p className={"font-normal text-[12px] leading-4 py-2 text-center " + textColor}>Dibuat Sebagai Tugas Mini Project . Bijak Algifan Putra - React A . 2022</p>
      </div>
    </div>
  );
};
Footer.defaultProps = {
  role: true,
  bg: "bg-[#FFFFFF]",
  textColor: "text-[#252A31]",
};

export default Footer;
