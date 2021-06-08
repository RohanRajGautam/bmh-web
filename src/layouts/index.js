import * as React from "react";
import { GlobalStyles } from "@styles/GlobalStyles";
import Navbar from "./common/Navbar";
import Topbar from "./common/Topbar";
import Footer from "./common/Footer";
import Sidebar from "./common/Sidebar";
import Scroll from "@components/ScrollTop";
import "../assets/fonts/fonts.css";

const Layout = ({ children, ...props }) => {
  return (
    <div syle={{ position: "relative" }}>
      <GlobalStyles />
      {/* <Topbar /> */}
      {/* <Navbar dark={props.dark} /> */}
      <Scroll showBelow={250} />

      <main>{children}</main>
      <Sidebar />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
