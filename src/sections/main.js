import { Box, Typography } from '@mui/material';
// import bitLogoDetailed from '../assets/images/bitLogoDetailed.svg'

//TODO Add BIT Mysteries logo!

function Main() {
    return (
        <>
            <div style={{paddingTop:24}}/>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} padding={'120'}>
                {/* <img src={bitLogoDetailed} width={180} alt='B.I.T. Logo'/> */}
                <div style={{margin:12}} />
                <Typography variant="h3" sx={{ color: "primary.dark"}}>
                    Welcome to BitMysteries by BajaInnoTech!
                </Typography>
            </Box>
            <br />
            <Typography variant="h6">Here we share the fruits of our recreational experimentation. This site is specifically geared towards RPG / Board game offerings.</Typography>
        </>
    );
}

export default Main;