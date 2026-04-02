import { Box, Link, Typography } from '@mui/material';
import banner from '../assets/images/banner.png'
import bitLogoDetailed from '../assets/images/bitLogoDetailed.svg'

function Main() {
    return (
        <>
            <div style={{paddingTop:24}}/>
            
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} padding={'120'}>

            <img src={banner} style={{justifySelf:"center"}} width={"75%"} alt='B.I.T. Logo'/>
                <div style={{margin:12}} />
                <Typography variant="h3" sx={{ color: "primary.dark"}}>
                    Welcome to BitMysteries by BajaInnoTech!
                </Typography>
            </Box>
            <br />
            <Typography variant="h6">Here we share the fruits of our recreational experimentation. This site is specifically geared towards RPG / Board game offerings. Our projects repositories can be seen in the games section.</Typography>
            <br />
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} padding={'120'}>
                <img src={bitLogoDetailed} width={80} alt='B.I.T. Logo'/>
                <Typography variant="h4" ><Link href="https://bajainnotech.github.io/bajainnotech/">Back to BajaInnoTech</Link> </Typography>
            </Box>
        </>
    );
}

export default Main;