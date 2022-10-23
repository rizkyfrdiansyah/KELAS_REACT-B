import CustomInput from "../../components/Input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLazyQuery, useMutation } from "@apollo/client";
import { addUser, getUser } from "../../queries";
import Swal from "sweetalert2";

const Daftar = () => {
  const [AddUser, { loading }] = useMutation(addUser, {
    onCompleted: (data) => {
      if (data.insert_mini_project_users.returning.length > 0) {
        Swal.fire({
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
  });
  const [Checkuser, { loading: checkLoading }] = useLazyQuery(getUser, {
    onCompleted: (check) => {
      if (check.mini_project_users.length > 0) {
        Swal.fire({
          icon: "warning",
          title: "Email Sudah Terdaftar",
          timer: 1500,
        });
      } else {
        AddUser({
          variables: {
            objects: {
              nama: value.nama,
              email: value.email,
              password: value.password,
            },
          },
        });
      }
    },
  });
  const [message, setMessage] = useState([]);
  const [value, setValue] = useState({
    nama: "",
    email: "",
    password: "",
  });

  const validasiInput = () => {
    const validEmail = /\S+@\S+\.\S+/;
    const tempMessage = [];
    if (value.nama.length < 1) {
      tempMessage.push("Nama Tidak Boleh Kosong");
    } else if (value.nama.length < 5) {
      tempMessage.push("Nama Terlalu Pendek");
    }
    if (value.email.length < 1) {
      tempMessage.push("Email Tidak Boleh Kosong");
    } else if (!validEmail.test(value.email)) {
      tempMessage.push("Email Tidak Sesuai");
    }
    if (value.password.length < 1) {
      tempMessage.push("Password Tidak Boleh Kosong");
    } else if (value.password.length < 8) {
      tempMessage.push("Password Kurang Dari 8 Karakter");
    }
    setMessage(tempMessage);
    if (tempMessage.length < 1) {
      return true;
    } else {
      return false;
    }
  };

  const handleDaftar = (e) => {
    e.preventDefault();
    if (validasiInput()) {
      Checkuser({
        variables: {
          where: {
            email: { _eq: value.email },
          },
        },
      });
    }
  };

  return (
    <div className="w-full flex h-screen">
      <div className="m-auto w-[350px]">
        <p className="text-[33px] font-[700] leading-[40px] tracking-[0.25px] pb-10">Daftar</p>
        <form action="#" className="">
          <CustomInput label={"Nama Lengkap"} value={value} name="nama" placeholder="nama lengkap anda" setValue={setValue} />
          <CustomInput label={"Email"} value={value} name="email" placeholder="mail@mail.com" type="email" setValue={setValue} />
          <CustomInput label={"Password"} value={value} name="password" placeholder="**********" type="password" setValue={setValue} />
          {message.length > 0 ? (
            <ul className="ml-4 list-disc">
              {message.map((message, index) => (
                <li key={index} className="text-sm text-red-600 font-normal leading-5 tracking-tight">
                  {message}
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
          <div className={message.length < 1 ? "pt-10" : "pt-2"}>
            {loading || checkLoading ? (
              <div type="submit" className="w-full flex justify-center bg-[#0B3B36] p-3 rounded-lg">
                <div className="animate-pulse">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <span className="ml-2 self-center text-gray-100 tracking-wide font-semibold animate-pulse">Loading...</span>
              </div>
            ) : (
              <button
                type="submit"
                className="w-full flex justify-center bg-[#0B3B36] text-gray-100 p-3 rounded-lg tracking-wide font-semibold cursor-pointer"
                onClick={(e) => {
                  handleDaftar(e);
                }}
              >
                Daftar
              </button>
            )}
          </div>
        </form>
        <p className="text-sm pt-10">
          Sudah memiliki akun?{" "}
          <Link to="/login">
            <span className="text-[#0B3B36] font-[600] cursor-pointer">Masuk</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Daftar;
