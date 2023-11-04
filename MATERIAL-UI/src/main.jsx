import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import './index.css'
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> 
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
