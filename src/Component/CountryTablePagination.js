import React from "react";
import { TablePagination } from "@mui/material";

function CountryTablePagination({
  data,
  rowsPerPage,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
}) {
  return (
    <div>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default CountryTablePagination;