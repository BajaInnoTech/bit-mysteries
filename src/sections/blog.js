import { ReactTinyLink } from "@artshell/react-tiny-link";
import { Card, CardContent, Typography } from '@mui/material';

function Blog() {
    return (
        <>
            <br />
            <Typography variant="h3" sx={{ color: "primary.dark"}}>
                Blog
            </Typography>
            <Typography>This is BajaInnoTech's game-lounge news feed:</Typography>
            <br />
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6">We have an Itch.io website!</Typography>
                    <Typography gutterBottom sx={{color:"secondary.dark"}}>Eduardo del Corral</Typography>
                    <Typography variant="h5" >Feel free to look us up by clicking the link below:</Typography>
                    <ReactTinyLink
                        cardSize="small"
                        showGraphic={true}
                        maxLine={2}
                        minLine={1}
                        url="https://bitmysteries.itch.io/"
                    />
                </CardContent>
            </Card>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6">We published our first recreational public repository</Typography>
                    <Typography gutterBottom sx={{color:"secondary.dark"}}>Eduardo del Corral</Typography>
                    <Typography>We have publicly shared our work-in-progress. A SOLO/COOP adaptation of Sanglorian's Orcus RPG Retro-Clone First Level Adventure. This is still a work in progress.</Typography>
                    <ReactTinyLink
                        showGraphic={true}
                        maxLine={2}
                        minLine={1}
                        url="https://github.com/BajaInnoTech/fires-in-the-crypt-solo-play-options"
                    />
                </CardContent>
            </Card>
        </>
    );
}

export default Blog;