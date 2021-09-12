import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

import { Container } from "../Container";

const ImageWrapper = styled(Container)`
  padding: 0 5vw;
  padding-top: 10rem;
  @media (min-width: 80em) {
    padding: 5rem 11.3rem 8.5rem 11.3rem;
  }
`;

const EventBanner = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Events/Song&Story.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 64) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <ImageWrapper>
      <a
        href="https://app.donorview.com/Event/EventInfo?prm=3JfheZFdLRPkURmsQSVPTYvjEjXwHnVbjARA72Pjm2cJO3jXXIerSHlJRpY1QydD_BQsv10dfHCM3cbv2uZn2Djcolvk7ZQyOHx7wyRqRZt1i9OYQWfrfJpyAH2iRX-1zPAZSlnazsFQ8jYFnIm7zcULv1aK6HB99sJa_g4sk_Z31X8_mgcd2OAjHEXjsLPYNQBdCkD_9twFvIrscob9y67HvPr--t1PBdOyoctRTKC7SWQxMh96sRt14xd9hwcB0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Banner"
          objectPosition="center"
        />
      </a>
    </ImageWrapper>
  );
};

export default EventBanner;
