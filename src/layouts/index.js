import * as React from "react";
import { GlobalStyles } from "@styles/GlobalStyles";
import Footer from "./common/Footer";
import Sidebar from "./common/Sidebar";
import "../assets/fonts/fonts.css";

const Layout = ({ children, ...props }) => {
  return (
    <div syle={{ position: "relative" }}>
      <GlobalStyles />
      <main>{children}</main>
      <Sidebar />
      <Footer />
    </div>
  );
};

export default Layout;
