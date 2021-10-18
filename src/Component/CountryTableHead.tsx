import React from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { useTheme } from "@mui/material/styles";
import { theme } from "../index";
import { ColumnType } from "../Component/CountryTable";

type PropType = {
  columns: ColumnType[];
};

function CountryTableHead({ columns }: PropType) {
  const myTheme = useTheme(theme);
  return (
    <TableHead
      sx={{ minWidth: "100%", bgcolor: myTheme.palette.background.paper }}
    >
      <TableRow>
        {columns.map((column) => (
          <TableCell key={column.id}>{column.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default CountryTableHead;
