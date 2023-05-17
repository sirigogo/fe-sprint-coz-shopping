import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Router;
