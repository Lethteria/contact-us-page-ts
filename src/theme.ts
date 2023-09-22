import PoppinsBoldWoff2 from  '../src/assets/fonts/Poppins-Bold.woff2';
import PoppinsBoldWoff from  '../src/assets/fonts/Poppins-Bold.woff';
import PoppinsSemiBoldWoff2 from  '../src/assets/fonts/Poppins-SemiBold.woff2';
import PoppinsSemiBoldWoff from  '../src/assets/fonts/Poppins-SemiBold.woff';
import PoppinsRegularWoff2 from  '../src/assets/fonts/Poppins-Regular.woff2';
import PoppinsRegularWoff from  '../src/assets/fonts/Poppins-Regular.woff';
import PoppinsMediumWoff2 from  '../src/assets/fonts/Poppins-Medium.woff2';
import PoppinsMediumWoff from  '../src/assets/fonts/Poppins-Medium.woff';

import {createTheme} from "@mui/material/styles";

declare module '@mui/material/styles' {
    interface Palette {
        greyColor: Palette['primary']
    }

    interface PaletteOptions {
        greyColor?: PaletteOptions['primary'];
    }

    interface PaletteColor {
        backgroundColor?: string;
        wight?: string;
    }

    interface SimplePaletteColorOptions {
        backgroundColor?: string;
        wight?: string;
    }
}

declare module '@mui/material/TextField' {
    interface TextFieldPropsColorOverrides {
        greyColor: true;
    }
}

const theme = createTheme({
    palette: {
        greyColor: {
            main: '#8d8d8d',
            light: '#c9c9c9',
            dark: '#000',
            backgroundColor: '#fbfbfb',
            wight: '#fff'
        },
    },
    typography: {
        fontFamily: ['Poppins, Roboto, "Helvetica Neue", sans-serif'
        ].join(','),
        h1: {
            fontSize: '1.5rem',
            fontWeight: 700,
            '@media (min-width:600px)': {
                fontSize: '2.5rem',
            }
        },
        h2: {
            fontSize: '2.25rem',
            fontWeight: 700
        },
        h3: {
            fontSize: '1.25rem',
            fontWeight: 600,
            '@media (min-width:600px)': {
                fontSize: '1.75rem',
            }
        },
        h4: {
            fontSize: '1rem',
            fontWeight: 600,
            '@media (min-width:600px)': {
                fontSize: '1.125rem',
            },
        },

    },

    components: {
        MuiCssBaseline: {
            styleOverrides: `
             a {
                text-decoration: none;
            } 
            @font-face {
              font-family: 'Poppins';
              src: url(${PoppinsRegularWoff2}) format('woff2'),
                   url(${PoppinsRegularWoff}) format('woff');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }
            @font-face {
              font-family: 'Poppins';
              src: url(${PoppinsMediumWoff2}) format('woff2'),
                   url(${PoppinsMediumWoff}) format('woff');
              font-weight: 500;
              font-style: normal;
              font-display: swap;
            }
            @font-face {
              font-family: 'Poppins';
              src: url(${PoppinsSemiBoldWoff2}) format('woff2'),
                   url(${PoppinsSemiBoldWoff}) format('woff');
              font-weight: 600;
              font-style: normal;
              font-display: swap;
            }    
            @font-face {
              font-family: 'Poppins';
              src: url(${PoppinsBoldWoff2}) format('woff2'),
                   url(${PoppinsBoldWoff}) format('woff');
              font-weight: 700;
              font-style: normal;
              font-display: swap;
            }
        `,
        },
    },
});


export {theme}