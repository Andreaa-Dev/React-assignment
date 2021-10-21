import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import CountryTable from "./Component/Country/CountryTable";
import Search from "./Component/Country/Search";
import useCountry from "./CustomHook/useCountry";
import NavBar from "./Component/NavBar";
import LandingPage from "./Component/LandingPage/LandingPage";

function App() {
  const url = "https://restcountries-v2.herokuapp.com/all";
  const [data, setData] = useCountry(url);
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/home">
          <LandingPage />
        </Route>
        <Route exact path="/countries">
          <Search data={data} setData={setData} />
          <CountryTable data={data} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
