import { Link } from "gatsby";
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
    <StyledLink to="/blog-page">
      <Card>
        <CardThumbnailWrapper>
          <CardThumbnail thumbnail={props.thumbnail} />
        </CardThumbnailWrapper>
        <CardDesc>
          <CardTitle>{props.title}</CardTitle>
          <CardText>{props.desc}</CardText>
          <CardCta>
            <Link to="/blog-page">Learn more</Link>
          </CardCta>
        </CardDesc>
      </Card>
    </StyledLink>
  );
};

export default BlogCard;
