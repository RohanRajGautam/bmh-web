import styled from "styled-components";
import { mediaQueries } from "@components/MediaQueries";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 11.3rem;
  background: #fff;
  height: 100vh;

  border-left: 1px solid #f5f5ef;

  ${mediaQueries("md")`
    display: none;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 3.8rem;
`;

export const Text = styled.p`
  font-family: Mulish;
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.5rem;

  color: #15141a;
`;

export const ItemWrapper = styled.div`
  padding: 3.2rem 0;
  width: 100%;
  text-align: center;
  transition: all 0.3s ease-in-out;

  // hide all other items in sidebar when menu-icon is clicked
  &:not(:nth-child(3)) {
    opacity: ${props => (props.clicked ? "0 !important" : "1")};
  }

  &:nth-child(1),
  :nth-child(2),
  :nth-child(4) {
    border-bottom: 1px solid #f2f2f2;
  }

  &:nth-child(4) {
    border-top: 1px solid #f2f2f2;
  }

  &:hover {
    p {
      color: #6ca448;
    }

    &:nth-child(1),
    :nth-child(2) {
      svg {
        path:first-child {
          transform: translateX(1rem);
          transition: all 0.3s ease-in-out;
          fill: #6ca448;
        }
        path:last-child {
          opacity: 0;
        }
      }
    }

    &:nth-child(6) {
      filter: brightness(1.1);
    }
  }

  @media (min-height: 1100px) {
    padding: 5.2rem 0;
  }
`;

export const Item = styled.a`
  text-decoration: none;

  transition: all 0.3s ease-in-out;

  svg {
    path {
      transition: all 0.3s ease-in-out;
    }
  }

  &:nth-child(6) {
    padding-top: 0;
  }

  &:hover {
    cursor: pointer;
  }
`;
