import React from "react";
import CountryTableCell from "./CountryTableCell";
import { TableRow } from "@mui/material";
import { CountryType } from "../CustomHook/useCountry";
import { ColumnType } from "./CountryTable";

type PropType = {
  data: CountryType[];
  columns: ColumnType[];
  rowsPerPage: number;
  page: number;
};

function CountryTableRow({ data, columns, rowsPerPage, page }: PropType) {
  return (
    <>
      {data
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row) => {
          return (
            <TableRow hover role="checkbox" tabIndex={-1}>
              {columns.map((column: any) => {
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
