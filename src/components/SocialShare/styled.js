import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 5.2rem;
  ul {
    display: flex;
    align-items: center;
    li {
      padding-right: 1.2rem;
      list-style-type: none;
      button,
      a {
        font-size: 18px;
        color: #000;
        display: block;
        outline: none;
        cursor: pointer;
        img {
          height: auto;
          width: 2.4rem;
        }
      }
    }
  }
`;
