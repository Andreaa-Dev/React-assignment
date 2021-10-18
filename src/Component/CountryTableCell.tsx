import React from "react";
import TableCell from "@mui/material/TableCell";

function CountryTableRow({ column, value }) {
  return (
    <TableCell key={column.id}>
      {column.format ? column.format(value) : value}
    </TableCell>
  );
}

export default CountryTableRow;
