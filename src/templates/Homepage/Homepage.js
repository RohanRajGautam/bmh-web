import * as React from "react";
import Layout from "@layouts";
import Seo from "@layouts/common/seo";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Blog,
  Hero,
  Donate,
  Event,
  StoryPage,
  FullPageText,
  DualPage,
  // HorizontalScroll,
} from "./components";
const Homepage = props => {
  React.useEffect(() => {
    Aos.init({
      duration: 500,
      // easing: "ease-in-sine",
    });
  }, []);

  return (
    <Layout dark>
      <Seo title="Home" />
      <Hero />
      <DualPage />
      {/* <FullPageText />
      <StoryPage />
      <Blog data={props.data} />
      <Event data={props.data.events.nodes} />
      <Donate /> */}
    </Layout>
  );
};

export default Homepage;
