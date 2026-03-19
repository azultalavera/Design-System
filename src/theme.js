import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0B85C4', // El celeste de ClicSalud
    },
    text: {
      primary: '#18181b', // zinc-900
      secondary: '#71717a', // zinc-500
    },
  },
  typography: {
    fontFamily: '"Geist", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h3: {
      fontWeight: 900,
      letterSpacing: '-0.05em',
    },
    overline: {
      fontWeight: 700,
      letterSpacing: '0.2em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          '&:before': { display: 'none' },
          border: '1px solid #f4f4f5',
          boxShadow: 'none',
          marginBottom: '16px',
          borderRadius: '16px !important',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            backgroundColor: '#ffffff',
          },
        },
      },
    },
  },
});