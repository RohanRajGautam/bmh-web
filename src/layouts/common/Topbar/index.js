import React, { useEffect, useRef } from "react";
// import { TimelineLite, TweenMax, Power3 } from "gsap";
import Divider from "@material-ui/core/Divider";

import { menuData } from "@data/MenuData";
import { Wrapper, NavMenu, NavLink } from "./Topbar.styles";

const Topbar = () => {
  // let bar = useRef(null);

  // useEffect(() => {
  //   let tl = new TimelineLite({ delay: 0.8 });
  //   const top = bar.firstElementChild;

  //   //Remove initial flash
  //   TweenMax.to(bar, 0, { css: { visibility: "visible" } });

  //   //Content Animation
  //   tl.from(top, 0.6, { y: -40, ease: Power3.easeIn }, "Start").from(
  //     top,
  //     0.4,
  //     { scale: 1.6, ease: Power3.easeIn },
  //     0.2
  //   );
  // }, []);

  return (
    // <Wrapper ref={el => (bar = el)}>
    <Wrapper>
      <NavMenu>
        <NavLink
          href="https://www.beautifulmindsmedical.com/"
          target="_blank"
          activeClassName="active"
        >
          Medical
        </NavLink>
        <Divider
          orientation="vertical"
          flexItem
          style={{ background: "#eee" }}
        />
        <NavLink
          href="https://beautifulmindswellness.org/"
          target="_blank"
          activeClassName="active"
        >
          Wellness
        </NavLink>
      </NavMenu>
    </Wrapper>
  );
};

export default Topbar;
