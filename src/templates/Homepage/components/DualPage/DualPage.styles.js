import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
export const Medical = styled.div`
  background: #2c3336;
  min-height: 100vh;
  min-width: 50vw;
  padding: 10vh 5vw;
`;
export const Wellness = styled.div`
  min-height: 100vh;
  min-width: 50vw;
  padding: 10vh 5vw;
  position: relative;
`;
