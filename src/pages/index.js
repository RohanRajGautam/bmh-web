import * as React from "react";
import Page from "../templates/Homepage";
import { graphql } from "gatsby";

const Index = ({ data }) => {
  console.log(data);
  return <Page data={data} title="Home" />;
};

export const query = graphql`
  query {
    allPost: allWpPost {
      edges {
        node {
          id
          uri
          slug
          title
          date
          excerpt
          authorId
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
    events: allWpClass(sort: { fields: [eventYear, eventMonth, eventDay] }) {
      edges {
        node {
          title
          eventStartTime
          eventDayOfWeek
          eventMultiDays
          eventMonth
          eventYear
          eventDuration
          eventDay
          rpClassType
          id
          eventInstructors {
            nodes {
              name
            }
          }
          eventLocations {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`;

export default Index;
