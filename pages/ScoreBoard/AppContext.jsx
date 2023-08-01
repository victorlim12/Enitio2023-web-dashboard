// AppContext.js
import React, { createContext, useState } from "react";
import properties from "../../config/prop-config.json";

//to extract out numbers from "og1" etc
function extractNumberFromString(str) {
  const regexPattern = /\d+/; // The regex pattern to match one or more digits (\d+)

  const match = str.match(regexPattern);

  if (match) {
    return Number(match[0]); // Convert the matched string to a number
  } else {
    return NaN; // Return NaN if no number is found
  }
}

function extractOG(arr) {
  const temp = [];
  for (const obj of arr) {
    temp.push({ name: `${obj.name}_og1`, clan: obj.og1 });
    temp.push({ name: `${obj.name}_og2`, clan: obj.og2 });
    temp.push({ name: `${obj.name}_og3`, clan: obj.og3 });
  }
  return temp;
}

function sortRank(arr) {
  arr = arr.sort((a, b) => b.clan - a.clan);
  arr = arr.map((sortedData) => sortedData.name);
  return arr;
}

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [result, setResult] = React.useState([]);
  const [og, setOg] = React.useState([]);
  const [theme, setTheme] = React.useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("http://159.223.38.56:8000/api/data");
      const data = await response.json();
      const res = Object.entries(data).map(([name, obj]) => ({ name, ...obj }));
      setData(data); // Set the fetched data into the state
      let sortedData = [...res];
      let ogData = extractOG(sortedData);
      let res_array_clan = sortRank(sortedData);
      let res_array_og = sortRank(ogData);
      console.log(res_array_og);
      setResult(res_array_clan);
      setOg(res_array_og);
      setTheme(properties[res_array_clan[0]]["color"]);

      //add in new segment to extract out

      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Set loading to false even if there's an error
    }
  };

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
        // Add more state variables and their respective setters
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
