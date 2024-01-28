import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router';
import { MantineProvider } from '@mantine/core';

import { theme } from './styles/theme';
import './styles/global.module.css';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  </React.StrictMode>
);