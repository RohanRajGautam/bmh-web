import { createGlobalStyle } from "styled-components";

const primary = "#6CA448";

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

.MuiPopover-paper{
  max-width:270px !important;
  margin-left:-20px;
  .MuiPickersBasePicker-pickerView{
    max-width:270px;
    min-width:270px;
  .MuiPickersMonthSelection-container{
    width:270px;
  }
}
}
.MuiPickersToolbar-toolbar.MuiToolbar-regular {
  background-color: ${primary};
}
.MuiTypography-root.MuiTypography-h5{
  font-family:Mulish;
}
.MuiTypography-root.MuiTypography-h4{
  font-family:Mulish;
}
.MuiTypography-root.MuiTypography-subtitle1{
  font-family:Mulish;
}
.MuiButtonBase-root.MuiPickersDay-day{
  width:34px;
  height:34px;
}
.MuiButtonBase-root.MuiPickersDay-daySelected{
  background-color:${primary};
  &:hover{
  background-color:${primary};
  }
}
`;
