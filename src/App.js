import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './theme';
import Header from './components/Header';
import Routes from './Routes';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './assets/styles/_global.scss';

function App() {
  const isProduction = process.env.NODE_ENV === 'production';
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename={isProduction ? "/osmandemir" : "/"}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          minHeight: '100vh',
        }}>
          <Header />
          <Box component="main" sx={{ 
            flexGrow: 1,
            pt: { xs: 8, md: 9 }, // Header için padding
          }}>
            <Routes />
          </Box>
          <Footer />
          <ScrollToTop />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App; 