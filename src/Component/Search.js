import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import Country from "./CountryTable";

function Search({ data, setData }) {
  const [userInput, setUserInput] = useState("");

  const formHandler = (event) => {
    setUserInput({
      ...userInput,
      [event.target.id]: event.target.value,
    });
  };

  useEffect(() => {
    const searchHandler = () => {
      console.log(userInput, "user");

      const result = data.filter((country) =>
        country.name.toLowerCase().includes(userInput.userInput)
      );
      setData(result);
    };

    searchHandler();
  }, [userInput]);

  return (
    <div>
      <form onChange={formHandler}>
        <TextField id="userInput" label="Search" variant="standard" />
      </form>
    </div>
  );
}

export default Search;
