import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            light:  '#d2a47f',
            main: '#f29c45',
            dark: '#895d52',
            contrastText: '#7f778d'
            //--apricot-cream-2: #F9CE9Aff;
        },
        secondary: {
            light:  '#e4dacb',
            main: '#f9ce9a',
            dark: '#727183',
            contrastText: '#edd1b0'
        },
    }
});

export default theme;
//   --color-1: #d2a47f;
//   --color-2: #f29c45;
//   --color-3: #a98375;
//   --color-4: #7f778d;
//   --color-5: #895d52;