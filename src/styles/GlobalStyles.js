import { createGlobalStyle } from "styled-components";

const primary = "#6CA448";

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Merriweather', 'Mulish';
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* overflow-x: clip; */
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-family: "Merriweather", serif;
    overflow-x: hidden;
  }

  p{
    line-height:1.7;
  }

.MuiPopover-paper{
  max-width:250px !important;
  margin-left:-20px;
  .MuiPickersBasePicker-pickerView{
    max-width:250px;
    min-width:250px;
  .MuiPickersMonthSelection-container{
    width:250px;
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
