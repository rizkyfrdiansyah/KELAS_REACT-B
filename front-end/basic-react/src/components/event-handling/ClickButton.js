import React, { useState } from "react";
import Swal from "sweetalert2";

const ClickButton = () => {
  const [number, setNumber] = useState(0);

  //   const clickHandler = () => {
  //     // console.log("Sudah di clicked");
  //     // alert("Hallo, nama sy Vincent ya")
  //     Swal.fire("Good job!", `Number is ${number}`, "success");
  //   };

  const tambahHandler = () => (number >= 10 ? Swal.fire("Salah", "Tidak bisa lebih dari 10, trims.", "error") : setNumber(number + 1));

  const kurangHandler = () => (number <= 0 ? Swal.fire("Salah", "Tidak bisa kurang dari 0, trims.", "error") : setNumber(number - 1));

  return (
    <>
      <div className="container">
        <h1>{number}</h1>
        <button onClick={tambahHandler} className="btn btn-sm btn-primary">
          Tambah
        </button>
        <button onClick={kurangHandler} className="btn btn-sm btn-danger">
          Kurang
        </button>
        {/* <button onClick={clickHandler} className="btn btn-sm btn-primary"> */}
        {/* Click Me */}
        {/* </button> */}
      </div>
    </>
  );
};

export default ClickButton;
