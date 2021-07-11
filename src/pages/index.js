import * as React from "react";
import Page from "../templates/Homepage";
import { graphql } from "gatsby";

const Index = ({ data }) => {
  return <Page data={data} title="Home" />;
};

export const query = graphql`
  query {
    allPost: allWpPost {
      nodes {
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
            localFile {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    events: allWpClass(sort: { fields: [eventYear, eventMonth, eventDay] }) {
      nodes {
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
        eventCost
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
`;

export default Index;
