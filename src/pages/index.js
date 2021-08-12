import { graphql } from "gatsby";
import * as React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Layout from "@layouts";
import Seo from "@layouts/common/seo";
import Page from "../templates/Homepage";

const Index = ({ data }) => {
  React.useEffect(() => {
    Aos.init({
      // duration: 400,
      once: true,
    });
  }, []);

  return (
    <Layout dark>
      <Seo title="Home" />
      <Page data={data} />
    </Layout>
  );
};

export const query = graphql`
  query {
    allPost: allWpPost(limit: 10)  {
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
