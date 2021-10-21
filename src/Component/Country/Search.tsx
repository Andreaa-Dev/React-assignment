import React, { useState, useEffect } from "react";
import Country from "./CountryTable";

import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box, display, spacing } from "@mui/system";
import { ThemeType } from "../../index";
import { CountryType } from "../../CustomHook/useCountry";

const useStyles = makeStyles((theme: ThemeType) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    margin: theme.spacing(1),
    padding: 1,
    width: 250,
  },
}));

type UserInputType = {
  userInput: string;
};

type PropType = {
  data: CountryType[];
  setData: React.Dispatch<React.SetStateAction<any[]>>;
};

function Search({ data, setData }: PropType) {
  const classes = useStyles();

  const [userInput, setUserInput] = useState<UserInputType>({ userInput: "" });

  // Note: build in event React.FormEvent<HTMLFormElement>
  // element as HTMLInputElement
  // const element = event.target as Element;
  // event.target.value => (element as HTMLInputElement).value
  const formHandler = (event: React.FormEvent<HTMLFormElement>) => {
    const element = event.target as Element;
    setUserInput({
      ...userInput,
      [element.id]: (element as HTMLInputElement).value,
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
    <Box className={classes.root}>
      <form onChange={formHandler}>
        <TextField id="userInput" label="Search" variant="standard" />
      </form>
    </Box>
  );
}

export default Search;
