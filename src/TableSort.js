import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import styles from "./TableSort.module.css";
import {
  SortingState,
  IntegratedSorting,
  SearchState,
  IntegratedFiltering,
  PagingState,
  IntegratedPaging,
} from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  Toolbar,
  SearchPanel,
  TableFixedColumns,
  PagingPanel,
} from "@devexpress/dx-react-grid-material-ui";

export default ({ fullData }) => {
  const columns = [
    { name: "state", title: "States" },
    { name: "active", title: "Active" },
    { name: "confirmed", title: "Confirmed" },
    { name: "deaths", title: "Deaths" },
    { name: "recovered", title: "Recovered" },
  ];
  const rows = fullData;
  const [sorting, setSorting] = useState([
    { columnName: "active", direction: "asc" },
  ]);
  const [searchValue, setSearchState] = useState("");
  const [tableColumnExtensions] = useState([
    { columnName: "state", width: 220 },
    { columnName: "active", width: 120 },
    { columnName: "confirmed", width: 120 },
    { columnName: "deaths", width: 120 },
    { columnName: "recovered", width: 120 },
  ]);
  const [leftColumns] = useState(["state", "channel"]);
  const [pageSizes] = useState([5, 10, 15, 0]);
  return (
    <div className={styles.parentTable}>
      <Paper className={styles.tableStyle}>
        <Grid rows={rows} columns={columns}>
        
        <PagingState
          defaultCurrentPage={0}
          defaultPageSize={5}
        />
        <IntegratedPaging />
          <SearchState value={searchValue} onValueChange={setSearchState} />

          <SortingState sorting={sorting} onSortingChange={setSorting} />
          <IntegratedFiltering />
          <IntegratedSorting />
          <Table columnExtensions={tableColumnExtensions} />
          <TableHeaderRow showSortingControls />
          <Toolbar />
          <SearchPanel />
          <TableFixedColumns leftColumns={leftColumns} />
          <PagingPanel
          pageSizes={pageSizes}
        />
        </Grid>
      </Paper>
    </div>
  );
};