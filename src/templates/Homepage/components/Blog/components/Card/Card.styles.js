import styled from "styled-components";

const medicalGrey = "#5F6468";
const graniteGrey = "#2C3336";
const primary = "#6CA448";

export const Card = styled.div`
  width: 250px;
  @media (min-width: 600px) {
    width: 350px;
  }
`;

export const CardThumbnail = styled.div`
  height: 200px;
  background-image: url(${props => props.thumbnail});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 12px 12px 0px 0px;
  @media (min-width: 600px) {
    height: 340px;
  }
`;

export const CardDesc = styled.div`
  padding: 12px;
  border: 1px solid ${medicalGrey};
  border-radius: 0px 0px 12px 12px;
  border-top: none;
  @media (min-width: 600px) {
    padding: 26px 32px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0.1px;
  color: ${graniteGrey};
  margin-bottom: 18px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
  @media (min-width: 600px) {
    margin-bottom: 24px;
    font-size: 18px;
  }
`;

export const CardText = styled.p`
  font-size: 14px;
  font-weight: 400;
  font-family: Mulish;
  line-height: 20px;
  color: ${medicalGrey};
  margin-bottom: 18px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3;
  @media (min-width: 600px) {
    margin-bottom: 24px;
  }
`;

export const CardCta = styled.div`
  font-size: 13px;
  line-height: 19px;
  font-family: Mulish;
  a {
    text-decoration: none;
    color: ${primary};
  }
`;
