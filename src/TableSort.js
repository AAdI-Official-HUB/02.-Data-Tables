import React, { useState, useRef, useCallback } from "react";
import Paper from "@material-ui/core/Paper";
import styles from "./TableSort.module.css";
import {
  SelectionState,
  SortingState,
  IntegratedSorting,
  SearchState,
  IntegratedFiltering,
  PagingState,
  IntegratedPaging,
  IntegratedSelection,
  FilteringState,
} from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  Toolbar,
  SearchPanel,
  TableFixedColumns,
  PagingPanel,
  ExportPanel,
  TableSelection,
  TableFilterRow,
} from "@devexpress/dx-react-grid-material-ui";
import { GridExporter } from '@devexpress/dx-react-grid-export';
import saveAs from 'file-saver';

const onSave = (workbook) => {
  workbook.xlsx.writeBuffer().then((buffer) => {
    saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
  });
};
export default ({ fullData }) => {
  const exporterRef = useRef(null);

  const startExport = useCallback(() => {
    exporterRef.current.exportGrid();
  }, [exporterRef]);
  const [selection, setSelection] = useState([]);

  const columns = [
    { name: "state", title: "States" },
    { name: "active", title: "Active" },
    { name: "confirmed", title: "Confirmed" },
    { name: "deaths", title: "Deaths" },
    { name: "recovered", title: "Recovered" },
  ];
  const rows = fullData;
  const [sorting, setSorting] = useState([
    { columnName: "state", direction: "asc" },
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

  const [defaultSorting] = useState([
    { columnName: 'state', direction: 'asc' },
  ]);
  const [sortingStateColumnExtensions] = useState([
    { columnName: 'active', sortingEnabled: false },
    { columnName: 'confirmed', sortingEnabled: false },
    { columnName: 'deaths', sortingEnabled: false },
  ]);

  const [filteringStateColumnExtensions] = useState([
    { columnName: 'active', filteringEnabled: false },
    { columnName: 'confirmed', filteringEnabled: false },
    { columnName: 'deaths', filteringEnabled: false }
  ]);
  return (
    <div className={styles.parentTable}>
      <Paper className={styles.tableStyle}>
        <Grid rows={rows} columns={columns}>
        <SelectionState
            selection={selection}
            onSelectionChange={setSelection}
          />
          <SearchState value={searchValue} onValueChange={setSearchState} />
        <FilteringState
          columnExtensions={filteringStateColumnExtensions}
        />
        <IntegratedFiltering />
        <PagingState
          defaultCurrentPage={0}
          defaultPageSize={5}
        />
       <IntegratedSelection />
        <IntegratedPaging />
          

          <SortingState sorting={sorting} onSortingChange={setSorting} defaultSorting={defaultSorting}
          columnExtensions={sortingStateColumnExtensions}/>
          <IntegratedFiltering />
          <IntegratedSorting />
          <Table columnExtensions={tableColumnExtensions} />
          <TableHeaderRow showSortingControls />
          <Toolbar />
          <SearchPanel />
          <TableSelection showSelectAll />
          <TableFilterRow />
          <TableFixedColumns leftColumns={leftColumns} />
          <PagingPanel
          pageSizes={pageSizes}
        />
        <ExportPanel startExport={startExport} />
        </Grid>
        <GridExporter
        ref={exporterRef}
        rows={fullData}
        columns={columns}
        selection={selection}
        sorting={sorting}
        onSave={onSave}
      />
      <span>
        Total rows selected:
        {' '}
        {selection.length}
      </span>
      </Paper>
      
    </div>
  );
};
