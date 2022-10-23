import CommentBox from "../../Comment/CommentBox";
import InputComment from "../../Comment/InputComment";
import Swal from "sweetalert2";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { addUlasan, getMuseumAndUlasan } from "../../../queries";
import { useNavigate } from "react-router-dom";

const KontenMuseum = ({ id }) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [dataMuseum, setDataMusem] = useState({
    nama: "",
    gambar: "",
    alamat: "",
    kontak: "",
    jadwal: "",
  });
  const [dataUlasan, setDataUlasan] = useState([]);
  const [dataFoto, setDataFoto] = useState([]);
  const [shown, setShown] = useState(false);
  const [value, setValue] = useState({
    text: "",
    Gambar: "",
  });
  const [isEmptyMessage, setIsEmptyMessage] = useState("");
  const [AddUlasan, { data: resDataUlasan, loading: resLoadingUlasan }] = useMutation(addUlasan, {
    onCompleted: (resDataUlasan) => {
      console.log(resDataUlasan);
      setShown(false);
      setValue({
        text: "",
        Gambar: "",
      });
    },
    refetchQueries: [
      {
        query: getMuseumAndUlasan,
        variables: {
          museum: {
            id: { _eq: id },
          },
          ulasan: {
            id_museum: { _eq: id },
          },
          album: {
            id_museum: { _eq: id },
          },
        },
      },
    ],
  });

  const { data, loading, error } = useQuery(getMuseumAndUlasan, {
    variables: {
      museum: {
        id: { _eq: id },
      },
      ulasan: {
        id_museum: { _eq: id },
      },
      album: {
        id_museum: { _eq: id },
      },
    },
    onCompleted: (data) => {
      if (data.mini_project_museum.length === 0) {
        setIsEmptyMessage("ID Tidak Ditemukan atau Tidak Ada Data");
      }
      setDataMusem(data.mini_project_museum[0]);
      setDataFoto(data.mini_project_album);
      const arrUlasan = [];
      data.mini_project_ulasan.map((ulasan) => {
        data.mini_project_users.map((user) => {
          if (ulasan.id_user === user.id) {
            arrUlasan.push({
              nama: user.nama,
              date: ulasan.date,
              text: ulasan.ulasan,
              img: ulasan.img,
              profile: user.profile_pic,
            });
          }
        });
      });
      setDataUlasan(arrUlasan);
    },
  });

  const handleSubmitUlasan = () => {
    if (user.id.toString().length < 1) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Anda Belum Login!",
      });
    } else if (value.text.length < 1 && value.Gambar.length < 1) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ulasan Masih Kosong!",
      });
    } else {
      AddUlasan({
        variables: {
          objects: {
            id_museum: id,
            id_user: user.id,
            img: value.Gambar,
            ulasan: value.text,
          },
        },
      });
    }
  };

  return (
    <div className="flex justify-center mx-auto w-[80%]">
      {isEmptyMessage.length > 0 ? (
        <div className="h-[87vh] flex">
          <p className="m-auto">{isEmptyMessage}</p>
        </div>
      ) : loading ? (
        <div className="h-[87vh] flex">
          <p className="m-auto animate-pulse">Loading...</p>
        </div>
      ) : (
        <div className="w-full">
          <div className="flex justify-between pb-4 pt-10">
            <span
              onClick={() => {
                navigate("/");
              }}
              className="self-center font-semibold text-[20px] text-[#0A6C62] cursor-pointer"
            >
              <ArrowBackRoundedIcon />
              Kembali
            </span>
            <span className="font-semibold text-[40px] text-[#0A6C62]">{dataMuseum.nama}</span>
          </div>
          <img src={dataMuseum.gambar} className="w-full h-[450px] rounded-xl object-cover shadow-md" />
          <div className="py-5">
            <table className="border-collapse">
              <tbody className="text-[#0B3B36] text-[18px]">
                {dataMuseum.alamat.length > 1 ? (
                  <tr>
                    <td className="align-top pr-4">Alamat </td>
                    <td>: {dataMuseum.alamat}</td>
                  </tr>
                ) : (
                  <></>
                )}
                {dataMuseum.jadwal.length > 1 ? (
                  <tr>
                    <td>Jadwal </td>
                    <td>: {dataMuseum.jadwal}</td>
                  </tr>
                ) : (
                  <></>
                )}
                {dataMuseum.kontak.length > 1 ? (
                  <tr>
                    <td>Kontak</td>
                    <td>: {dataMuseum.kontak}</td>
                  </tr>
                ) : (
                  <></>
                )}
              </tbody>
            </table>
            <div className="border-b border-4 rounded-xl border-[#0B3B36] bg-[#0B3B36]"></div>
          </div>
          <div>
            <h5 className="text-[#0B3B36] text-[48px] font-semibold">Deskripsi</h5>
            <p className="text-justify text-[#0B3B36] text-[22px]">{dataMuseum.deksripsi}</p>
          </div>
          <div className={`overflow-auto  ${dataFoto.length === 0 ? "hidden" : "block"}`}>
            <p className="text-[#0B3B36] text-[48px] font-semibold">Foto</p>
            <div className="flex gap-4">
              {dataFoto.map((foto, fotoIdx) => (
                <img src={foto.img} key={fotoIdx} className="h-[220px] w-[330px] object-cover rounded-lg" />
              ))}
            </div>
          </div>
          <button onClick={() => setShown(!shown)} className="py-3 px-5 my-5 bg-[#0B3B36] text-white rounded-lg ">
            Tambah Ulasan
          </button>
          <div className="border-b border-4 rounded-xl border-[#0B3B36] bg-[#0B3B36]"></div>
          <div className={`my-4  ${shown ? "block" : "hidden"}`}>
            <InputComment value={value} setValue={setValue} />
            <button onClick={handleSubmitUlasan} className="py-3 px-5 my-5 bg-[#0B3B36] text-white rounded-lg">
              Submit
            </button>
          </div>
          <div className="">
            {dataUlasan.length < 1 ? (
              <p className="m-auto py-2 border-t-2">Ulasan Tidak Tersedia</p>
            ) : (
              dataUlasan.map((ulasan, ulasanIdx) => <CommentBox key={ulasanIdx} text={ulasan.text} profile_pic={ulasan.profile} img={ulasan.img} nama={ulasan.nama} date={ulasan.date} />)
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default KontenMuseum;
