import React from "react";

const ListUlasan = ({ dataUlasan }) => {
  const listUlasan = dataUlasan.ulasan;

  return (
    <div className="col-12 col-lg-5">
      <div className="list-ulasan">
        <h4>{listUlasan.length} Ulasan</h4>
        <hr />

        {dataUlasan?.ulasan.map((value, valueIdx) => (
          <div key={value.id}>
            <h6>{value.nama}</h6>
            <p>{value.ulasan}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListUlasan;
