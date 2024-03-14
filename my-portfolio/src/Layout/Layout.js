import React from 'react';
import { Outlet } from "react-router-dom";
import "./Layout.css";
import Navbar from "../NavBar/NavBar";

const Layout = () => {
    return (
        <div className="Layout">
          <Navbar />
          <Outlet />
        </div>
      );
}
 
export default Layout;