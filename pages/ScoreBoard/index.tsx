import Image from 'next/image'
import styles from './page.module.css'
import { Box } from '@mui/material'
import {ClanCard, DefaultCard} from '../../components/Card'

export default function Home() {
  return (
    <main className={styles.main}>
      <DefaultCard sx={{width: "90vw", height: "70vh"}}>
        <ClanCard>
        TEST
        </ClanCard>
        
      </DefaultCard>
    </main>
  )
}
