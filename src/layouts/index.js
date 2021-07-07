import * as React from "react";

import { GlobalStyles } from "@styles/GlobalStyles";
import "../assets/fonts/fonts.css";

import Footer from "./common/Footer";
import Sidebar from "./common/Sidebar";
import Navbar from "./common/Navbar";

const Layout = ({ children, ...props }) => {
  return (
    <div syle={{ position: "relative" }}>
      <GlobalStyles />
      <Navbar />
      <main>{children}</main>
      <Sidebar />
      <Footer />
    </div>
  );
};

export default Layout;
