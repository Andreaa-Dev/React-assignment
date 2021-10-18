import React from "react";
import TableCell from "@mui/material/TableCell";
import { ColumnType } from "../Component/CountryTable";

type PropTypes = {
  columns: any;
  value: any;
};
function CountryTableRow({ columns, value }: PropTypes) {
  return (
    <TableCell key={columns.id}>
      {columns.format ? columns.format(value) : value}
    </TableCell>
  );
}

export default CountryTableRow;
