import * as React from "react";
import Layout from "@layouts";
import SEO from "@layouts/common/seo";
// import Aos from "aos";
// import "aos/dist/aos.css";
import {
  Blog,
  Hero,
  FullPageText,
  Donate,
  Event,
  StoryPage,
  HorizontalScroll,
} from "./components";

const Homepage = props => {
  // console.log(props.data);
  // React.useEffect(() => {
  //   Aos.init({
  //     duration: 500,
  //     // easing: "ease-in-sine",
  //   });
  // }, []);

  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <HorizontalScroll />
      <StoryPage />
      <Blog data={props.data} />
      <Event data={props.data.events.nodes} />
      <Donate />
    </Layout>
  );
};

export default Homepage;
