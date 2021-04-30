import React from "react";
import {
  Card,
  CardCta,
  CardDesc,
  CardText,
  CardThumbnail,
  CardTitle,
  StyledLink,
  CardThumbnailWrapper,
} from "./Card.styles";

const BlogCard = props => {
  return (
    <StyledLink to={props.url}>
      <Card>
        <CardThumbnailWrapper>
          <CardThumbnail thumbnail={props.thumbnail} />
        </CardThumbnailWrapper>
        <CardDesc>
          <CardTitle>{props.title}</CardTitle>
          <CardText>{props.desc}</CardText>
          <CardCta>Learn more</CardCta>
        </CardDesc>
      </Card>
    </StyledLink>
  );
};

export default BlogCard;
