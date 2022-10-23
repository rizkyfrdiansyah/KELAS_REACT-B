import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
// import { useState } from 'react';

const Pagination = ({ lengthData, index, setIndex }) => {
  const length = Math.ceil(lengthData / 5);

  return (
    <div className="flex">
      {index <= 1 || lengthData === 0 ? (
        <ArrowBackIosRoundedIcon className="self-center text-gray-300" />
      ) : (
        <ArrowBackIosRoundedIcon
          className="self-center text-gray-500 cursor-pointer"
          onClick={() => {
            setIndex(index - 1);
          }}
        />
      )}
      <div className="flex">
        <div className="w-8 h-8 border flex">
          <span className="m-auto">{index}</span>
        </div>
        <div className="w-8 h-8 flex">
          <span className="m-auto">/</span>
        </div>
        <div className="w-8 h-8 flex">
          <span className="m-auto">{length}</span>
        </div>
      </div>
      {index == length || lengthData === 0 ? (
        <ArrowForwardIosRoundedIcon className="self-center text-gray-300" />
      ) : (
        <ArrowForwardIosRoundedIcon
          className="self-center text-gray-500 cursor-pointer"
          onClick={() => {
            setIndex(index + 1);
          }}
        />
      )}
    </div>
  );
};

export default Pagination;
