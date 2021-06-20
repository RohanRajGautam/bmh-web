import styled from "styled-components";
import { mediaQueries } from "@components/MediaQueries";

export const Container = styled.div`
  width: calc(100vw - 11.3rem);

  ${mediaQueries("md")`
    width: 100vw;
  `}
`;
