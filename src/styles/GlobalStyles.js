import { createGlobalStyle } from "styled-components";

const primary = "#6CA448";

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Merriweather', 'Mulish', 'Smiley', 'MerriweatherSans';
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    &::selection {
      background-color: ${primary};
      color: #fff;
    }
    /* overflow-x: clip; */
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;
    /* scroll-behavior: smooth; */
  }

  body {
    box-sizing: border-box;
    font-family: 'Merriweather', 'Mulish', 'Smiley', 'MerriweatherSans';  
    overflow-x: hidden;

/* 
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: #1E3F20;
    }

    &::-webkit-scrollbar-thumb {
      background: ${primary};
      border-radius: 12px; 
    } */

    
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
    {
      .MuiPickersYearSelection-container {
        .MuiPickersYear-root {
          font-size: 2rem;
        }
        .MuiPickersYear-yearSelected {
          font-size: 3rem
        }
      }
    }
  .MuiPickersMonthSelection-container{
    width:250px;
    .MuiPickersMonth-root {
      font-size: 1.6rem;
    }
    .MuiPickersMonth-monthSelected{
      font-size: 2rem;
    }
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

.MuiSnackbar-root {
  .MuiAlert-icon{
    font-size:36px;
  }
  .MuiAlert-message{
    font-size:20px;
    padding:0 20px;
  }
  .MuiSvgIcon-fontSizeSmall{
  font-size:24px;
  }
  .MuiAlert-root{
    padding:12px 36px;
    align-items:center;
}
}
`;
