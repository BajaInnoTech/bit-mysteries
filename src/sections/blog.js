import { ReactTinyLink } from "@artshell/react-tiny-link";
import { Card, CardContent, Typography } from '@mui/material';

function Blog() {
    return (
        <>
            <br />
            <Typography variant="h3" sx={{ color: "primary.dark"}}>
                Blog
            </Typography>
            <Typography>This is BajaInnoTech's game lounge.</Typography>
            <br />
            <Typography variant="h5">List of Entries</Typography>
            <br />
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6">Fires In the Crypt - Solo Play Options</Typography>
                    <Typography gutterBottom sx={{color:"secondary.dark"}}>Eduardo del Corral</Typography>
                    <Typography>An adaptation of a roleplay adventure for a system known as Orcus RPG. Aimed at new players or those who's character is level 1. This is still a work in progress.</Typography>
                    <ReactTinyLink
                        cardSize="small"
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