import * as React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  Blog,
  Donate,
  Event,
  StoryPage,
  Hero,
  DualPage,
  Testimonials,
  WellnessCampus,
} from "./components";
import Layout from "@layouts";
import Seo from "@layouts/common/seo";

const Homepage = props => {
  React.useEffect(() => {
    Aos.init({
      // duration: 400,
      once: true,
    });
  }, []);

  return (
    <Layout dark>
      <Seo title="Home" />
      <Hero />
      <DualPage />
      <Testimonials />
      <StoryPage />
      <WellnessCampus />
      <Blog data={props.data} />
      <Event data={props.data.events.nodes} />
      <Donate />
    </Layout>
  );
};

export default Homepage;
