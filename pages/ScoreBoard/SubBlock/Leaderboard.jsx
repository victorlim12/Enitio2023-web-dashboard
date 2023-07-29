import React from "react";
import { Grid, Typography, Stack } from "@mui/material";
import { ClanCard } from "../../../components/RankCard";

//for data config related matters:
import properties from "../../../config/prop-config.json";

//for animation matters
import { Reorder } from "framer-motion";

export default function LeaderBoard() {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [result, setResult] = React.useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzsp75jnaDAQ5EvYUJ5FUejFZpNrtEGc_tdkErdbwtIgUHCHjM48-iKLzLAke2b16E1Cg/exec"
      );
      const data = await response.json();
      const res = Object.entries(data).map(([name, obj]) => ({ name, ...obj }));
      setData(data); // Set the fetched data into the state
      const sortedData = [...res];
      sortedData.sort((a, b) => b.clan - a.clan);
      setResult(sortedData.map((sortedData) => sortedData.name));
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

  console.log(result);

  return (
    <>
      <Reorder.Group axis="y" values={result} onReorder={setResult}>
        {result.map((clan, key) => (
          <Reorder.Item key={clan} value={clan} drag={false}>
            <Grid item md={12} xs={12} sx={{ p: "1%" }}>
              <ClanCard
                color={properties[clan]["color"]}
                style={{ padding: "2%" }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                >
                  <Typography
                    variant="h6"
                    sx={{ textTransform: "uppercase", letterSpacing: 3 }}
                  >
                    {clan}
                  </Typography>
                  <Typography variant="h6">{data[clan]["clan"]}</Typography>
                </Stack>
              </ClanCard>
            </Grid>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </>
  );
}
