// theme/caboMysteriesTheme.ts
import { createTheme } from '@mui/material';

const caboTokens = {
  infernoOrange:    '#E8620A',
  solarFlare:       '#F5A825',
  duskGold:         '#F5D06A',
  twilightViolet:   '#4A3080',
  midnightIndigo:   '#2A1D5C',
  deepOcean:        '#1E2A4A',
  horizonCrimson:   '#C03020',
  silhouette:       '#0E1220',
};

const caboMysteriesTheme = createTheme({
  palette: {
    primary: {
      main:         caboTokens.infernoOrange,
      light:        caboTokens.solarFlare,
      dark:         caboTokens.horizonCrimson,
      contrastText: '#FFFFFF',
    },
    secondary: {
      main:         caboTokens.twilightViolet,
      light:        '#7A5AB8',
      dark:         caboTokens.midnightIndigo,
      contrastText: '#FFFFFF',
    },
    warning: {
      main:         caboTokens.duskGold,
      contrastText: caboTokens.silhouette,
    },
    error: {
      main:         caboTokens.horizonCrimson,
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F5F0FA',
      paper:   '#FFFFFF',
    },
    text: {
      primary:   caboTokens.silhouette,
      secondary: caboTokens.twilightViolet,
      disabled:  '#A08ACA',
    },
    divider: 'rgba(74, 48, 128, 0.18)',
  },

  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 600, color: caboTokens.midnightIndigo },
    h2: { fontWeight: 600, color: caboTokens.midnightIndigo },
    h3: { fontWeight: 500, color: caboTokens.midnightIndigo },
    h4: { fontWeight: 500 },
    body1: { color: caboTokens.silhouette },
    body2: { color: caboTokens.twilightViolet },
  },

  shape: { borderRadius: 10 },

  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 500, borderRadius: 8 },
        containedPrimary: {
          background: caboTokens.infernoOrange,
          '&:hover': { background: caboTokens.horizonCrimson },
        },
        containedSecondary: {
          background: caboTokens.twilightViolet,
          '&:hover': { background: caboTokens.midnightIndigo },
        },
        outlined: {
          borderColor: '#A08ACA',
          color: caboTokens.twilightViolet,
          '&:hover': { borderColor: caboTokens.twilightViolet, background: 'rgba(74,48,128,0.06)' },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: 'none',
          border: '0.5px solid rgba(74,48,128,0.18)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: caboTokens.midnightIndigo,
          color: caboTokens.duskGold,
          boxShadow: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 20, fontWeight: 500 },
        colorPrimary: {
          background: '#FEE8D0',
          color: '#7A2A05',
          border: `1px solid ${caboTokens.infernoOrange}`,
        },
        colorSecondary: {
          background: '#EDE5F8',
          color: caboTokens.midnightIndigo,
          border: `1px solid ${caboTokens.twilightViolet}`,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '& .MuiOutlinedInput-notchedOutline': { borderColor: '#A08ACA' },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: caboTokens.twilightViolet },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: caboTokens.infernoOrange },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          background: caboTokens.infernoOrange,
          color: '#FFFFFF',
          boxShadow: 'none',
          '&:hover': { background: caboTokens.horizonCrimson },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: { borderRadius: 4, background: 'rgba(245,208,106,0.2)' },
        bar: { background: caboTokens.infernoOrange },
      },
    },
    MuiAlert: {
      styleOverrides: {
        standardWarning: {
          background: '#FFF3E0',
          color: '#7A2A05',
          '& .MuiAlert-icon': { color: caboTokens.solarFlare },
        },
        standardError: {
          background: '#FCE8E8',
          color: '#7A1010',
          '& .MuiAlert-icon': { color: caboTokens.horizonCrimson },
        },
      },
    },
  },
});

export default caboMysteriesTheme;
