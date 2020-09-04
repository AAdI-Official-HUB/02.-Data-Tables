import React, { Fragment, useState } from "react";
import { MuiPickersUtilsProvider, DatePicker, KeyboardDatePicker, KeyboardTimePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import styles from './DateTimePicker.module.css'

export default function InlineDatePickerDemo(props) {
  const [selectedDate, handleDateChange] = useState(new Date());
  const [selectedDate1, handleDateChange1] = useState(new Date());
  const [selectedTime, handleTimeChange] = useState(new Date());
  return (
      <div className={styles.outerBox}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Fragment>
    <div className={styles.dateBox}>
      <KeyboardDatePicker className={styles.innerBox}
        autoOk
        variant="inline"
        inputVariant="outlined"
        label="From"
        format="MM/dd/yyyy"
        value={selectedDate}
        InputAdornmentProps={{ position: "start" }}
        onChange={date => handleDateChange(date)}
      />

        <KeyboardDatePicker className={styles.innerBox}
        autoOk
        disablePast
        variant="inline"
        inputVariant="outlined"
        label="To"
        format="MM/dd/yyyy"
        value={selectedDate1}
        InputAdornmentProps={{ position: "start" }}
        onChange={date => handleDateChange1(date)}
      />
    </div>
    <div className={styles.timeBox}>
        <KeyboardTimePicker
      label="Timepicker"
      placeholder="Enter Time"
      mask="__:__ _M"
      value={selectedTime}
      onChange={date => handleTimeChange(date)}
    />
    </div>
        
    </Fragment>
    </MuiPickersUtilsProvider>
    </div>
  );
}

