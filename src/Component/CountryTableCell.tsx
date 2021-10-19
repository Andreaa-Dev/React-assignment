import React from "react";
import TableCell from "@mui/material/TableCell";
import { ColumnType } from "../Component/CountryTable";

type PropTypes = {
  column: ColumnType;
  value: any;
};
function CountryTableRow({ column, value }: PropTypes) {
  return (
    <TableCell key={column.id}>
      {column.format ? column.format(value) : value}
    </TableCell>
  );
}

export default CountryTableRow;
