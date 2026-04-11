import { useState } from 'react';
import {
    AppBar,
    Button,
    Box,
    Container,
    Stack,
    ThemeProvider,
    Typography,
    Toolbar,
} from '@mui/material';
import Main from './sections/main';
import Games from './sections/games';
import About from './sections/about';
import Mysteries from './sections/mysteries';
import Blog from './sections/blog';
import Contact from './sections/contact';
import theme from './assets/style/theme';
import caboMysteriesTheme from './assets/style/caboMysteriesTheme';
import favico from './assets/images/favico.svg'
import Favicon from 'react-favicon';

function App() {
  const [target, setTarget] = useState("main");

  return (
        <ThemeProvider theme={caboMysteriesTheme}>
        <div className="App">
        <Favicon url={favico} />
        <AppBar
            sx={{
                borderRadius: 2,
            }}
            position="static"
            color="primary"
        >
            <Container maxWidth="xl">
                <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={favico} width={36} height={36} onClick={() => setTarget("main")}/>
                    </Box>
                    <div style={{margin:12}} onClick={() => setTarget("main")}/>
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                        onClick={() => setTarget("main")}
                    >
                        BIT
                    </Typography>
                    <Stack spacing={2} direction="row">
                        {/* <Button variant="text" sx={{color:'#fff'}} onClick={() => setTarget("mysteries")}>BIT Mysteries</Button> */}
                        <Button variant="text" sx={{color:'#fff'}} onClick={() => setTarget("games")}>Games</Button>
                        <Button variant="text" sx={{color:'#fff'}} onClick={() => setTarget("blog")}>Blog</Button>
                        <Button variant="text" sx={{color:'#fff'}} onClick={() => setTarget("about")}>About Us</Button>
                        <Button variant="text" sx={{color:'#fff'}} onClick={() => setTarget("contact")}>Contact Us</Button>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
        {(target==="main")?<Main />:<></>}
        {(target==="games")?<Games />:<></>}
        {(target==="blog")?<Blog />:<></>}
        {(target==="mysteries")?<Mysteries />:<></>}
        {(target==="about")?<About />:<></>}
        {(target==="contact")?<Contact />:<></>}
    </div>
    </ThemeProvider>
  );
}

export default App;