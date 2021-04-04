import React from "react";
import { CardImage, Card, CardDate, CardTitle } from "./ArticleCard.styled";

const ArticleCard = props => {
  return (
    <Card>
      <CardImage>
        <img src={props.image} alt="" />
      </CardImage>
      <CardTitle>{props.title}</CardTitle>
      <CardDate>{props.date}</CardDate>
    </Card>
  );
};

export default ArticleCard;
