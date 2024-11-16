import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    // <div style={{ display: "flex" }}>
    //   <Sidebar />
    //   <div style={{ flex: 6 }}>
    //     <Navbar />
    //     <Outlet />
    //     {children}
    //   </div>
    // </div>
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          backgroundColor: "rgba(245, 245, 245, 1)",
        }}
      >
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
