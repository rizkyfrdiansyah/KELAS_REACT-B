import React from "react";

import { Routes, Route } from "react-router-dom";

import { Home, Item, User, HomeUser, CreateUser, NotFound } from "../pages";

const MainContent = () => {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="users" element={<User></User>}>
            <Route path="" element={<HomeUser />}></Route>
            <Route path="create" element={<CreateUser />}></Route>
          </Route>
          <Route path="items" element={<Item></Item>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    </>
  );
};

export default MainContent;
/**
 * Route '/' sebagai home utama
 * Route '/users' terdiri dari '/users', '/users/create', '/users/info/:id'
 * Route '/items' terdiri dari '/items', '/items/create', '/items/info/:id'
 */
