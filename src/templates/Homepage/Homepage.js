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

import EventBanner from "@components/EventBanner";

const Homepage = props => {
  return (
    <>
      <Hero />
      <EventBanner />
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
