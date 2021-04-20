import styled from "styled-components";

export const BlogWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 1024px) {
    flex-direction: column;
  }
`;

export const BlogArticleWrapper = styled.div`
  margin-bottom: 70px;
  width: 100%;
  @media (min-width: 768px) {
    width: 30%;
    margin-right: 20px;
  }
  @media (min-width: 1024px) {
    margin-right: 0;
    width: 350px;
  }
`;
