import { createTheme } from '@mui/material/styles';

// Color Palette from DESIGN_SYSTEM.md
const colors = {
    primary: {
        main: '#1a3d2e', // Dark Green
        light: '#2c5e48',
        dark: '#0f261c',
        contrastText: '#ffffff',
    },
    secondary: {
        main: '#c4941f', // Gold/Amber
        light: '#d4a845',
        dark: '#8f6b16',
        contrastText: '#000000',
    },
    background: {
        default: '#faf8f3', // Cream/Beige
        paper: '#ffffff',
    },
    text: {
        primary: '#1a3d2e', // Dark Green / Very Dark Gray
        secondary: '#4a5568',
    },
    chart: {
        line: '#8b7355',
    },
};

const theme = createTheme({
    palette: {
        primary: colors.primary,
        secondary: colors.secondary,
        background: colors.background,
        text: colors.text,
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '3.5rem', // ~56px
            fontWeight: 700,
            lineHeight: 1.2,
            color: colors.primary.main,
        },
        h2: {
            fontSize: '3.25rem', // ~52px
            fontWeight: 700,
            lineHeight: 1.1,
            color: colors.primary.main,
        },
        h3: {
            fontSize: '2rem', // ~32px
            fontWeight: 700,
            color: colors.primary.main,
        },
        h4: {
            fontSize: '1.5rem', // ~24px
            fontWeight: 600,
            color: colors.text.primary,
        },
        body1: {
            fontSize: '1rem', // 16px
            lineHeight: 1.5,
            color: colors.text.secondary,
        },
        button: {
            textTransform: 'none',
            fontWeight: 500,
        },
    },
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: '12px 24px',
                },
                containedPrimary: {
                    '&:hover': {
                        backgroundColor: '#2c5e48', // Slightly lighter/different on hover
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                },
            },
        },
    },
});

export default theme;
