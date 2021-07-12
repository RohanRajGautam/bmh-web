import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import {
  DonateWrapper,
  DonateStyle,
  DonateColumn,
  ButtonContainer,
  Heading,
  DonateImage,
} from "./Donate.styles";
import DonateBtn from "./DonateBtn";

const Donate = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "homepage-donate.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <DonateWrapper>
      <DonateImage
        fluid={data.file.childImageSharp.fluid}
        alt="Donate"
        objectPosition="center"
      />
      <DonateStyle>
        <DonateColumn>
          <Heading data-aos="fade-up">
            Your support can <span>change</span>
            <br />
            someone’s life
          </Heading>
          <ButtonContainer data-aos="fade-up">
            <DonateBtn to="https://beautifulmindswellness.org/donate/" />
          </ButtonContainer>
        </DonateColumn>
      </DonateStyle>
    </DonateWrapper>
  );
};

export default Donate;
