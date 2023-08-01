import React from "react";
import { Grid, Typography, Stack } from "@mui/material";
import { RankCard } from "../../../components/RankCard";
import { AppContext } from "../AppContext";
import ClanModalPopup from "../../../components/Modal";
import ToggleGroup from "../../../components/ToggleButton";

//for data config related matters:
import properties from "../../../config/prop-config.json";

//for animation matters
import { Reorder } from "framer-motion";

let MultiOption = ["Clan", "OG"];

export default function LeaderBoard() {
  const [option, setOption] = React.useState("Clan");
  const { data, loading, result, setResult, og, setOg, ogInfo } =
    React.useContext(AppContext);
  const [open, setOpen] = React.useState(false);
  const [clanName, setClan] = React.useState("");
  const handleOpen = (clan) => {
    setClan(clan);
    setOpen(true);
  };

  return (
    <>
      <ToggleGroup
        MultiOption={MultiOption}
        option={option}
        setOption={setOption}
      />
      <div style={{ overflowY: "scroll", maxHeight: "60vh" }}>
        {option === "Clan" ? (
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
        ) : (
          <Reorder.Group axis="y" values={result} onReorder={setOg}>
            {og.map((og, idx) => (
              <Reorder.Item key={og} value={og} drag={false}>
                <Grid item md={12} xs={12} sx={{ p: "1%" }}>
                  <RankCard
                    key={og}
                    color={properties[ogInfo[idx]["clan_name"]]["color"]}
                    style={{ padding: "2%" }}
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
                        {og}
                      </Typography>
                      <Typography variant="h6">
                        {ogInfo[idx]["clan"]}
                      </Typography>
                    </Stack>
                  </RankCard>
                </Grid>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        )}
      </div>
    </>
  );
}
