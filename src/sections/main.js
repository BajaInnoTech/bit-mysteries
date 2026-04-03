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
            <Typography variant="h3" sx={{ color: "primary.dark" }}>
                Welcome to BitMysteries by BajaInnoTech!
            </Typography>
            </Box>
            <br />
            <Typography gutterBottom variant="h6">A place where we share the fruits of our recreational experimentation. This site is specifically geared towards RPG / Board game offerings.</Typography>
            <Typography gutterBottom variant="h6">Come roll dice with us, become a part of our <Link href="https://discord.gg/TDKf9KjQ"target="_blank" rel="noopener noreferrer">Discord Server community.</Link></Typography>
            <Typography variant="h6">You can download our games from the repositories or go directly to our <Link href="https://bitmysteries.itch.io/">Itch.Io page.</Link></Typography>
            <br />
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} padding={'120'}>
                <img src={bitLogoDetailed} width={80} alt='B.I.T. Logo'/>
                <Typography variant="h4" ><Link href="https://bajainnotech.github.io/bajainnotech/">Back to BajaInnoTech</Link> </Typography>
            </Box>
        </>
    );
}

export default Main;