import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import logo from "../../../images/icons/full-logo.svg"
import menu from "../../../images/icons/Union.svg"

const Navbar = () => (
  <Nav>
    <Logolink to="/">
      <img src={logo} alt="bmh-logo" draggable="false" />
    </Logolink>
    <Menulink>
      <img src={menu} alt="menu" draggable="false" />
    </Menulink>
  </Nav>
)

export default Navbar

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  /* padding: 1rem calc((100vw - 1300px) / 2); */
  padding: 0 5vw;
  align-items: center;
  z-index: 100;
  position: relative;
  transform: translateY(2rem);
`

const Logolink = styled(Link)`
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    /* height: 30px; */
    width: 150px;
  }
`
const Menulink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  /* width: 40px;
  height: 27px; */
`
