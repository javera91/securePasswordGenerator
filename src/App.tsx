// src/App.tsx
import React from 'react';
import './App.css'; // Asegúrate de importar el CSS
import Home from './pages/home';
import { ThemeProvider, createTheme } from '@mui/material';

const App: React.FC = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#1976d2',
            },
            secondary: {
                main: '#f50057',
            },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    );
};

export default App;