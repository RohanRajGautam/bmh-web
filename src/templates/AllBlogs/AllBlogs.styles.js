import styled from "styled-components";
import { Heading } from "../../components/Heading";

export const AllCardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  a {
    margin: 20px;
    &:first-child {
      margin: 20px;
    }
  }
`;

export const AllBlogPageWrapper = styled.div`
  padding: 10vh 0;
`;

export const AllBlogHeading = styled(Heading)`
  padding-bottom: 40px;
  text-align: center;
  color: #6ca448;
  font-size: 3rem;

  @media (max-width: 576px) {
    padding: 4rem 0 2rem 0;
  }
`;
