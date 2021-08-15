import React from "react";
import {
  RecentCard,
  RecentCardDate,
  RecentCardDesc,
  RecentCardImage,
  RecentCardInner,
  RecentCardTitle,
  StyledLink,
} from "./RecentPost.styles";

const MyRecentCard = props => {
  return (
    <StyledLink to={"/blogs" + props?.url}>
      <RecentCard>
        <RecentCardInner>
          <RecentCardImage fluid={props.image} />
          <RecentCardDesc>
            <RecentCardTitle>{props.title}</RecentCardTitle>
            <RecentCardDate>{props.date}</RecentCardDate>
          </RecentCardDesc>
        </RecentCardInner>
      </RecentCard>
    </StyledLink>
  );
};

export default MyRecentCard;
