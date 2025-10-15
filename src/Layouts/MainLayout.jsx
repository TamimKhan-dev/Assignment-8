import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import LoadingSpinner from "../Components/LoadingSpinner";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 bg-[#F5F5F5]">
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
