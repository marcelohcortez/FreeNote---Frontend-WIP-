import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';

import { theme } from './styles/theme';
import Router from './router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './styles/global.module.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <Navbar />
      <Router />
      <Footer />
    </MantineProvider>
  </React.StrictMode>,
);
