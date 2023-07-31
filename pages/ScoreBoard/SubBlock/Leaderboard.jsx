import React from "react";
import { Grid, Typography, Stack } from "@mui/material";
import { RankCard } from "../../../components/RankCard";
import { AppContext } from "../AppContext";
import ClanModalPopup from "../../../components/Modal";

//for data config related matters:
import properties from "../../../config/prop-config.json";

//for animation matters
import { Reorder } from "framer-motion";

export default function LeaderBoard() {
  const { data, loading, result, setResult } = React.useContext(AppContext);
  const [open, setOpen] = React.useState(false);
  const [clanName, setClan] = React.useState("");
  const handleOpen = (clan) => {
    console.log(clan);
    setClan(clan);
    setOpen(true);
  };
  console.log(clanName);

  return (
    <>
      <Reorder.Group axis="y" values={result} onReorder={setResult}>
        {result.map((clan, key) => (
          <Reorder.Item key={clan} value={clan} drag={false}>
            <ClanModalPopup open={open} setOpen={setOpen} clan={clanName} />
            <Grid item md={12} xs={12} sx={{ p: "1%" }}>
              <RankCard
                key={clan}
                color={properties[clan]["color"]}
                style={{ padding: "2%" }}
                onClick={() => handleOpen(clan)}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                >
                  <Typography
                    sx={{ textTransform: "uppercase", letterSpacing: 3 }}
                  >
                    {clan}
                  </Typography>
                  <Typography variant="h6">{data[clan]["clan"]}</Typography>
                </Stack>
              </RankCard>
            </Grid>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </>
  );
}
