import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./global/Header";
import Footer from "./global/Footer";
import Home from "../pages/Home";
import List from "../pages/List";
import Bookmark from "../pages/Bookmark";
import Kakao from "../pages/oAuth/Kakao";
const Router = () => {
  const [category, setCategory] = useState("All");
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/list/*"
            element={<List category={category} setCategory={setCategory} />}
          >
            <Route path=":id" element={<List />} />
          </Route>
          <Route
            path="/bookmark"
            element={<Bookmark category={category} setCategory={setCategory} />}
          />
          <Route path="/oAuth/kakao" element={<Kakao />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Router;
