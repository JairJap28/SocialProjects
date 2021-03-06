import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#33a095',
            main: '#00897b',
            dark: '#005f56',
            contrastText: '#FFF'
        },
        secondary: {
            light: '#ffa733',
            main: '#ff9100',
            dark: '#b26500',
            contrastText: '#FFF'
        },
        standard: {
            light: '#909090',
            main: '#757575',
            dark: '#515151'
        },
        error: {
            light: '#e57373',
            main: '#f44336',
            dark: '#d32f2f',
            contrastText: '#FFF'
        },
        warning: {
            light: '#ffb74d',
            main: '#ff9800',
            dark: '#f57c00',
            contrastText: 'rgba(0, 0, 0, 0.87)'
        },
        info: {
            light: '#64b5f6',
            main: '#2196f3',
            dark: '#1976d2',
            contrastText: '#FFF'
        },
        success: {
            light: '#81c784',
            main: '#4caf50',
            dark: '#388e3c',
            contrastText: 'rgba(0, 0, 0, 0.87)'
        },
        character: {
            hair: '#000',
            skin: '#ffe0b2',
            skinDark: '#cbae82',
            shirt: '#000',
            pants: '#00897b',
            pantsUp: '#005f56',
            shoes: '#B72F33',
            glasses: '#212121',
            glassTranslucent: 'rgba(0,0,0, 0.8)',
            eye: '#3e2723',
            mouth: '#FF836F',
            circleOne: '#ffeb3b',
            circleTwo: '#2196f3',
            circleThree: '#f44336'
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 650,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
});

export default theme;