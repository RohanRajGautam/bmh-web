import React from "react";
import { RecentBlockWrapper, RecentWrapper } from "./RecentPost.styles";
import { Heading } from "../../../../components/Heading";
// import StaticData from "./RecentPost.data";
import RecentCard from "./RecentCard";

const RecentPost = props => {
  return (
    <RecentWrapper>
      <Heading clean>Recent Articles</Heading>
      <RecentBlockWrapper>
        {props?.data &&
          props.data.posts.nodes.map((item, index) => (
            <RecentCard
              url={item.uri}
              title={item.title}
              image={item.featuredImage.node.localFile.childImageSharp.fluid}
              date={item.date.substring(0, 10)}
              key={index}
            />
          ))}
      </RecentBlockWrapper>
    </RecentWrapper>
  );
};

export default RecentPost;
