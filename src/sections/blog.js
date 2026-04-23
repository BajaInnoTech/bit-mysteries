import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Container,
    Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DepthRangersPortrait from "../assets/images/DepthRangersMiniature.png";
import FiresInTheCryptPortrait from "../assets/images/FiresInTheCryptPortrait.jpg";
import Itchio from "../assets/images/itchio.svg";
import TreasureOfAuralHallBetaCover from "../assets/images/TreasureOfAuralHallBetaCover.png";

function Blog() {
    const theme = useTheme();

    return (
        <Container>
            <Box sx={{ mt: 3 }}>
                <Typography gutterBottom variant="h3" sx={{ color: "primary.dark"}}>
                    Blog
                </Typography>
                <Typography variant="body2" fontSize={18} gutterBottom>
                    This is BajaInnoTech's game-lounge news feed:
                </Typography>
            </Box>
            <Box sx={{ mt: 4 }}>
                <Card
                    variant="outlined"
                    sx={{
                        border: `1px solid ${theme.palette.primary.main}`,
                        mb: 2,
                    }}
                >
                    <CardContent>
                        <Box color="primary.dark" component="a" href="https://bitmysteries.itch.io/the-hunt-for-the-treasure-of-aural-hall" sx={{ display:"flex", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                            <CardMedia
                                component="img"
                                image={Itchio}
                                alt="Itch.io Icon"
                                sx={{ paddingRight:3, paddingLeft:3, mr: 2, width:150, alignSelf:"center", justifyContent:"center" }}
                            />
                            <Box>
                        <Typography variant="h6">The Hunt For The Treasure Of Aural Hall is now on Open Beta!!!</Typography>
                        <Typography gutterBottom sx={{color:"secondary.dark"}}>Eduardo del Corral, Ehira Lira, Hyunjin Oh</Typography>
                        <Typography>The first campaign for our DepthRangers RPG System is now hosted on Itch.io. A Solo/COOP Sandbox, that sends players right into the action. Come and check it out!</Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
                <Card
                    variant="outlined"
                    sx={{
                        border: `1px solid ${theme.palette.primary.main}`,
                        mb: 2,
                    }}
                >
                    <CardContent>
                        <Box color="primary.dark" component="a" href="https://github.com/BajaInnoTech/hunt_for_the_treasure_of_aural_hall" sx={{ display:"flex", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                            <CardMedia
                                component="img"
                                image={TreasureOfAuralHallBetaCover}
                                alt="Itch.io Icon"
                                sx={{ paddingRight:3, paddingLeft:3, mr: 2, width:150, alignSelf:"center", justifyContent:"center" }}
                            />
                            <Box>
                        <Typography variant="h6">Introducing The Hunt For The Treasure Of Aural Hall</Typography>
                        <Typography gutterBottom sx={{color:"secondary.dark"}}>Eduardo del Corral, Ehira Lira, Hyunjin Oh</Typography>
                        <Typography>We have released an Open Beta of our first DepthRangers campaign. A Solo/COOP Sandbox, that sends players right into the action. Come and check it out!</Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
                <Card
                    variant="outlined"
                    sx={{
                        border: `1px solid ${theme.palette.primary.main}`,
                        mb: 2,
                    }}
                >
                    <CardContent>
                        <Box color="primary.dark" component="a" href="https://bitmysteries.itch.io/depthrangers" sx={{ display:"flex", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                            <CardMedia
                                component="img"
                                image={Itchio}
                                alt="Itch.io Icon"
                                sx={{ paddingRight:3, paddingLeft:3, mr: 2, width:150, alignSelf:"center", justifyContent:"center" }}
                            />
                            <Box>
                        <Typography variant="h6">Introducing DepthRangers!</Typography>
                        <Typography gutterBottom sx={{color:"secondary.dark"}}>Eduardo del Corral, Ehira Lira, Hyunjin Oh</Typography>
                        <Typography>Our new RPG System is now hosted on Itch.io. Come and check it out!</Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
                <Card
                    variant="outlined"
                    sx={{
                        border: `1px solid ${theme.palette.primary.main}`,
                        mb: 2,
                    }}
                >
                    <CardContent>
                        <Box color="primary.dark" component="a" href="https://bajainnotech.github.io/depthrangers/DepthRangers.html" sx={{ display:"flex", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                            <CardMedia
                                component="img"
                                image={DepthRangersPortrait}
                                alt="DepthRangers Portrait"
                                sx={{ paddingRight:3, paddingLeft:3, mr: 2, width:150, alignSelf:"center", justifyContent:"center" }}
                            />
                            <Box>
                        <Typography variant="h6">Introducing DepthRangers!</Typography>
                        <Typography gutterBottom sx={{color:"secondary.dark"}}>Eduardo del Corral, Ehira Lira, Hyunjin Oh</Typography>
                        <Typography>We have created a new RPG System, that we plan to use on our upcoming adventures.</Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
                <Card
                    variant="outlined"
                    sx={{
                        border: `1px solid ${theme.palette.primary.main}`,
                        mb: 2,
                    }}
                >
                    <CardContent>
                        <Box color="primary.dark" component="a" href="https://bitmysteries.itch.io/" sx={{ display:"flex", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                            <CardMedia
                                component="img"
                                image={Itchio}
                                alt="Itch.io Icon"
                                sx={{ paddingRight:3, paddingLeft:3, mr: 2, width:150, alignSelf:"center", justifyContent:"center" }}
                            />
                            <Box>
                        <Typography variant="h6">We have an Itch.io website!</Typography>
                        <Typography gutterBottom sx={{color:"secondary.dark"}}>Eduardo del Corral</Typography>
                        <Typography>We plan to place updates, dev insight and other material here.</Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
                <Card
                    variant="outlined"
                    sx={{
                        border: `1px solid ${theme.palette.primary.main}`,
                        mb: 2,
                    }}
                >
                    <CardContent>
                        <Box color="primary.dark" component="a" href="https://github.com/BajaInnoTech/fires-in-the-crypt-solo-play-options" sx={{ display:"flex", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                            <CardMedia
                                component="img"
                                image={FiresInTheCryptPortrait}
                                alt="Fires in the Crypt Portrait"
                                sx={{ mr: 2, width:200, alignSelf:"center", justifyContent:"center" }}
                            />
                            <Box>
                        <Typography variant="h6">We published our first recreational public repository</Typography>
                        <Typography gutterBottom sx={{color:"secondary.dark"}}>Eduardo del Corral</Typography>
                        <Typography>We have publicly shared our work-in-progress. A SOLO/COOP adaptation of Sanglorian's Orcus RPG Retro-Clone First Level Adventure. This is still a work in progress.</Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
}

export default Blog;