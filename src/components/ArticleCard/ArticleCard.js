import React from "react";
import {
  CardImage,
  Card,
  CardDate,
  CardTitle,
  StyledLink,
} from "./ArticleCard.styled";

const ArticleCard = props => {
  return (
    <StyledLink to={props?.url}>
      <Card>
        <CardImage>
          <img src={props.image} alt="" />
        </CardImage>
        <CardTitle>{props.title}</CardTitle>
        <CardDate>{props.date}</CardDate>
      </Card>
    </StyledLink>
  );
};

export default ArticleCard;
