import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import { EventDatePickerWrapper, EventDatePickerArrow } from "./Event.styles";

export default function MaterialUIPickers({ selectedDate, handleDateChange }) {
  return (
    <EventDatePickerWrapper>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="flex-start">
          <DatePicker
            variant="inline"
            value={selectedDate}
            onChange={handleDateChange}
            minDate={new Date("2020-01-01")}
            // views={["year"]}
            views={["year", "month"]}
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
