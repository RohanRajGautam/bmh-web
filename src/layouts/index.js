import * as React from "react"
import Navbar from "../components/Navbar"
// import { Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  )
}

export default Layout
