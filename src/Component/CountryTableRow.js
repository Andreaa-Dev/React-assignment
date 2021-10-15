import React from "react";
import CountryTableCell from "./CountryTableCell";
import { TableRow } from "@mui/material";

function CountryTableRow({ data, columns, rowsPerPage, page }) {
  return (
    <>
      {data
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row) => {
          return (
            <TableRow hover role="checkbox" tabIndex={-1}>
              {columns.map((column) => {
                const value = row[column.id];
                return <CountryTableCell value={value} column={column} />;
              })}
            </TableRow>
          );
        })}
    </>
  );
}

export default CountryTableRow;
