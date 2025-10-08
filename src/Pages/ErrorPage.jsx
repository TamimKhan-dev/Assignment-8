import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ErrorImg from "../assets/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 w-14/15 py-4 mx-auto flex justify-center">
        <div>
          <div>
            <img src={ErrorImg} alt="" />
          </div>

          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-semibold">Oops, page not found</h2>
            <p className="text-gray-500">The page you are looking for is not available.</p>
            <Link to='/' className="btn px-10 py-5 text-lg font-normal bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white">Go Back!</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
