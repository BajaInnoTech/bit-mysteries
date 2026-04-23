import {
    Box,
    Container,
    Link,
    Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMastodon } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faReddit } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faVimeo } from '@fortawesome/free-brands-svg-icons';
import { faBoardGameGeek } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faItchIo } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    const theme = useTheme();

    return (
        <Container>
            <Box sx={{ mt: 3 }}>
                <Typography gutterBottom variant="h3" sx={{ color: "primary.dark"}}>
                    Contact Us
                </Typography>
                <Typography variant="body2" fontSize={18} gutterBottom>
                    Are you enjoying our projects? Is there a fix that you'd like us to make? Are you interested in collaboration?
                </Typography>
                <Typography variant="body2" fontSize={18} gutterBottom>
                    Reach out to us at: <Link href="mailto:bitmysteries@proton.me">bitmysteries@proton.me</Link>
                </Typography>
            </Box>
            <Box
                component="fieldset"
                sx={{
                    border: `1px solid ${theme.palette.primary.main}`,
                    borderRadius: '10px',
                    margin: 0,
                    mt: 4,
                    p: 3
                }}
            >
                <Box
                    component="legend"
                    sx={{
                        px: 1,
                        color: theme.palette.primary.main,
                        fontSize: '0.80rem',
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 500,
                        lineHeight: 1,
                    }}
                >
                    Social media
                </Box>

                <Typography gutterBottom variant="body1" fontSize={20}>
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://mastodon.social/@bitmysteries"
                        sx={{
                            textDecoration: 'none',
                        }}
                    >
                        <span>
                            <FontAwesomeIcon icon={faMastodon} fontSize={20} />
                        </span>
                        Mastodon
                    </Link>
                </Typography>
                <Typography gutterBottom variant="body1" fontSize={20}>
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://x.com/BITMysteries"
                        sx={{
                            textDecoration: 'none',
                        }}
                    >
                        <span>
                            <FontAwesomeIcon icon={faXTwitter} fontSize={20} />
                        </span>
                        X / Twitter
                    </Link>
                </Typography>
                <Typography gutterBottom variant="body1" fontSize={20}>
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://reddit.com/user/BIT-Mysteries/"
                        sx={{
                            textDecoration: 'none',
                        }}
                    >
                        <span>
                            <FontAwesomeIcon icon={faReddit} fontSize={20} />
                        </span>
                        Reddit
                    </Link>
                </Typography>
                <Typography gutterBottom variant="body1" fontSize={20}>
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://tiktok.com/@bitmysteries"
                        sx={{
                            textDecoration: 'none',
                        }}
                    >
                        <span>
                            <FontAwesomeIcon icon={faTiktok} fontSize={20} />
                        </span>
                        Tiktok
                    </Link>
                </Typography>
            </Box>

            <Box
                component="fieldset"
                sx={{
                    border: `1px solid ${theme.palette.secondary.main}`,
                    borderRadius: '10px',
                    margin: 0,
                    mt: 4,
                    p: 3
                }}
            >
                <Box
                    component="legend"
                    sx={{
                        px: 1,
                        color: theme.palette.secondary.main,
                        fontSize: '0.80rem',
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 500,
                        lineHeight: 1,
                    }}
                >
                    Community
                </Box>

                <Typography gutterBottom variant="body1" fontSize={20}>
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://discord.gg/yUeZHWd3"
                        sx={{
                            textDecoration: 'none',
                            color: theme.palette.secondary.main,
                        }}
                    >
                        <span>
                            <FontAwesomeIcon icon={faDiscord} fontSize={20} />
                        </span>
                        Discord
                    </Link>
                </Typography>
                <Typography gutterBottom variant="body1" fontSize={20}>
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://boardgamegeek.com/profile/BITMysteries"
                        sx={{
                            textDecoration: 'none',
                            color: theme.palette.secondary.main,
                        }}
                    >
                        <span>
                            <FontAwesomeIcon icon={faBoardGameGeek} fontSize={20} />
                        </span>
                        BGG
                    </Link>
                </Typography>
                <Typography gutterBottom variant="body1" fontSize={20}>
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://vimeo.com/user257211227"
                        sx={{
                            textDecoration: 'none',
                            color: theme.palette.secondary.main,
                        }}
                    >
                        <span>
                            <FontAwesomeIcon icon={faVimeo} fontSize={20} />
                        </span>
                        Vimeo
                    </Link>
                </Typography>
            </Box>

            <Box
                component="fieldset"
                sx={{
                    border: `1px solid ${theme.palette.primary.light}`,
                    borderRadius: '10px',
                    margin: 0,
                    mt: 4,
                    p: 3
                }}
            >
                <Box
                    component="legend"
                    sx={{
                        px: 1,
                        color: theme.palette.primary.light,
                        fontSize: '0.80rem',
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 500,
                        lineHeight: 1,
                    }}
                >
                    Storefront
                </Box>

                <Typography gutterBottom variant="body1" fontSize={20}>
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://bitmysteries.itch.io"
                        sx={{
                            textDecoration: 'none',
                            color: theme.palette.primary.light,
                        }}
                    >
                        <span>
                            <FontAwesomeIcon icon={faItchIo} fontSize={20} />
                        </span>
                        itch.io
                    </Link>
                </Typography>
            </Box>
        </Container>
    );
}

export default Contact;