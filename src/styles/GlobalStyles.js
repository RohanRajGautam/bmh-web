import { createGlobalStyle } from "styled-components";

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

  p{
    line-height:1.7;
  }

  .slick-next {
    right: 0;
    z-index: 1;
  }
  .slick-prev {
    left: 0;
    z-index: 1;
  }
  
  .slick-slide {
    outline: none;
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
  
  .slick-slide > div {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .slick-center > div {
    transform: scale(1);
  }
  
  ul.slick-dots {
    bottom: -65px;
  }
  ul.slick-dots li button::before {
    font-size: 10px;
  }
  ul.slick-dots li {
    display: none
}


`;
