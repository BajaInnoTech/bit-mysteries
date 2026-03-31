import { Card, CardContent, Typography } from '@mui/material';
import { ReactTinyLink } from "@artshell/react-tiny-link";
import board from "../assets/images/board.jpg"

function Games() {
    return (
        <>
            <br />
            <Typography variant="h3" sx={{ color: "primary.dark"}}>
                Bit Mysteries Interactive Adventures
            </Typography>
            <br />
           <img src={board} width={'30%'} style={{padding:30}} alt='A game board with figures'/>
            <Typography>At BajaInnoTech we strive to foster our creativity and find innovative ways to further our technical skills recreationally.</Typography>
            <br />
           <Card variant="outlined">
                <CardContent>
                    <Typography variant="h5">Fires In the Crypt - Solo Play Options</Typography>
                    <Typography gutterBottom variant="h6" sx={{color:"secondary.dark"}}>Eduardo del Corral</Typography>
                    <Typography>An adaptation of Sanglorian's first level adventure into a SOLO/COOP experience. This is a work in progress.</Typography>
                    <ReactTinyLink
                        cardSize="small"
                        showGraphic={true}
                        maxLine={2}
                        minLine={1}
                        url="https://github.com/BajaInnoTech/fires-in-the-crypt-solo-play-options"
                    />
                </CardContent>
            </Card>
            <br />
        </>
    );
}

export default Games;