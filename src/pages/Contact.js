import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Typography, Container, Grid, TextField, Button, Box, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Contact.scss';
import { Link } from '@mui/material';

const StyledForm = styled('form')(({ theme }) => ({
  width: '100%',
  '& .MuiTextField-root': {
    marginBottom: theme.spacing(2),
  }
}));

const SocialLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '2rem'
}));

const SocialIcon = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
    transform: 'translateY(-5px) scale(1.1)',
  }
}));

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [error, setError] = useState(null);  // Error state for handling submission errors

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error before submitting

    try {
      const response = await fetch('https://osmandemirwebsiteemailpost.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);  // Set submitted to true on successful form submission
        setFormData({ name: '', email: '', message: '' });  // Reset form fields after successful submission
      } else {
        setError(data.message || 'Bir hata oluştu!'); // Set error message if response is not OK
      }
    } catch (error) {
      console.error('Mesaj gönderme hatası:', error);
      setError('Mesaj gönderilirken bir hata oluştu!');  // Show error if fetch request fails
    }
  };

  return (
    <section className="contact" style={{ paddingTop: '2rem' }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h2" component="h1" gutterBottom>
                İletişime Geç
              </Typography>
              <Typography variant="body1" paragraph>
                Benimle iletişime geçmek için aşağıdaki formu doldurabilirsiniz.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={7}>
            <StyledForm onSubmit={handleSubmit}>
              <TextField
                fullWidth
                required
                label="İsim"
                name="name"
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                required
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                required
                label="Mesaj"
                name="message"
                multiline
                rows={4}
                variant="outlined"
                value={formData.message}
                onChange={handleChange}
              />
              <Box sx={{ mt: 2 }}>
                <Button 
                  type="submit" 
                  variant="contained" 
                  color="primary" 
                  size="large"
                >
                  Gönder
                </Button>
              </Box>
            </StyledForm>

            {submitted && (
              <Alert 
                severity="success" 
                sx={{ 
                  mt: 2, 
                  fontSize: '1.2rem', 
                  fontWeight: 'bold', 
                  padding: '15px', 
                  textAlign: 'center' 
                }}
              >
                Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.
              </Alert>
            )}

            {error && (
              <Alert 
                severity="error" 
                sx={{ 
                  mt: 2, 
                  fontSize: '1.2rem', 
                  fontWeight: 'bold', 
                  padding: '15px', 
                  textAlign: 'center' 
                }}
              >
                {error}
              </Alert>
            )}
          </Grid>

          <Grid item xs={12} md={5}>
            <SocialLinks>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <SocialIcon 
                  href="https://www.linkedin.com/in/osmandemir2533/" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon sx={{ fontSize: 87 }} className="social-icon" />
                </SocialIcon>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <SocialIcon 
                  href="https://github.com/osmandemir2533" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon sx={{ fontSize: 75 }} className="social-icon" />
                </SocialIcon>
              </motion.div>
            </SocialLinks>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Contact;
