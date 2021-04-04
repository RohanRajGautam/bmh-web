import styled from "styled-components";

const blue = "#427CC5";
const medicalGrey = "#5F6468";

export const Card = styled.article`
  position: relative;
`;

export const CardImage = styled.div`
  height: 250px;
  margin-bottom: 16px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
  @media (min-width: 768px) {
    height: 170px;
  }
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  font-family: Mulish;
  font-weight: 600;
  letter-spacing: 0.1px;
  color: ${blue};
  margin-bottom: 16px;
  line-height: 27px;
`;

export const CardDate = styled.time`
  font-size: 14px;
  color: ${medicalGrey};
  letter-spacing: 0.1px;
  font-family: Mulish;
`;
