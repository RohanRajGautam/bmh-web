import * as React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../layouts";
import Seo from "../layouts/common/seo";

const FourOhFour = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #121212;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BgImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  mix-blend-mode: overlay;

  background-image: url("http://i.giphy.com/l117HrgEinjIA.gif");
`;
const Code = styled.div`
  font-family: "Mulish", cursive;
  font-size: 24rem;
  font-weight: 800;
  height: 100vh;
  color: white;
  width: 100%;
  display: flex;
  backgorund-position: center;
  align-items: center;
  background-size: cover;
  justify-content: center;
  flex-direction: column;
`;

const Subtitle = styled.div`
  font-size: 4rem;
  margin-top: 4rem;
`;

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <FourOhFour>
        <BgImage />
        <Code>
          404<Subtitle>Page Not Found</Subtitle>
        </Code>
      </FourOhFour>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
