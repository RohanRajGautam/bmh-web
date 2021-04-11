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
  Event,
  StoryPage,
  HorizontalComponent,
} from "./components";

const Homepage = props => {
  React.useEffect(() => {
    Aos.init({
      duration: 500,
      // easing: "ease-in-sine",
    });
  }, []);

  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <FullPageText />
      <StoryPage />
      <HorizontalComponent />
      <Blog data={props.data} />
      <Event />
      <Donate />
      <Footer />
    </Layout>
  );
};

export default Homepage;
