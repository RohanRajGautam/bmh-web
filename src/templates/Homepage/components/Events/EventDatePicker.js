import "date-fns";
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import { EventDatePickerWrapper, EventDatePickerArrow } from "./Event.styles";

export default function MaterialUIPickers() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
    console.log(date);
  };

  return (
    <EventDatePickerWrapper>
      <svg
        width="19"
        height="21"
        viewBox="0 0 19 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.3516 20.3369H2.35156C1.24699 20.3369 0.351562 19.4415 0.351562 18.3369V4.33691C0.351562 3.23234 1.24699 2.33691 2.35156 2.33691H4.35156V0.336914H6.35156V2.33691H12.3516V0.336914H14.3516V2.33691H16.3516C17.4561 2.33691 18.3516 3.23234 18.3516 4.33691V18.3369C18.3516 19.4415 17.4561 20.3369 16.3516 20.3369ZM2.35156 8.33691V18.3369H16.3516V8.33691H2.35156ZM2.35156 4.33691V6.33691H16.3516V4.33691H2.35156Z"
          fill="#6CA448"
        />
      </svg>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="flex-start">
          <DatePicker
            variant="inline"
            value={selectedDate}
            onChange={handleDateChange}
            minDate={new Date()}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <EventDatePickerArrow>
        <svg
          width="15"
          height="11"
          viewBox="0 0 15 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.39886 10.855L0.125234 0.706497L14.6725 0.706495L7.39886 10.855Z"
            fill="#5F6468"
          />
        </svg>
      </EventDatePickerArrow>
    </EventDatePickerWrapper>
  );
}
