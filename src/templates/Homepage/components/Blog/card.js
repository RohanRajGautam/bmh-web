import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const medicalGrey = "#5F6468";
const graniteGrey = "#2C3336";
const primary = "#6CA448";

const Card = styled.div`
  width: 350px;
  margin: 0 20px;
`;

const CardThumbnail = styled.div`
  height: 340px;
  background-image: url(${props => props.thumbnail});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 12px 12px 0px 0px;
`;

const CardDesc = styled.div`
  padding: 26px 32px;
  border: 1px solid ${medicalGrey};
  border-radius: 0px 0px 12px 12px;
  border-top: none;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0.1px;
  color: ${graniteGrey};
  margin-bottom: 24px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
`;

const CardText = styled.p`
  font-size: 14px;
  font-weight: 400;
  font-family: Mulish;
  line-height: 20px;
  color: ${medicalGrey};
  margin-bottom: 24px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3;
`;

const CardCta = styled.div`
  font-size: 13px;
  line-height: 19px;
  font-family: Mulish;
  a {
    text-decoration: none;
    color: ${primary};
  }
`;

const BlogCard = props => {
  return (
    <>
      <Card>
        <CardThumbnail thumbnail={props.thumbnail} />
        <CardDesc>
          <CardTitle>{props.title}</CardTitle>
          <CardText>{props.desc}</CardText>
          <CardCta>
            <Link to="/">Learn more</Link>
          </CardCta>
        </CardDesc>
      </Card>
    </>
  );
};

export default BlogCard;
