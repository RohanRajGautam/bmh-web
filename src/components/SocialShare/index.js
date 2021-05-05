import React from "react";
// import { graphql, useStaticQuery } from "gatsby";
import Facebook from "@images/share/facebook.png";
import LinkedIn from "@images/share/linkedin.png";
import Twitter from "@images/share/twitter.png";

import "./index.scss";

const SocialShare = ({ slug, title }) => {
  // const {
  //   siteSettings: {
  //     siteMetadata: { siteUrl: url },
  //   },
  // } = useStaticQuery(graphql`
  //   {
  //     siteSettings: site {
  //       siteMetadata {
  //         siteUrl
  //       }
  //     }
  //   }
  // `);

  const url = "https://dev0-1.dpt18gi992xkp.amplifyapp.com/";

  return (
    <div className="social-share">
      <ul>
        <li>
          <a
            onClick={() => {
              window.open(
                "https://www.facebook.com/sharer/sharer.php?u=" + url + slug,
                "facebook-share-dialog",
                "width=626,height=436"
              );
              return false;
            }}
          >
            <img src={Facebook} alt="facebook" draggable={false} />
          </a>
        </li>
        <li>
          <a
            href={`https://www.twitter.com/share?url=${url}${slug}/&text=${title}&viatwitterHandle`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Twitter} alt="twitter" draggable={false} />
          </a>
        </li>
        <li>
          <a
            href={`https://www.linkedin.com/shareArticle?url=${url}${slug}/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="facebook" draggable={false} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialShare;
