import React from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

function CountryTableHead({ columns }) {
  return (
    <TableHead sx={{ minWidth: "100%" }}>
      <TableRow>
        {columns.map((column) => (
          <TableCell key={column.id}>{column.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default CountryTableHead;
