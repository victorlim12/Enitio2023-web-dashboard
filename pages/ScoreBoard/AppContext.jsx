// AppContext.js
import React, { createContext, useState } from "react";
import properties from "../../config/prop-config.json";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [result, setResult] = React.useState([]);
  const [theme, setTheme] = React.useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("http://159.223.38.56:8000/api/data");
      const data = await response.json();
      const res = Object.entries(data).map(([name, obj]) => ({ name, ...obj }));
      setData(data); // Set the fetched data into the state
      const sortedData = [...res];
      sortedData.sort((a, b) => b.clan - a.clan);
      let res_array = sortedData.map((sortedData) => sortedData.name);
      setResult(res_array);
      setTheme(properties[res_array[0]]["color"]);
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
        // Add more state variables and their respective setters
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
