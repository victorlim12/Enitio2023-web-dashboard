import Image from "next/image";
import styles from "./page.module.css";
import { Grid, Typography } from "@mui/material";
import { ClanCard } from "../../../components/RankCard";



export default function LeaderBoard() {
  return (
    <>
    <Grid item md={12} xs={12} sx={{p:'1%'}}>
        <div><ClanCard color={'rgb(36, 0, 243)'} style={{padding:'1%'}}>test</ClanCard></div>
    </Grid>
    <Grid item md={12} xs={12} sx={{p:'1%'}}>
        <div><ClanCard color={'rgb(36, 0, 243)'} style={{padding:'1%'}}>test</ClanCard></div>
    </Grid>
    <Grid item md={12} xs={12} sx={{p:'1%'}}>
        <div><ClanCard color={'rgb(36, 0, 243)'} style={{padding:'1%'}}>test</ClanCard></div>
    </Grid>
    <Grid item md={12} xs={12} sx={{p:'1%'}}>
        <div><ClanCard color={'rgb(36, 0, 243)'} style={{padding:'1%'}}>test</ClanCard></div>
    </Grid>
    <Grid item md={12} xs={12} sx={{p:'1%'}}>
        <div><ClanCard color={'rgb(36, 0, 243)'} style={{padding:'1%'}}>test</ClanCard></div>
    </Grid>
    </>
  );
}
