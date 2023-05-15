import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./global/Header";
import Footer from "./global/Footer";
import Home from "../pages/Home";
import List from "../pages/List";
import Bookmark from "../pages/Bookmark";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list/*" element={<List />}>
            <Route path=":id" element={<List />} />
          </Route>
          <Route path="/bookmark" element={<Bookmark />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Router;
