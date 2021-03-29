import * as React from "react";

import Layout from "@layouts";
import SEO from "@layouts/common/seo";
import { Blog, Hero, Footer, FullPageText, StoryPage } from "./components";
import Aos from "aos";
import "aos/dist/aos.css";

const Homepage = () => {
  React.useEffect(() => {
    Aos.init({
      duration: 500,
      disable: "mobile",
      // easing: "ease-in-sine",
    });
  }, []);

  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <FullPageText />
      <StoryPage />
      <Blog />
      <Footer />
    </Layout>
  );
};

export default Homepage;
