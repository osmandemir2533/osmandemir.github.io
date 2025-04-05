import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Container, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import './Experience.scss';

const ExperienceItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '16px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    background: 'rgba(255, 255, 255, 0.05)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  }
}));

const Experience = () => {
  return (
    <section className="experience">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" component="h1" gutterBottom className="section-title">
            Eğitim & Deneyim
          </Typography>

          <Grid container spacing={4}>
            {/* Eğitim Bilgisi */}
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <ExperienceItem>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <SchoolIcon color="primary" sx={{ fontSize: 40 }} />
                    <Box>
                      <Typography variant="h5" gutterBottom color="primary">
                        Erzurum Teknik Üniversitesi
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        Bilgisayar Mühendisliği • 2021 - 2025 (Devam Ediyor)
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body1" color="text.secondary">
                    AGNO: 2.79
                  </Typography>
                </ExperienceItem>
              </motion.div>
            </Grid>

            {/* Staj Deneyimi */}
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <ExperienceItem>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <WorkIcon color="primary" sx={{ fontSize: 40 }} />
                    <Box>
                      <Typography variant="h5" gutterBottom color="primary">
                        12. Bölge Karayolları Genel Müdürlüğü
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        Stajyer • Temmuz - Eylül 2024
                      </Typography>
                    </Box>
                  </Box>
                </ExperienceItem>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </section>
  );
};

export default Experience; 