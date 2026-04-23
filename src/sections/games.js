import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Board from "../assets/images/board.jpg";
import DepthRangersPortrait from "../assets/images/DepthRangersMiniature.png";
import FiresInTheCryptPortrait from "../assets/images/FiresInTheCryptPortrait.jpg";
import TreasureOfAuralHallCover from "../assets/images/TreasureOfAuralHallCover.svg";

function Games() {
    return (
        <>
            <br />
            <Typography variant="h3" sx={{ color: "primary.dark"}}>
                BIT Mysteries Interactive Adventures
            </Typography>
            <br />
           <img src={Board} width={'30%'} style={{padding:30}} alt='A game board with figures'/>
            <Typography>At BajaInnoTech we strive to foster our creativity and find innovative ways to further our technical skills recreationally.</Typography>
            <br />
           <Card variant="outlined">
                <CardContent>
                    <Box color="primary.dark" component="a" href="https://github.com/BajaInnoTech/hunt_for_the_treasure_of_aural_hall" sx={{ display:"flex", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                        <CardMedia
                            component="img"
                            image={TreasureOfAuralHallCover}
                            alt="DepthRangers Portrait"
                            sx={{ mr: 2, width:200, alignSelf:"center", justifyContent:"center" }}
                        />
                        <Box>
                            <Typography variant="h5">BIT Mysteries Presents: The Hunt For The Treasure Of Aural Hall</Typography>
                            <Typography gutterBottom variant="h6" sx={{color:"secondary.dark"}}>Eduardo del Corral, Ehira Lira, Hyunjin Oh</Typography>
                            <Typography>A Sandbox COOP/Solo Campaign for DepthRangers RPG System.</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
           <Card variant="outlined">
                <CardContent>
                    <Box color="primary.dark" component="a" href="https://bajainnotech.github.io/depthrangers/DepthRangers.html" sx={{ display:"flex", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                        <CardMedia
                            component="img"
                            image={DepthRangersPortrait}
                            alt="DepthRangers Portrait"
                            sx={{ mr: 2, width:200, alignSelf:"center", justifyContent:"center" }}
                        />
                        <Box>
                            <Typography variant="h5">DepthRangers RPG System by BIT Mysteries</Typography>
                            <Typography gutterBottom variant="h6" sx={{color:"secondary.dark"}}>Eduardo del Corral, Ehira Lira, Hyunjin Oh</Typography>
                            <Typography>An Open Source rules light RPG System focused on fast combat-heavy gameplay. Flexible enough to provide varied experiences, as well as light RPG flavoring.</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
           <Card variant="outlined">
                <CardContent>
                    <Box color="primary.dark" component="a" href="https://github.com/BajaInnoTech/fires-in-the-crypt-solo-play-options" sx={{ display:"flex", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                        <CardMedia
                            component="img"
                            image={FiresInTheCryptPortrait}
                            alt="Fires in the Crypt Portrait"
                            sx={{ mr: 2, width:200, alignSelf:"center", justifyContent:"center" }}
                        />
                        <Box>
                            <Typography variant="h5">Fires In the Crypt - Solo Play Options</Typography>
                            <Typography gutterBottom variant="h6" sx={{color:"secondary.dark"}}>Eduardo del Corral, Ehira Lira</Typography>
                            <Typography>Fires In the Crypt - Solo Play Options An adaptation of an Orcus RPG adventure by Sanglorian for First Level Characters. This adaptation was made using Markdown.</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
            <br />
        </>
    );
}

export default Games;