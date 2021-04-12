import styled from "styled-components";
import { Link } from "gatsby";

const medicalGrey = "#5F6468";
const graniteGrey = "#2C3336";
const primary = "#6CA448";
const blueGrey = "#C5CCD3";

export const Card = styled.div`
  width: 250px;
  &:hover {
    .Cardstyles__CardThumbnail-gfcwtT {
      transform: scale(1.05);
      transition: transform 300ms;
    }
  }
  .slick-slide {
    margin: 0 5px;
  }
  .slick-dots {
    display: none !important;
  }
  @media (min-width: 600px) {
    .slick-slide {
      margin: 0 20px;
    }
    .slick-dots {
      display: block !important;
    }
  }
  @media (min-width: 600px) {
    width: 350px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const CardThumbnailWrapper = styled.div`
  overflow: hidden;
  height: 200px;
  border-radius: 12px 12px 0px 0px;
  @media (min-width: 600px) {
    height: 340px;
  }
`;

export const CardThumbnail = styled.div`
  height: 100%;
  background-color: ${blueGrey};
  background-image: url(${props => props.thumbnail});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  transition: transform 300ms;
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
  min-height: 54px;
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
  text-decoration: none;
  color: ${primary};
`;
