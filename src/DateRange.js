import React, { Component } from "react";
import $ from "jquery";
import styles from "./DateRange.module.css";
import cx from "classnames";
export default class DateRange extends Component {
  componentDidMount() {
    var fromDate;
    $("#fromDate").on("change", function () {
      fromDate = $(this).val();
      $("#toDate").prop("min", function () {
        return fromDate;
      });
    });

    var toDate;
    $("#toDate").on("change", function () {
      toDate = $(this).val();
      $("#fromDate").prop("max", function () {
        return toDate;
      });
    });
  }
  render() {
    return (
      <div className={styles.outerBox}>
        <div className={cx(styles.container,'tc dib bg-light-green br3 pa3 ma2 bw5 shadow-5')}>
            <label>From</label>
            <input
              className={cx(styles.box1,'gray')}
              type="date"
              name=""
              max=""
              id="fromDate"
            ></input>
            <label style={{marginLeft:'20px'}}>To</label>
            <input
              className={cx(styles.box2,'gray')}
              type="date"
              name=""
              min=""
              id="toDate"
            ></input>
        </div>
      </div>
    );
  }
}
