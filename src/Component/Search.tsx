import React, { useState, useEffect } from "react";
import Country from "./CountryTable";

import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { display, spacing } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    margin: theme.spacing(1),
  },
}));
console.log(useStyles, "styles");

function Search({ data, setData }) {
  const classes = useStyles();

  const [userInput, setUserInput] = useState("");

  const formHandler = (event) => {
    setUserInput({
      ...userInput,
      [event.target.id]: event.target.value,
    });
  };

  useEffect(() => {
    const searchHandler = () => {
      const result = data.filter((country) =>
        country.name.toLowerCase().includes(userInput.userInput)
      );
      setData(result);
    };

    searchHandler();
  }, [userInput]);

  return (
    <div className={classes.root}>
      <form onChange={formHandler}>
        <TextField id="userInput" label="Search" variant="standard" />
      </form>
    </div>
  );
}

export default Search;
