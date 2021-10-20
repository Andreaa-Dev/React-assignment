import React from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { useTheme } from "@mui/material/styles";
import { theme } from "../index";
import { ColumnType } from "../Component/CountryTable";
import Typography from "@mui/material/Typography";

type PropType = {
  columns: ColumnType[];
};

// Note: no need to add theme props - new update
function CountryTableHead({ columns }: PropType) {
  const myTheme = useTheme();
  console.log(myTheme, "theme");
  return (
    <TableHead
      sx={{ minWidth: "100%", bgcolor: myTheme.palette.background.paper }}
    >
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.id}
            sx={{ typography: "h6", fontWeight: "bold" }}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default CountryTableHead;
