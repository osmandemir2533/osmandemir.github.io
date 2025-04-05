import React, { useState, useEffect } from 'react';
import { AppBar, Container, Box, Button, IconButton, Drawer, List, ListItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const StyledAppBar = styled(AppBar)(({ theme, $visible }) => ({
  background: 'rgba(10, 10, 11, 0.8)',
  backdropFilter: 'blur(10px)',
  transition: 'transform 0.3s ease',
  transform: $visible ? 'translateY(0)' : 'translateY(-100%)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: 'none',
}));

const NavButton = styled(Button)(({ theme, active }) => ({
  color: active ? theme.palette.primary.main : theme.palette.text.primary,
  margin: theme.spacing(0, 1),
  '&:hover': {
    color: theme.palette.primary.main,
    background: 'rgba(0, 245, 212, 0.1)',
  },
  ...(active && {
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '5px',
      height: '5px',
      borderRadius: '50%',
      backgroundColor: theme.palette.primary.main,
      boxShadow: '0 0 10px rgba(0, 245, 212, 0.5)',
    },
  }),
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontFamily: 'Fira Code, monospace',
  fontSize: '1.5rem',
  fontWeight: 500,
  color: theme.palette.primary.main,
  '&::before': {
    content: '"<"',
    marginRight: '4px',
    opacity: 0.7,
  },
  '&::after': {
    content: '"/>"',
    marginLeft: '4px',
    opacity: 0.7,
  },
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.secondary.main,
    transform: 'translateY(-2px)',
  }
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '100%',
    background: 'rgba(10, 10, 11, 0.95)',
    backdropFilter: 'blur(20px)',
    padding: '2rem',
  },
  '& .MuiListItem-root': {
    padding: '1rem 0',
  },
  '& .MuiButton-root': {
    fontSize: '1.2rem',
    justifyContent: 'center',
  }
}));

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  const navItems = [
    { title: 'Ana Sayfa', path: '/' },
    { title: 'Hakkımda', path: '/about' },
    { title: 'Deneyim', path: '/experience' },
    { title: 'İletişim', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <StyledAppBar position="fixed" $visible={visible}>
      <Container>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          py: 2 
        }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo variant="h6">
              osman demir
            </Logo>
          </Link>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => (
              <NavButton
                key={item.path}
                component={Link}
                to={item.path}
                active={location.pathname === item.path ? 1 : 0}
              >
                {item.title}
              </NavButton>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Container>

      {/* Mobile Navigation Drawer */}
      <StyledDrawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem key={item.path}>
              <NavButton
                fullWidth
                component={Link}
                to={item.path}
                active={location.pathname === item.path ? 1 : 0}
                onClick={handleDrawerToggle}
              >
                {item.title}
              </NavButton>
            </ListItem>
          ))}
        </List>
      </StyledDrawer>
    </StyledAppBar>
  );
};

export default Header; 