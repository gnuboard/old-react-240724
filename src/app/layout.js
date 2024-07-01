'use client';

import './globals.css';
import theme from './theme';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}