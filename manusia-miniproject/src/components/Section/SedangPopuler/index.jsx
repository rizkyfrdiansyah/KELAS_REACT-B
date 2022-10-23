import { useEffect, useState } from "react";
import Card from "../../Card";

const SedangPopuler = ({ data }) => {
  const [sedangPopuler, setSedangPopuler] = useState([]);

  useEffect(() => {
    const tempData = [];
    data.sort((a, b) => parseFloat(b.jumlahUlasan) - parseFloat(a.jumlahUlasan));
    data.map((data, index) => {
      if (index < 3) {
        tempData.push(data);
      }
    });
    setSedangPopuler(tempData);
  }, [data]);

  // console.log(sedangPopuler)
  return (
    <div className="w-full">
      <h5 className="text-[#0B3B36] font-semibold text-[30px] leading-9">Sedang Populer</h5>
      <p className="text-[#09564E] font-normal text-[24px] leading-8">Berikut adalah tempat tempat yang sedang populer</p>
      {data.length < 1 ? (
        <p className="animate-pulse">Loading...</p>
      ) : (
        <div className="grid grid-cols-3 gap-[30px] mt-[30px]">
          {sedangPopuler.map((data, dataIdx) => (
            <Card data={data} key={dataIdx} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SedangPopuler;
