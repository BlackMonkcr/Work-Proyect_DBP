import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/App";

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme =createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#5271FF',
        },
        secondary: {
            main: '#fffcf2',
        },

        typography: {
            fontFamily:'Montserrat, sans-serif',
            h3: {
                fontSize: '24px', // Cambia el tamaño de fuente para encabezados h3
            },
        },
    },
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
        <ThemeProvider theme={theme}> 
            <CssBaseline />
        </ThemeProvider>
    </React.StrictMode>,
);