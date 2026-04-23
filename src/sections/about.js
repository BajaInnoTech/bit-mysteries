import {
    Avatar,
    Box,
    Container,
    Card,
    CardContent,
    Typography,
    IconButton,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
    LinkedIn as LinkedInIcon,
} from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faTypescript } from '@fortawesome/free-brands-svg-icons';
import eduardo from '../assets/images/eduardo.jpeg';
import hyunjin from '../assets/images/hyunjin.jpeg';
import victor from '../assets/images/victor.jpeg';

function About() {
    const theme = useTheme();

    return (
        <Container>
            <Box sx={{ display: 'flex', flexDirection: 'column', mt: 3 }}>
                <Typography variant="h3" sx={{ color: "primary.dark"}} gutterBottom>
                    About Us
                </Typography>
                <Typography variant="body2" fontSize={18} gutterBottom>
                    BajaInnoTech was founded by Eduardo del Corral & Hyunjin Oh in 2026, from two years of entrepreneural experience and 9 years of professional collaboration. Victor Serrano Jumped onboard this project before we had finished cristalizing our vision.
                </Typography>
            </Box>
            <Box sx={{ mt: 4 }}>
                <Typography variant="h5">Members</Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'stretch',
                    justifyContent: 'center',
                }}>
                    <Card
                        variant="outlined"
                        sx={{
                            border: `1px solid ${theme.palette.primary.main}`,
                            borderRadius: 2,
                            margin: 1,
                            flexGrow: 1,
                            width: { md: '30%', xs: '100%' },
                        }}
                    >
                        <CardContent>
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Avatar
                                    sx={{ mr: 2 }}
                                    alt="eduardo"
                                    src={eduardo}
                                />
                                <Typography variant="h6">Eduardo del Corral</Typography>
                                <IconButton
                                    href="https://mx.linkedin.com/in/eduardo-alejandro-del-corral-lira-b25ba516"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <LinkedInIcon />
                                </IconButton>
                            </Box>
                            <Box sx={{ pl: 6 }}>
                                <Typography gutterBottom sx={{color:"secondary.dark"}}>
                                    CoFounder CEO, Fullstack focused on BE
                                </Typography>
                            </Box>
                            <Typography>
                                Having 14 years as an active developer and 2 years as an entrepreneur, along with Hyunjin, Eduardo cofounded BajaInnoTech. He spends his spare time writing, making music, rolling dice, doing martial arts, riding a motorcycle and drinking coffee.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card
                        variant="outlined"
                        sx={{
                            border: `1px solid ${theme.palette.primary.main}`,
                            borderRadius: 2,
                            margin: 1,
                            flexGrow: 1,
                            width: { md: '30%', xs: '100%' },
                        }}
                    >
                        <CardContent>
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Avatar
                                    sx={{ mr: 2 }}
                                    alt="hyunjin"
                                    src={hyunjin}
                                />
                                <Typography variant="h6">Hyunjin Oh</Typography>
                                <IconButton
                                    href="https://www.linkedin.com/in/hyunjin-oh/"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <LinkedInIcon />
                                </IconButton>
                            </Box>
                            <Box sx={{ pl: 6 }}>
                                <Typography gutterBottom sx={{color:"secondary.dark"}}>
                                    CoFounder CTO, Fullstack focused on FE
                                </Typography>
                            </Box>
                            <Typography>
                                Having a decade in the industry as an active developer and 2 years as an entrepreneur, along with Eduardo, Hyunjin Oh cofounded BajaInnoTech. He is the CEO of a hardware company yet his passion draws him to also have very active participation. On his spare time he enjoys making music, working out, being an active participant in the community and keeping close ties to his friends and family.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card
                        variant="outlined"
                        sx={{
                            border: `1px solid ${theme.palette.primary.main}`,
                            borderRadius: 2,
                            margin: 1,
                            flexGrow: 1,
                            width: { md: '30%', xs: '100%' },
                        }}
                    >
                        <CardContent>
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Avatar
                                    sx={{ mr: 2 }}
                                    alt="victor"
                                    src={victor}
                                />
                                <Typography variant="h6">Victor Carrillo</Typography>
                                <IconButton
                                    href="https://www.linkedin.com/in/victor-morales-a959a65b/"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <LinkedInIcon />
                                </IconButton>
                            </Box>
                            <Box sx={{ pl: 6 }}>
                                <Typography gutterBottom sx={{color:"secondary.dark"}}>
                                    COO, QA & Automation Specialist
                                </Typography>
                            </Box>
                            <Typography>
                                A dedicated software analyst with a decade of experience and a close professional and personal acquaintance of Eduardo and Hyunjin for more than half of that time. Victor likes to spend time in music, outdoors and pursuing projects that inspire him.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', mt: 4 }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', mb: 1 }}>
                    <Typography variant="h5">Specialties</Typography>
                    <FontAwesomeIcon icon={faJs} fontSize={30} />
                    <FontAwesomeIcon icon={faTypescript} fontSize={30} />
                </Box>
                <Typography variant="body1">
                    While we are constantly following the pulse of technological developments, we focus on fullstack JS/TS code development.
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', mt: 4 }}>
                <Typography variant="h5" gutterBottom>Open Source</Typography>
                <Typography variant="body1">
                    We are thrilled about contributing back to the Open Source community. All our recreational endeavors are Open Source, while we are committed to open sourcing some of the tooling we develop.
                </Typography>
            </Box>
        </Container>
    );
}

export default About;