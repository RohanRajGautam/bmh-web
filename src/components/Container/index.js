import styled from "styled-components";
import { mediaQueries } from "@components/MediaQueries";

export const Container = styled.div`
  max-width: calc(100vw - 11.3rem);
  width: calc(100vw - 11.3rem);

  ${mediaQueries("md")`
    max-width: 100vw;
    width: 100vw;
  `}
`;
