import React from "react";
import CountryTableCell from "./CountryTableCell";
import { PropTypes, TableRow } from "@mui/material";
import { CountryType } from "../CustomHook/useCountry";
import { ColumnType } from "./CountryTable";


const PropsType = {
  data: CountryType[];
  columns: ColumnType;
    rowsPerPage: ;
  //    page: ;

}
function CountryTableRow({ data, columns, rowsPerPage, page }:PropTypes) {
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
