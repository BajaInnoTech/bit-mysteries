import { Box, Card, CardContent, Typography } from '@mui/material';

function About() {
    return (
        <>
            <Typography variant="h3" sx={{ color: "primary.dark"}}>
                About Us
            </Typography>
            <br />
            <Typography>BajaInnoTech was founded by Eduardo del Corral & Hyunjin Oh in 2026, from two years of entrepreneural experience and 9 years of professional collaboration. Victor Serrano Jumped onboard this project before we had finished cristalizing our vision.</Typography>
            <br />
            <Box>
                <Typography variant="h5">Bios</Typography>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h6">Eduardo del Corral</Typography>
                        <Typography gutterBottom sx={{color:"secondary.dark"}}>CoFouner CEO, Fullstack focused on BE</Typography>
                        <Typography>Having 14 years as an active developer and 2 years as an entrepreneur, along with Hyunjin Oh Eduardo cofounded BajaInnoTech. He spends his spare time writing, making music, rolling dice, doing martial arts, riding a motorcycle and drinking coffee.</Typography>
                    </CardContent>
                </Card>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h6">Hyunjin Oh</Typography>
                        <Typography gutterBottom sx={{color:"secondary.dark"}}>CoFounder CTO, Fullstack focused on FE</Typography>
                        <Typography>Having a decade in the industry as an active developer and 2 years as an entrepreneur, along with Eduardo Hyunjin Oh cofounded BajaInnoTech. He is the CEO of a hardware company yet his passion draws him to also have very active participation. On his spare time he enjoys making music, working out, being an active participant in the community and keeping close ties to his friends and family.</Typography>
                    </CardContent>
                </Card>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h6">Victor Carrillo</Typography>
                        <Typography gutterBottom sx={{color:"secondary.dark"}}>COO, QA & Automation Specialist</Typography>
                        <Typography>A dedicated software analyist with a decade of experience and a close professional and personal acquaintance of Eduardo and Hyunjin for more than half of that time. Victor likes to spend time in music, outdoors and pursuing projects that inspire him.</Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box>
                <Typography variant="h5">Specialties</Typography>
                <Typography>While we are constantly following the pulse of technological developments, we focus on fullstack JS/TS code development.</Typography>
            </Box>
            <br />
            <Box>
                <Typography variant="h5">Open Source</Typography>
                <Typography>We are thrilled about contributing back to the Open Source community. All our recreational endeavors are Open Source, while we are committed to open sourcing some of the tooling we develop.</Typography>
            </Box>
        </>
    );
}

export default About;