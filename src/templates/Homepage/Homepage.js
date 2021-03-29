import * as React from "react";
import Layout from "@layouts";
import SEO from "@layouts/common/seo";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Blog,
  Hero,
  Footer,
  FullPageText,
  Donate,
  Newsletter,
  Event,
  StoryPage,
} from "./components";

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
      <Event />
      <Donate />
      <Newsletter />
      <Footer />
    </Layout>
  );
};

export default Homepage;
