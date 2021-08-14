import React, { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";

export const useImage = src => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: { internal: { mediaType: { regex: "/image/" } } }
      ) {
        edges {
          node {
            relativePath
            extension
            publicURL
            childImageSharp {
              fluid(maxWidth: 1260) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const match = useMemo(
    () => data.images.edges.find(({ node }) => src === node.relativePath),
    [data, src]
  );

  if (!match) return null;

  const { node: { childImageSharp, publicURL, extension } = {} } = match;

  return {
    childImageSharp,
    publicURL,
    extension,
  };
};

const Image = ({ src, ...rest }) => {
  const { childImageSharp, publicURL, extension } = useImage(src);

  if (extension === "svg" || !childImageSharp) {
    return <img src={publicURL} alt="img" {...rest} draggable="false" />;
  }

  if (extension === "svg") {
    return <img src={publicURL} alt="img" {...rest} draggable="false" />;
  }

  return <Img fluid={childImageSharp.fluid} {...rest} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Image;
