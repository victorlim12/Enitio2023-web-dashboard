import Image from 'next/image'
import styles from '../page.module.css'
import { Box, Grid } from "@mui/material";


const data = [
    {
        title: "Image 1",
        url: '/enitio_2022.png',
    },
    {
        title: "Image 2",
        url: '/enitio_2022.png',
    },
    {
        title: "Image 3",
        url: '/enitio_2022.png',
    },
    {
        title: "Image 4",
        url: '/enitio_2022.png',
    },
    {
        title: "Image 5",
        url: '/enitio_2022.png',
    },
    {
        title: "Image 6",
        url: '/ntu_logo.jpeg',
    },
];

export default function PastEvents() {
  return (
    <Grid container spacing={2} sx={{background: "black", pl: "5%", pr: "5%"}} direction="column">
        <Grid item xs={12} sx={{ mt: 5, ml: "2%"}}>
            <p style={{ color: "white", fontFamily: "Verdana", fontSize: "39px" }}> PAST EVENTS </p>
        </Grid>
        <Grid 
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 5, width: "100%"}}
            >
            {data.map((item, index) => (
                <Grid item md = {4} xs = {6} key ={index} 
                    sx={{ 
                        mb: 5, 
                        transition: 'transform 0.5s ease-in-out',
                        '&:hover': {
                        transform: 'scale(1.1)',
                        },
                    }}
                >
                    <Box    
                        sx={{
                            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.99) 0%, rgba(0, 0, 0, 0) 50%), url(${item.url})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            width: '90%',
                            paddingBottom: '60%',
                            borderRadius: '7%',
                            marginLeft: "10%",
                            marginRight: "10%",
                        }}
                    />
                    <p style={{ color: "white", fontFamily: "Verdana", fontSize: "30px", textTransform: "uppercase", marginTop: "-8%", marginLeft: "15%", marginBottom:"5%", }}>{item.title}</p>
                </Grid>
            ))}
        </Grid>
    </Grid>
  )
}
