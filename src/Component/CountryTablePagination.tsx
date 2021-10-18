import React from "react";
import { TablePagination } from "@mui/material";
import { CountryType } from "../CustomHook/useCountry";

type PropsType = {
  data: CountryType[];
  rowsPerPage: number;
  page: number;
  handleChangePage: (newPage: number) => void;
  handleChangeRowsPerPage;
};

function CountryTablePagination({
  data,
  rowsPerPage,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
}: PropsType) {
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
