import React, { useState } from "react";

import { Link } from "react-router-dom";

const HomeUser = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "vincent123",
      email: "vincent@mail.com",
    },
    {
      id: 2,
      username: "ncent123",
      email: "ncent@mail.com",
    },
  ]);

  return (
    <>
      <h3 className="text-center m-3">List user</h3>
      <Link className="btn btn-sm btn-primary" to="/users/create">
        Create user
      </Link>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            const { id, username, email } = user;
            return (
              <tr>
                <td>{id}</td>
                <td>{username}</td>
                <td>{email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default HomeUser;
