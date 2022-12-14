import React from "react";
import {
  Card,
  Date,
  DateWrapper,
  Content,
  CardDesc,
  CardText,
  CardThumbnail,
  CardTitle,
  StyledLink,
  CardThumbnailWrapper,
} from "./Card.styles";

const BlogCard = props => {
  const monthNameShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <StyledLink to={"/blogs" + props?.url}>
      <Card>
        <DateWrapper>
          <Date>
            {props?.date?.slice(8, 10)}{" "}
            {monthNameShort[props?.date?.slice(6, 7)]}
          </Date>
        </DateWrapper>
        <Content>
          <CardThumbnailWrapper>
            <CardThumbnail fluid={props?.thumbnail} alt="blog-card" />
          </CardThumbnailWrapper>
          <CardDesc>
            <CardTitle>{props?.title}</CardTitle>
            <CardText dangerouslySetInnerHTML={{ __html: props?.desc }} />
          </CardDesc>
        </Content>
      </Card>
    </StyledLink>
  );
};

export default BlogCard;
