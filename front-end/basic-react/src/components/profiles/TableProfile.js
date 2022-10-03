import React from "react";

const TableProfile = () => {
  const profiles = [
    {
      id: 1,
      name: "Vincent",
      hobby: "coding",
    },
    {
      id: 2,
      name: "Admin",
      hobby: "editing",
    },
    {
      id: 3,
      name: "Ncent",
      hobby: "makan",
    },
    {
      id: 4,
      name: "James",
      hobby: "minum",
    },
    {
      id: 5,
      name: "Jack",
      hobby: "maen valorant",
    },
  ];
  return (
    <>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Hobby</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile) => {
            const { id, name, hobby } = profile;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{hobby}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableProfile;
