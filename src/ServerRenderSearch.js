import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import {
  PagingState,
  CustomPaging,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  PagingPanel,
} from '@devexpress/dx-react-grid-material-ui';


import { Loading } from '../../../theme-sources/material-ui/components/loading';

const URL = 'https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/orders?requireTotalCount=true';

export default ({fullData}) => {
    const columns = [
        { name: "state", title: "States" },
        { name: "active", title: "Active" },
        { name: "confirmed", title: "Confirmed" },
        { name: "deaths", title: "Deaths" },
        { name: "recovered", title: "Recovered" },
      ];
  const [rows, setRows] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [pageSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [lastQuery, setLastQuery] = useState();

  const getQueryString = () => (
    `${URL}&take=${pageSize}&skip=${pageSize * currentPage}`
  );

  const loadData = () => {
    const queryString = getQueryString();
    if (queryString !== lastQuery && !loading) {
      setLoading(true);
      fetch(queryString)
        .then(response => response.json())
        .then(({ data, totalCount: newTotalCount }) => {
          setRows(data);
          setTotalCount(newTotalCount);
          setLoading(false);
        })
        .catch(() => setLoading(false));
      setLastQuery(queryString);
    }
  };

  useEffect(() => loadData());

  return (
    <Paper style={{ position: 'relative' }}>
      <Grid
        rows={rows}
        columns={columns}
      >
        <PagingState
          currentPage={currentPage}
          onCurrentPageChange={setCurrentPage}
          pageSize={pageSize}
        />
        <CustomPaging
          totalCount={totalCount}
        />
        <Table />
        <TableHeaderRow />
        <PagingPanel />
      </Grid>
      {loading && <Loading />}
    </Paper>
  );
};