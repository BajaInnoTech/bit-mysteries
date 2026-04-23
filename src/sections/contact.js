import { Link, Typography } from '@mui/material';

function Contact() {
    return (
        <>
            <br />
            <Typography variant="h3" sx={{ color: "primary.dark"}}>
                Contact Us
            </Typography>
            <br />
            <Typography>Are you enjoying our projects? Is there a fix that you'd like us to make? Are you interested in collaboration? Reach out to us at <Link href="mailto:bitmysteries@proton.me">bitmysteries@proton.me</Link></Typography>
            {/* https://discord.gg/yUeZHWd3 */}
            {/* https://bitmysteries.itch.io */}
            <Typography>
                Follow us on:
                <Link rel="me" href="https://mastodon.social/@bitmysteries">Mastodon</Link>, <Link href="https://x.com/BITMysteries">X</Link>
            </Typography>
        </>
    );
}

export default Contact;