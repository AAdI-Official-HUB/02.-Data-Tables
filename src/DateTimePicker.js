import React, { Fragment, useState } from "react";
import { MuiPickersUtilsProvider, DatePicker, KeyboardDatePicker, KeyboardTimePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import styles from './DateTimePicker.module.css'

export default function InlineDatePickerDemo(props) {
  const [selectedDate, handleDateChange] = useState(new Date());
  const [selectedDate1, handleDateChange1] = useState(new Date());
  const [selectedTime, handleTimeChange] = useState(new Date());
  const [click, setclick] = useState(0);
  
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
        format="dd/MM/yyyy"
        value={selectedDate}
        InputAdornmentProps={{ position: "start" }}
        onChange={date => handleDateChange(date)}
        onClose = {setclick}
      />

        {click=== undefined?<KeyboardDatePicker className={styles.innerBox}
        autoOk
        disablePast
        variant="inline"
        inputVariant="outlined"
        label="To"
        format="dd/MM/yyyy"
        value={selectedDate}
        InputAdornmentProps={{ position: "start" }}
        onChange={dateX => handleDateChange1(dateX)}
      />
      :
      <KeyboardDatePicker className={styles.innerBox}
        autoOk
        disablePast
        variant="inline"
        inputVariant="outlined"
        label="To"
        format="dd/MM/yyyy"
        value={selectedDate1}
        InputAdornmentProps={{ position: "start" }}
        onChange={dateX => handleDateChange1(dateX)}
      />}
        {console.log(click)}
        {/* <KeyboardDatePicker className={styles.innerBox}
        autoOk
        disablePast
        variant="inline"
        inputVariant="outlined"
        label="To"
        format="dd/MM/yyyy"
        value={selectedDate1}
        InputAdornmentProps={{ position: "start" }}
        onChange={dateX => handleDateChange1(dateX)}
      /> */}
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

