import CustomInput from "../../Input";
import InputImageSingle from "../../InputImage/single";
import InputImageMultiple from "../../InputImage/multiple";
import ListFoto from "../../Table/ListFoto";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMuseum, updateMuseum, SubscriptionAllFoto, addAlbumMuseum } from "../../../queries";
import { useMutation, useQuery, useSubscription } from "@apollo/client";

const EditMuseum = () => {
  const { id } = useParams();
  const [inputActive, setInputActive] = useState(false);
  const [active, setActive] = useState(0);
  const [errorMessage, setErrorMessage] = useState([]);
  const [errorMessageFoto, setErrorMessageFoto] = useState("");
  const [value, setValue] = useState({
    namaTempat: "",
    alamat: "",
    jadwal: "",
    kontak: "",
    deskripsi: "",
    thumbnail: "",
  });
  const [inputsFoto, setinputsFoto] = useState([
    {
      filename: "",
      imgBase64: "",
    },
  ]);
  const [dataListFoto, setDataListFoto] = useState([]);

  const [insertAlbumMuseum, { loading: albumLoading, error: albumError }] = useMutation(addAlbumMuseum, {});

  const {
    data: dataFoto,
    loading: loadingFoto,
    error: errorFoto,
  } = useSubscription(SubscriptionAllFoto, {
    variables: {
      where: {
        id_museum: { _eq: id },
      },
    },
  });
  const [UpdateMuseum, { loading: loadingUpdate, error: errorUpdate }] = useMutation(updateMuseum);
  const { data, loading, error } = useQuery(getMuseum, {
    variables: {
      where: {
        id: { _eq: id },
      },
    },
    onCompleted: (data) => {
      setValue({
        namaTempat: data.mini_project_museum[0].nama,
        alamat: data.mini_project_museum[0].alamat,
        jadwal: data.mini_project_museum[0].jadwal,
        kontak: data.mini_project_museum[0].kontak,
        deskripsi: data.mini_project_museum[0].deksripsi,
        thumbnail: data.mini_project_museum[0].gambar,
      });
    },
  });

  const ValidasiInput = () => {
    const tempErrorMessage = [];
    if (value.namaTempat.length === 0) {
      tempErrorMessage.push("Nama Tempat tidak Boleh Kosong");
    }
    if (value.alamat.length === 0) {
      tempErrorMessage.push("Alamat tidak Boleh Kosong");
    }
    if (value.deskripsi.length === 0) {
      tempErrorMessage.push("Deskripsi tidak boleh kosong");
    }
    if (value.thumbnail.length === 0) {
      tempErrorMessage.push("Harus Ada Thumbnail");
    }
    setErrorMessage(tempErrorMessage);
    if (tempErrorMessage.length > 0) {
      return false;
    } else {
      return true;
    }
  };

  const HandleSubmit = () => {
    if (ValidasiInput()) {
      UpdateMuseum({
        variables: {
          where: {
            id: { _eq: id },
          },
          _set: {
            nama: value.namaTempat,
            kontak: value.kontak,
            jadwal: value.jadwal,
            gambar: value.thumbnail,
            deksripsi: value.deskripsi,
            alamat: value.alamat,
          },
        },
      });
    }
  };

  const HandleSubmitAlbum = () => {
    const Album = inputsFoto.map((data) => {
      if (data.filename.length !== 0 || data.imgBase64.length !== 0) {
        return {
          id_museum: id,
          img: data.imgBase64,
        };
      }
    });
    if (Album.includes(undefined)) {
      setErrorMessageFoto("Terdapat Input Field Yang Tidak Terisi");
    } else {
      insertAlbumMuseum({
        variables: {
          objects: Album,
        },
      });
    }
  };

  useEffect(() => {
    if (loadingFoto === false) {
      setDataListFoto(dataFoto.mini_project_album);
    }
  }, [dataFoto]);

  return (
    <>
      {loading === true ? (
        <span className="text-[14px] text-gray-800 animate-pulse">Loading... </span>
      ) : data?.mini_project_museum.length === 0 && loading === false ? (
        <span className="text-[10px] text-gray-500">Data Tidak Ditemukan </span>
      ) : (
        <div className="bg-white shadow-lg p-8 mb-8">
          <h4 className="font-semibold text-[30px] leading-10 tracking-[0.25px] text-[#252A31] mb-6">Edit</h4>
          <div className="border-b-[3px] flex gap-2 text-[#252A31] mb-6">
            <button
              className={`border-b-[3px] py-2 px-4 translate-y-[3px] ${active === 0 ? "border-[#0B3B36]" : ""}`}
              onClick={() => {
                setActive(0);
              }}
            >
              Museum
            </button>
            <button
              className={`border-b-[3px] py-2 px-4 translate-y-[3px] ${active === 1 ? "border-[#0B3B36]" : ""}`}
              onClick={() => {
                setActive(1);
              }}
            >
              Foto
            </button>
          </div>
          <div className={active === 0 ? "block" : "hidden"}>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-0">
              <CustomInput label={"Nama Tempat"} optional={true} value={value} name={"namaTempat"} placeholder={"Nama Tempat"} setValue={setValue} />
              <CustomInput label={"Alamat Museum"} optional={true} value={value} name={"alamat"} placeholder={"Alamat Museum"} setValue={setValue} />
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-0">
              <CustomInput label={"jadwal (Optional)"} optional={false} value={value} name={"jadwal"} placeholder={"Jadwal Museum"} setValue={setValue} />
              <CustomInput label={"Kontak (Optional)"} optional={false} value={value} name={"kontak"} placeholder={"Kontak Museum"} setValue={setValue} regex={/^[ 0-9()+*#]+$/} />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 tracking-wide">
                Deskripsi <span className={"text-[#C4351A]"}>*</span>
              </label>
              <textarea
                className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0A6C62] mt-2 mb-4 resize-none"
                rows={4}
                placeholder="Deskripsi Museum"
                value={value.deskripsi}
                name="deskripsi"
                onChange={(e) => {
                  setValue({ ...value, [e.target.name]: e.target.value });
                }}
              >
                {value.deskripsi}
              </textarea>
            </div>
            <div className="flex flex-col pb-6 border-b">
              <InputImageSingle label={"Thumbnail"} name={"thumbnail"} optional={true} id={"Thumbnail"} value={value} setValue={setValue} />
              <div className="mt-6">
                <img src={value.thumbnail} className="w-[200px]" />
              </div>
            </div>
            <div>
              {errorMessage.length > 0 ? (
                <ul className="list-disc">
                  {errorMessage.map((message, index) => (
                    <li key={index} className="text-sm text-red-600 font-normal leading-5 tracking-tight">
                      {message}
                    </li>
                  ))}
                </ul>
              ) : (
                ""
              )}
            </div>
            <div className="flex justify-end py-2">
              {loadingUpdate ? (
                <span className="text-3xl animate-pulse">Loading...</span>
              ) : (
                <button className="py-[10px] px-8 text-white bg-[#0B3B36] text-sm leading-5 tracking-[0.25px] font-medium rounded-lg" onClick={() => HandleSubmit()}>
                  Simpan Dan Unggah
                </button>
              )}
            </div>
          </div>
          <div className={active === 1 ? "block" : "hidden"}>
            <div>{dataListFoto.length < 1 ? <p className="text-[10px] text-gray-500">Tidak Tersedia Foto</p> : <ListFoto data={dataListFoto} />}</div>
            <div className="my-4">
              {inputActive ? (
                <div>
                  <button className="py-[10px] px-6 border-2 border-[#E0E0E0] rounded-lg gap-2 text-red-700 hover:bg-red-700 hover:border-white hover:text-white" onClick={() => setInputActive(false)}>
                    {" "}
                    <RemoveCircleOutlinedIcon /> Close
                  </button>
                  <div className="py-3 my-2 border-y-2">
                    <InputImageMultiple label={"Foto"} id={"Multiple"} inputsFoto={inputsFoto} setinputsFoto={setinputsFoto} />
                  </div>
                  <div className="flex justify-end">
                    <span className={errorMessageFoto.length > 0 ? "text-sm text-red-600 font-normal leading-5 tracking-tight" : "hidden"}>{errorMessageFoto}</span>
                    {albumLoading ? (
                      <span className="text-3xl animate-pulse">Loading...</span>
                    ) : (
                      <button className="py-[10px] px-8 text-white bg-[#0B3B36] text-sm leading-5 tracking-[0.25px] font-medium rounded-lg" onClick={() => HandleSubmitAlbum()}>
                        Simpan Dan Unggah
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <button className="py-[10px] px-6 border-2 border-[#E0E0E0] rounded-lg gap-2 text-[#116E1C] hover:bg-[#116E1C] hover:border-white hover:text-white" onClick={() => setInputActive(true)}>
                  {" "}
                  <AddCircleOutlineRoundedIcon /> Tambah
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditMuseum;
