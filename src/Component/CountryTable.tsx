import React, { useCallback } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import CircleIcon from "@mui/icons-material/Circle";

import CountryTableHead from "./CountryTableHead";
import CountryTableRow from "./CountryTableRow";
import CountryTablePagination from "./CountryTablePagination";
import { TableBody } from "@mui/material";
import { CountryType } from "../CustomHook/useCountry";

// Note: by default type: require, optional => add ?

export type ColumnType = [
  {
    id: string;
    label: string;
    format?: (value: string) => JSX.Element;
    minWidth?: number;
    align?: string;
  }
];

const columns = [
  {
    id: "flag",
    label: "Flag",
    minWidth: 170,
    format: (value: string) => (
      <img src={value} width="70px" height="70px" alt="error" />
    ),
  },
  { id: "name", label: "Name", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
  },
  {
    id: "languages",
    label: "Languages",
    minWidth: 170,
    align: "right",
    format: (value: []) => (
      <List>
        {value.map((item: any) => (
          <ListItemText>
            <CircleIcon sx={{ fontSize: 10 }} />
            {item.name}
          </ListItemText>
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

type PropsType = {
  data: CountryType[];
};

function CountryTable({ data }: PropsType) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = useCallback((event, newPage) => {
    setPage(newPage);
  }, []);

  const handleChangeRowsPerPage = useCallback((event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }, []);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 700 }}>
        <Table stickyHeader aria-label="sticky table">
          <CountryTableHead columns={columns} />
          <TableBody>
            <CountryTableRow
              data={data}
              columns={columns}
              rowsPerPage={rowsPerPage}
              page={page}
              handleChangePage={handleChangePage}
              handleChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </TableBody>
        </Table>
        <CountryTablePagination
          data={data}
          rowsPerPage={rowsPerPage}
          page={page}
        />
      </TableContainer>
    </Paper>
  );
}

export default CountryTable;
