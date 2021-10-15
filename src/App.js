import React from "react";

import CountryTable from "./Component/CountryTable";
import Search from "./Component/Search";
import useCountry from "./CustomHook/useCountry";

function App() {
  const url = "https://restcountries.com/v2/all";
  const [data, setData] = useCountry(url);

  return (
    <div>
      <Search data={data} setData={setData} />
      <CountryTable data={data} />;
    </div>
  );
}

export default App;
