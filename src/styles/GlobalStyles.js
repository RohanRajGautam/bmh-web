import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Merriweather', 'Mulish';
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-family: "Merriweather", serif;
  }
  .slick-next {
    right: 0;
    z-index: 1;
  }
  .slick-prev {
    left: 0;
    z-index: 1;
  }

  .slick-slide > div {
    outline: none;
  }
  .slick-slide > div:focus {
    outline: none;
  }

  .slick-slide.slick-cloned > div {
    outline: none;
  }
`;;