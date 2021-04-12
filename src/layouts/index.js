import * as React from "react";
import { GlobalStyles } from "@styles/GlobalStyles";
import Navbar from "./common/Navbar";
import Topbar from "./common/Topbar";
import Footer from "./common/Footer";

const Layout = ({ children, ...props }) => {
  return (
    <div>
      <GlobalStyles />
      <Topbar />
      <Navbar dark={props.dark} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
