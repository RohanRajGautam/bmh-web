import React, { useEffect, useRef } from "react";
import { TimelineLite, TweenMax, Power3 } from "gsap";

import { menuData } from "@data/MenuData";
import { Wrapper, NavMenu, NavLink } from "./Topbar.styles";

const Topbar = () => {
  let bar = useRef(null);

  useEffect(() => {
    let tl = new TimelineLite({ delay: 0.8 });
    const top = bar.firstElementChild;

    //Remove initial flash
    TweenMax.to(bar, 0, { css: { visibility: "visible" } });

    //Content Animation
    tl.from(top, 1.2, { y: 1280, ease: Power3.easeOut }, "Start").from(
      top,
      2,
      { scale: 1.6, ease: Power3.easeOut },
      0.2
    );
  }, []);

  return (
    <Wrapper ref={el => (bar = el)}>
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink
            href={item.link}
            target="_blank"
            key={index}
            activeClassName="active"
          >
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
    </Wrapper>
  );
};

export default Topbar;
