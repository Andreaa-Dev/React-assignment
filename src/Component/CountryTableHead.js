import React from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

function CountryTableHead({ columns }) {
  return (
    <div>
      <TableHead sx={{ minWidth: "100%" }}>
        <TableRow back>
          <TableCell align="center" colSpan={2}>
            Country
          </TableCell>
          <TableCell align="center" colSpan={3}>
            Details
          </TableCell>
        </TableRow>
        <TableRow>
          {columns.map((column) => (
            <TableCell
              key={column.id}
              align={column.align}
              style={{ top: 57, minWidth: "100%" }}
            >
              {column.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    </div>
  );
}

export default CountryTableHead;
