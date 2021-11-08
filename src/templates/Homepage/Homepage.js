import * as React from "react";

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

const Homepage = props => {
  return (
    <>
      <Hero />
      <DualPage />
      <Testimonials />
      <StoryPage />
      <WellnessCampus />
      <Blog data={props.data} />
      <Event data={props.data.events.nodes} />
      <Donate />
    </>
  );
};

export default Homepage;
