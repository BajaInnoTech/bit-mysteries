import { Box, Typography } from '@mui/material';

//TODO Left for later to include Literature, or other non game related mysteries.

function Mysteries() {
    return (
        <>
            <div style={{paddingTop:24}}/>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} padding={'120'}>
                {/* <img src={vpicon} width={150} alt='V.P. Logo'/> */}
                    <div style={{margin:12}} />
                <Typography variant="h3" sx={{ color: "primary.dark"}}>
                    Under construction
                </Typography>
            </Box>
            <br />
            <Typography>Here will be a collection of non interactive works. Coming Soon!</Typography>
        </>
    );
}

export default Mysteries;

