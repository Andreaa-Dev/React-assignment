import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";

import CountryTableHead from "./CountryTableHead";
import CountryTableCell from "./CountryTableCell";
import CountryTablePagination from "./CountryTablePagination";

const columns = [
  {
    id: "flag",
    label: "Flag",
    minWidth: 170,
    format: (value) => <img src={value} width="50" height="50" alt="error" />,
  },
  { id: "name", label: "Name", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "languages",
    label: "Languages",
    minWidth: 170,
    align: "right",
    format: (value) => (
      <List>
        {value.map((item) => (
          <ListItemText> {item.name}</ListItemText>
        ))}
      </List>
    ),
  },
  {
    id: "region",
    label: "Region",
    minWidth: 170,
    align: "right",
  },
];

function CountryTable({ data }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div>
      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <CountryTableHead columns={columns} />
            <CountryTableCell
              data={data}
              columns={columns}
              rowsPerPage={rowsPerPage}
              page={page}
              handleChangePage={handleChangePage}
              handleChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Table>
          <CountryTablePagination
            data={data}
            rowsPerPage={rowsPerPage}
            page={page}
          />
        </TableContainer>
      </Paper>
    </div>
  );
}

export default CountryTable;
