'use client';

import * as React from 'react';
import './globals.css';
import theme from './theme';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import Header from './components/header';
import Footer from './components/footer';
import MobileMenu from './components/mobileMenu';

import { categories } from './data/dummyData';

export default function RootLayout({ children }) {

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <html lang="en">
      <head />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <body>
          <Header />
            {children}
          <Footer />
          <MobileMenu drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} categories={categories} />
        </body>
      </ThemeProvider>
    </html>
  );
}