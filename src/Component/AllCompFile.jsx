import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Header/Navbar";
import "./AllComp.css";
import '../Component/Header/Style/Header.css'
import Signup from "./Header/VerificationFolder/Signup";
import Signin from "./Header/VerificationFolder/Signin";
import Home from "./Main/Home";

const AllCompFile = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AllCompFile;
