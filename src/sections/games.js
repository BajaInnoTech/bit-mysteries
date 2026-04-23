import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Container,
    Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreativeCommons } from '@fortawesome/free-brands-svg-icons';
import { faCreativeCommonsBy } from '@fortawesome/free-brands-svg-icons';
import { faCreativeCommonsSa } from '@fortawesome/free-brands-svg-icons';
import Board from "../assets/images/board.jpg";
import DepthRangersPortrait from "../assets/images/DepthRangersMiniature.png";
import FiresInTheCryptPortrait from "../assets/images/FiresInTheCryptPortrait.jpg";
import TreasureOfAuralHallBetaCover from "../assets/images/TreasureOfAuralHallBetaCover.png";

function Games() {
    const theme = useTheme();

    return (
        <Container>
            <Box sx={{ display: 'flex', flexDirection: 'column', mt: 3 }}>
                <Typography variant="h3" sx={{ color: "primary.dark", mb: 2.5 }}>
                    BIT Mysteries Interactive Adventures
                </Typography>
                <img src={Board} width={'30%'} style={{padding:30}} alt='A game board with figures'/>
                <Typography variant="body2" fontSize={18} gutterBottom>
                    At BajaInnoTech we strive to foster our creativity and find innovative ways to further our technical skills recreationally.
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
                        <Box
                            color="primary.dark"
                            component="a"
                            href="https://github.com/BajaInnoTech/hunt_for_the_treasure_of_aural_hall"
                            sx={{
                                display:"flex",
                                textDecoration: "none",
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <CardMedia
                                component="img"
                                image={TreasureOfAuralHallBetaCover}
                                alt="DepthRangers Portrait"
                                sx={{ mr: 2, width:200, alignSelf:"center", justifyContent:"center" }}
                            />
                            <Box>
                                <Typography variant="h5">BIT Mysteries Presents: The Hunt For The Treasure Of Aural Hall</Typography>
                                <Typography gutterBottom variant="h6" sx={{color:"secondary.dark"}}>Eduardo del Corral, Ehira Lira, Hyunjin Oh</Typography>
                                <Typography gutterBottom variant="body1">A Sandbox COOP/Solo Campaign for DepthRangers RPG System.</Typography>
                                <Typography variant="body1" fontSize={20}>
                                    Creative Commons
                                    <span>
                                        <FontAwesomeIcon icon={faCreativeCommons} fontSize={20} />
                                        <FontAwesomeIcon icon={faCreativeCommonsBy} fontSize={20} />
                                        <FontAwesomeIcon icon={faCreativeCommonsSa} fontSize={20} />
                                    </span>
                                    CC BY-SA 4.0
                                </Typography>
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
                                sx={{ mr: 2, width:200, alignSelf:"center", justifyContent:"center" }}
                            />
                            <Box>
                                <Typography variant="h5">DepthRangers RPG System by BIT Mysteries</Typography>
                                <Typography gutterBottom variant="h6" sx={{color:"secondary.dark"}}>Eduardo del Corral, Ehira Lira, Hyunjin Oh</Typography>
                                <Typography gutterBottom variant="body1">An Open Source rules light RPG System focused on fast combat-heavy gameplay. Flexible enough to provide varied experiences, as well as light RPG flavoring.</Typography>
                                <Typography variant="body1" fontSize={20}>
                                    Creative Commons
                                    <span>
                                        <FontAwesomeIcon icon={faCreativeCommons} fontSize={20} />
                                        <FontAwesomeIcon icon={faCreativeCommonsBy} fontSize={20} />
                                        <FontAwesomeIcon icon={faCreativeCommonsSa} fontSize={20} />
                                    </span>
                                    CC BY-SA 4.0
                                </Typography>
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
                                <Typography variant="h5">Fires In the Crypt - Solo Play Options</Typography>
                                <Typography gutterBottom variant="h6" sx={{color:"secondary.dark"}}>Eduardo del Corral, Ehira Lira</Typography>
                                <Typography gutterBottom variant="body1">Fires In the Crypt - Solo Play Options An adaptation of an Orcus RPG adventure by Sanglorian for First Level Characters. This adaptation was made using Markdown.</Typography>
                                <Typography variant="body1" fontSize={20}>
                                    Open Game License (OGL)
                                </Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
}

export default Games;