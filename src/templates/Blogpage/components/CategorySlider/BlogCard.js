import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import {
  Card,
  Date,
  DateWrapper,
  Content,
  CardDesc,
  CardText,
  CardThumbnail,
  CardTitle,
  // StyledLink,
  // CardThumbnailWrapper,
} from "../../../Homepage/components/Blog/components/Card/Card.styles";

const StyledLink = styled(Link)`
  margin-right: 1.2rem;
  margin-bottom: 8.4rem;

  text-decoration: none;
  display: block;
`;

export const CardThumbnailWrapper = styled.div`
  overflow: hidden;
  width: 35rem;
  height: 23rem;
  border-radius: 24px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

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
            <CardThumbnail fluid={props?.thumbnail} alt="card-thumbnail" />
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
