import Image from 'next/image'
import styles from './page.module.css'
import { Box, Grid, Typography } from '@mui/material'
import {ClanCard, DefaultCard} from '../../components/Card'

export default function Home() {
  return (
    <main className={styles.main}>
      
      <Grid container>
      <Grid item xs={12}>
        <Typography sx={{fontSize: 40, fontWeight: 800}}>
          HIGHLIGHTS
        </Typography>
        </Grid>
          <Grid item md={6} xs={12}>
          <Grid container spacing={4}>
          
          <ClanCard color={"#2677FF"}>
            TEST
          </ClanCard>

          <ClanCard color={"#F81EDB"}>
            TEST
          </ClanCard>
      </Grid>


      </Grid>

            <Grid item md={6} xs={12}>
            <DefaultCard >
            </DefaultCard>
            </Grid>
      </Grid>
     
        
       
        
      
    </main>
  )
}
