import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { Button, Stack, ThemeProvider, Typography } from '@mui/material';
import Main from './sections/main';
import { useState } from 'react';
import Games from './sections/games';
import About from './sections/about';
import Mysteries from './sections/mysteries';
import Blog from './sections/blog';
import Contact from './sections/contact';
import theme from './assets/style/theme';
import favico from './assets/images/favico.svg'
import Favicon from 'react-favicon';

function App() {
  const [target, setTarget] = useState("main");
  return (
        <ThemeProvider theme={theme}>
        <div className="App">
        <Favicon url={favico} />
        <AppBar position="static" color="primary">
            <Container maxWidth="xl">
                <Toolbar >
                    <img src={favico} width={24} height={24} onClick={() => setTarget("main")}/>
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
                        {/* <Button variant="text" sx={{color:'#fff'}} onClick={() => setTarget("mysteries")}>Bit Mysteries</Button> */}
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