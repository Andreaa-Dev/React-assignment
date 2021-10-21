import React from "react";
import CountryTableCell from "./CountryTableCell";
import { TableRow } from "@mui/material";
import { CountryType } from "../../CustomHook/useCountry";
import { ColumnType } from "./CountryTable";
import TableCell from "@mui/material/TableCell";
import { makeStyles } from "@material-ui/core/styles";
import { ClassSharp } from "@mui/icons-material";

import More from "./More";
const useStyles = makeStyles({
  flag: {
    width: "100px",
    height: "auto",
    borderRadius: "30%",
  },
});

type PropType = {
  data: CountryType[];
  columns: ColumnType[];
  rowsPerPage: number;
  page: number;
};

function CountryTableRow({ data, columns, rowsPerPage, page }: PropType) {
  const classes = useStyles();
  return (
    <>
      {data
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row) => {
          return (
            <TableRow hover role="checkbox" tabIndex={-1}>
              {/* {columns.map((column) => {
                const value = row[column.id];
                return <CountryTableCell value={value} column={column} />;
              })} */}
              <TableCell>
                <img className={classes.flag} src={row.flag} alt="error" />
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.population}</TableCell>{" "}
              <TableCell>
                {row.languages.map((item) => (
                  <li> {item.name}</li>
                ))}
              </TableCell>
              <TableCell>{row.region}</TableCell>
              <TableCell>
                <More />
              </TableCell>
            </TableRow>
          );
        })}
    </>
  );
}

export default CountryTableRow;
