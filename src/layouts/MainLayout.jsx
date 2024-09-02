import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      {/* we want to show the Navbar on every page */}
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
