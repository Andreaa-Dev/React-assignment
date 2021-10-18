import React from "react";

import CountryTable from "./Component/CountryTable";
import Search from "./Component/Search";
import useCountry from "./CustomHook/useCountry";

function App() {
  const url = "https://restcountries-v2.herokuapp.com/all";
  const [data, setData] = useCountry(url);
  console.log(data, "data");

  return (
    <>
      <Search data={data} setData={setData} />
      <CountryTable data={data} />
    </>
  );
}

export default App;
