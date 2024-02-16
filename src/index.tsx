import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@emotion/react';

import { OpenDrawerContext } from './context/OpenDrawerContext';
import Router from './router';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../src/components/Footer';
import DrawerComponent from '../src/components/Drawer';
import AppBarComponent from '../src/components/AppBar';
import { theme } from './styles/theme';
import './styles/global.module.css';
import { AuthContextProvider } from 'context/AuthContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const App = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <React.StrictMode>
      <AuthContextProvider>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Box sx={{ display: 'flex' }}>
              <OpenDrawerContext.Provider value={{ open, setOpen }}>
                <AppBarComponent />
                <DrawerComponent />
              </OpenDrawerContext.Provider>
              <Box
                component="main"
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                      ? theme.palette.grey[100]
                      : theme.palette.grey[900],
                  flexGrow: 1,
                  height: '100vh',
                  overflow: 'auto',
                }}
              >
                {/* Use a Toolbar component to adjust spacing */}
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                  <Router />
                  <Footer />
                </Container>
              </Box>
            </Box>
          </BrowserRouter>
        </ThemeProvider>
      </AuthContextProvider>
    </React.StrictMode>
  );
};

root.render(<App />);
