import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#5271FF',
        },
        secondary: {
            main: '#fffcf2',
        },

        typography: {
            fontFamily: 'Poppins, sans-serif',
            h3: {
                fontSize: '24px', // Cambia el tamaño de fuente para encabezados h3
            },
        },
    },
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <App/>
        <ThemeProvider theme={theme}> 
            <CssBaseline />
        </ThemeProvider>
    </>,
);