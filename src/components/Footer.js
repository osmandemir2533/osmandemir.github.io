import React from 'react';
import { Box, Container, Typography, IconButton, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const StyledFooter = styled(Box)(({ theme }) => ({
  background: 'rgba(10, 10, 11, 0.8)',
  backdropFilter: 'blur(10px)',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  padding: theme.spacing(4, 0),
  marginTop: 'auto',
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  margin: theme.spacing(0, 1),
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
    transform: 'translateY(-3px)',
  },
}));

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2
        }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Osman Demir. Tüm hakları saklıdır.
          </Typography>
          
          <Box>
            <SocialButton 
              component={Link} 
              href="https://www.linkedin.com/in/osmandemir2533/" 
              target="_blank"
            >
              <LinkedInIcon />
            </SocialButton>
            <SocialButton 
              component={Link} 
              href="https://github.com/osmandemir2533" 
              target="_blank"
            >
              <GitHubIcon />
            </SocialButton>
          </Box>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer; 