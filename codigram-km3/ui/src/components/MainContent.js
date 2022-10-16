import React from "react";

import { Routes, Route } from "react-router-dom";

import { Home, Feed, Post, PostDetail, PostCreate } from "../pages";

const MainContent = () => {
  return (
    <>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="feeds" element={<Feed />}></Route>
          <Route path="posts">
            <Route path="details" element={<Post />}>
              <Route path=":id" element={<PostDetail />}></Route>
            </Route>
            <Route path="create" element={<PostCreate />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default MainContent;
