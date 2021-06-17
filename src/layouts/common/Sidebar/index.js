import { Link } from "gatsby";
import React, { useEffect } from "react";
import styled from "styled-components";

import {
  Medical,
  Wellness,
  Menu,
  Blog,
  Events,
  Donate,
  SmallLogo,
} from "./svg";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 11.3rem;
  background: #fff;
  height: 100vh;

  border-left: 1px solid #f5f5ef;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 3.8rem;
`;

const Item = styled(Link)`
  padding: 3.2rem 0;
  width: 100%;
  text-align: center;

  svg {
    path {
      transition: all 0.4s ease;
    }
  }

  &:nth-child(1),
  :nth-child(2),
  :nth-child(3),
  :nth-child(4) {
    border-bottom: 1px solid #f2f2f2;
  }

  &:nth-child(6) {
    padding-top: 0;
  }

  &:nth-child(7) {
    transition: all 0.4s ease;
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
          transition: all 0.4s ease;
          fill: #6ca448;
        }
        path:last-child {
          opacity: 0;
        }
      }
    }

    &:nth-child(3) {
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
    }

    &:nth-child(4),
    &:nth-child(5) {
      svg {
        path {
          fill: #6ca448;
        }
      }
    }

    &:nth-child(6) {
      transition: all 0.4s ease;
      filter: brightness(1.1);
    }
  }
`;

const Sidebar = () => {
  useEffect(() => {
    const logo = document.getElementById("bmh-logo");

    const revealLogo = () => {
      const y = window.scrollY;
      if (y >= 80) {
        logo.style.opacity = "1";
      } else {
        logo.style.opacity = "0";
      }
    };

    window.addEventListener("scroll", revealLogo);

    return () => {
      window.removeEventListener("scroll", revealLogo);
    };
  });

  return (
    <Wrapper>
      <Content>
        <Item>
          <Medical />
        </Item>
        <Item>
          <Wellness />
        </Item>
        <Item>
          <Menu />
        </Item>
        <Item>
          <Blog />
        </Item>
        <Item>
          <Events />
        </Item>
        <Item>
          <Donate />
        </Item>
        <Item id="bmh-logo" to="/">
          <SmallLogo />
        </Item>
      </Content>
    </Wrapper>
  );
};

export default Sidebar;
