import { useState, useEffect } from "react";

export type LanguageType = {
  name: string;
};

export type CountryType = {
  flag: string;
  name: string;
  population: number;
  languages: LanguageType[];
  region: string;
};

type UseCountryType = [
  data: CountryType[],
  setData: React.Dispatch<React.SetStateAction<any[]>>
];

// if add a new state foe error, type of error: unknown
function useCountry(url: string): UseCountryType {
  const [data, setData] = useState<CountryType[]>([]);
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
