import React, { Fragment, useState } from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import styles from "./TimePicker.module.css";
import cx from "classnames";
export default function InlineDatePickerDemo(props) {
  const [selectedTime, handleTimeChange] = useState(new Date());
  return (
    <div className={styles.outerBox}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Fragment>
          <div className={'tc dib bg-light-green br3 pa3 ma2 bw5 shadow-5'}>
            <KeyboardTimePicker
              label="Timepicker"
              placeholder="Enter Time"
              mask="__:__ _M"
              value={selectedTime}
              onChange={(date) => handleTimeChange(date)}
            />
          </div>
        </Fragment>
      </MuiPickersUtilsProvider>
    </div>
  );
}
