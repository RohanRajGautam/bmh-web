import React from "react";
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
  position: absolute;
  top: 0;
  right: 0;
  width: 11.3rem;
  background: #fff;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 3.8rem;
`;

const Item = styled.div`
  padding: 3.2rem 0;
  width: 100%;
  text-align: center;

  &:nth-child(1),
  :nth-child(2),
  :nth-child(3),
  :nth-child(4) {
    border-bottom: 1px solid #f2f2f2;
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
          transition: all 0.4s;
          fill: #6ca448;
        }
        path:last-child {
          opacity: 0;
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
      transition: all 0.4s;
      filter: brightness(1.1);
    }
  }
`;

const Sidebar = () => {
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
        <Item>
          <SmallLogo />
        </Item>
      </Content>
    </Wrapper>
  );
};

export default Sidebar;
