import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#66a250" : "#fff")};
  color: ${({ primary }) => (primary ? "#fff" : "#66a250")};
  white-space: nowrap;
  width: 15em;
  max-width: 95%;
  padding: 25px 140px;
  border: none;
  border-radius: ${({ round }) => (round ? "50px" : "none")};
  display: flex;
  text-align: center;
  justify-content: center;
  text-decoration: none;
  display: inline-block;
  font-family: Mulish;
  font-size: 24px;
  font-weight: bold;
  outline: none;
  text-align: center;
  transition: 0.3s !important;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
  }

  @media screen and (max-width: 860px) {
    padding: 1.5rem 5rem;
    font-size: 18px;
    width: 20em;

  }
`;;
