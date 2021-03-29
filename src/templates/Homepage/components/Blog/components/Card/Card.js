import { Link } from "gatsby";
import React from "react";
import {
  Card,
  CardCta,
  CardDesc,
  CardText,
  CardThumbnail,
  CardTitle,
} from "./Card.styles";

const BlogCard = props => {
  return (
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
  );
};

export default BlogCard;
