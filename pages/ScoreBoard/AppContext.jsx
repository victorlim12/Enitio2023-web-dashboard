// AppContext.js
import React, { createContext, useState } from "react";
import properties from "../../config/prop-config.json";

//extract data from each og
function extractOG(arr) {
  const temp = [];
  for (const obj of arr) {
    temp.push({ name: `${obj.name}_og1`, clan: obj.og1, clan_name: obj.name });
    temp.push({ name: `${obj.name}_og2`, clan: obj.og2, clan_name: obj.name });
    temp.push({ name: `${obj.name}_og3`, clan: obj.og3, clan_name: obj.name });
  }
  return temp;
}

//sortRanking based on points, works for both clan and og
function sortRank(arr) {
  arr = arr.sort((a, b) => b.clan - a.clan);
  arr = arr.map((sortedData) => sortedData.name);
  return arr;
}

//initialize context
export const AppContext = createContext({});

//Provider wrapper for Leaderboard page
export default function AppProvider({ children }) {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [result, setResult] = React.useState([]);
  const [ogInfo, setOgInfo] = React.useState([]);
  const [og, setOg] = React.useState([]);
  const [theme, setTheme] = React.useState("");

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  function fetchData() {
    fetch(`${process.env.NEXT_PUBLIC_SCORESHEET}/api/data`)
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Set the fetched data into the state
        const res = Object.entries(data).map(([name, obj]) => ({
          name,
          ...obj,
        }));
        let sortedData = [...res];
        let ogData = extractOG(sortedData);
        setOgInfo(ogData);

        // Rank data for both og and clan
        let res_array_clan = sortRank(sortedData);
        let res_array_og = sortRank(ogData);
        setResult(res_array_clan);
        setOg(res_array_og);
        setTheme(properties[res_array_clan[0]]["color"]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  React.useEffect(() => {
    fetchData();
    // Fetch data at regular intervals using setInterval
    const intervalId = setInterval(fetchData, 2000);

    // Clean up the interval when the component unmounts to prevent memory leaks
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        loading,
        setLoading,
        result,
        setResult,
        theme,
        setTheme,
        og,
        setOg,
        ogInfo,
        setOgInfo,
        // Add more state variables and their respective setters
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
