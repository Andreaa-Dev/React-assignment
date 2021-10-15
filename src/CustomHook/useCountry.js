import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

function useCountry(url) {
  const [data, setData] = useState([]);
  async function fetchData() {
    try {
      const response = await fetch(url);
      let data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return [data, setData];
}

export default useCountry;
