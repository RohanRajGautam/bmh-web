import React from "react";
import {
  RecentCard,
  RecentCardDate,
  RecentCardDesc,
  RecentCardImage,
  RecentCardInner,
  RecentCardTitle,
} from "./RecentPost.styles";

const MyRecentCard = props => {
  return (
    <RecentCard>
      <RecentCardInner>
        <RecentCardImage image={props.image} />
        <RecentCardDesc>
          <RecentCardTitle>{props.title}</RecentCardTitle>
          <RecentCardDate>{props.date}</RecentCardDate>
        </RecentCardDesc>
      </RecentCardInner>
    </RecentCard>
  );
};

export default MyRecentCard;
