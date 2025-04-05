import React, { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import { styled } from '@mui/material/styles';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const StyledFab = styled(Fab)(({ theme, $show }) => ({
  position: 'fixed',
  bottom: '2rem',
  right: '2rem',
  opacity: $show ? 1 : 0,
  visibility: $show ? 'visible' : 'hidden',
  transition: 'all 0.3s ease',
  background: theme.palette.primary.main,
  '&:hover': {
    background: theme.palette.primary.dark,
  }
}));

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const headerVisible = currentScrollPos < 100;
      setShow(currentScrollPos > 300 && !headerVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <StyledFab 
      color="primary" 
      $show={show}
      onClick={handleClick}
      aria-label="scroll to top"
      size="medium"
    >
      <KeyboardArrowUpIcon />
    </StyledFab>
  );
};

export default ScrollToTop; 