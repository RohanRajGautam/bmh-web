import * as React from "react"
import { GlobalStyles } from "../styles/GlobalStyles"
import Navbar from "./common/Navbar"
// import { Link } from "gatsby"

const Layout = ({ children }) => {
  "";
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
