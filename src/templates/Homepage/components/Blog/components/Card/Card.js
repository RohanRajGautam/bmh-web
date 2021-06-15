import React from "react";
import {
  Card,
  Date,
  DateWrapper,
  Content,
  CardCta,
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
    <StyledLink to={props?.url}>
      <Card>
        <DateWrapper>
          <Date>
            {props?.date?.slice(8, 10)}{" "}
            {monthNameShort[props?.date?.slice(6, 7)]}
          </Date>
        </DateWrapper>
        <Content>
          <CardThumbnailWrapper>
            <CardThumbnail thumbnail={props?.thumbnail} />
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
