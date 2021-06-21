import styled from "styled-components";
// import { SPACING, COLORS } from "@components/constants";
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

export const Item = styled.a`
  padding: 3.2rem 0;
  width: 100%;
  text-align: center;
  transition: all 0.3s ease-in-out;

  svg {
    path {
      transition: all 0.3s ease-in-out;
    }
  }

  // hide all other items in sidebar when menu-icon is clicked
  &:not(:nth-child(3)) {
    opacity: ${props => (props.clicked ? "0" : "1")};
  }

  &:nth-child(1),
  :nth-child(2),
  :nth-child(4) {
    border-bottom: 1px solid #f2f2f2;
  }

  &:nth-child(4) {
    border-top: 1px solid #f2f2f2;
  }

  &:nth-child(6) {
    padding-top: 0;
  }

  &:nth-child(7) {
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    cursor: pointer;

    &:nth-child(1),
    :nth-child(2) {
      svg {
        path:first-child {
          fill: #6ca448;
        }
        path:not(:first-child) {
          transform: translateX(1rem);
          transition: all 0.3s ease-in-out;
          fill: #6ca448;
        }
        path:last-child {
          opacity: 0;
        }
      }
    }

    /* &:nth-child(3) {
      svg {
        g {
          path:last-child {
            fill: #6ca448;
          }
          path:not(:last-child) {
            stroke: #6ca448;
          }
        }
      }
    } */

    &:nth-child(4),
    &:nth-child(5) {
      svg {
        path {
          fill: #6ca448;
        }
      }
    }

    &:nth-child(6) {
      transition: all 0.3s ease-in-out;
      filter: brightness(1.1);
    }
  }
`;
