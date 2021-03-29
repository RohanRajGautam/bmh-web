import * as React from "react";
import Page from "../templates/Homepage";
import Aos from "aos";
import "aos/dist/aos.css";

const Index = () => {
  React.useEffect(() => {
    Aos.init({
      offset: 400,
      duration: 1000,
      // easing: "ease-in-sine",
    });
  }, []);

  return <Page title="Home" />;
};

export default Index;
