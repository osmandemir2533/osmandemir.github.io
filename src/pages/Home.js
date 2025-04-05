import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Typography, Container, Box, Grid, Tooltip, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import './Home.scss';

const StyledContainer = styled(Container)(({ theme }) => ({
  height: '90vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  zIndex: 1,
  marginTop: '-80px'
}));

const TechStack = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '2rem',
  justifyContent: 'center',
  marginTop: '2rem',
  flexWrap: 'wrap',
  '& img': {
    height: '50px',
    width: '50px',
    padding: '8px',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '12px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      background: 'rgba(255, 255, 255, 0.1)',
      boxShadow: `0 0 20px ${theme.palette.primary.main}25`,
    }
  }
}));

const ContentSection = styled(Box)(({ theme, align }) => ({
  padding: theme.spacing(8, 0),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  textAlign: align === 'right' ? 'right' : 'left',
  zIndex: 1
}));

const Home = () => {
  const technologies = [
    { name: 'C#', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png' },
    { name: 'HTML', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
    { name: 'CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
    { name: 'JavaScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { name: 'React', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: '.NET Core', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg' },
    { name: 'MS-SQL', icon: 'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg' },
    { name: 'Git', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg' }
  ];

  return (
    <>
    
      <section className="hero" style={{ minHeight: '60vh' }}>
        <StyledContainer>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography 
                  variant="h1" 
                  className="hero__title"
                  sx={{ 
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    fontWeight: 700,
                    mb: 2
                  }}
                >
                  <span className="highlight">Osman Demir</span>
                </Typography>
                <Typography 
                  variant="h2" 
                  className="hero__subtitle"
                  sx={{ 
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    color: 'text.secondary',
                    mb: 3
                  }}
                >
                  Full Stack Web Developer
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.8, fontSize: '1.1rem' }}>
                  Full Stack Web Developer olarak, modern web teknolojilerini kullanarak kapsamlı dijital çözümler 
                  üretiyorum. Frontend'den backend'e, veritabanı yönetiminden API entegrasyonlarına kadar geniş bir 
                  yelpazede hizmet sunuyorum. Kullanıcı deneyimini merkeze alan, ölçeklenebilir ve performans odaklı 
                  web uygulamaları geliştiriyorum.
                </Typography>

                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Link to="/contact" className="btn btn-primary">
                    Benimle İletişime Geç
                  </Link>
                  <a
                    href="https://github.com/osmandemir2533"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    Projelerimi İncele
                  </a>
                </Box>

                <TechStack>
                  {technologies.map((tech, index) => (
                    <Tooltip key={tech.name} title={tech.name} arrow placement="top">
                      <motion.img
                        src={tech.icon}
                        alt={tech.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      />
                    </Tooltip>
                  ))}
                </TechStack>
              </motion.div>
            </Grid>
          </Grid>
        </StyledContainer>
      </section>

      <ContentSection className="content-section yazilim-tutkusu">
        <Container>
          <Grid container spacing={4} justifyContent="flex-end">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Typography variant="h3" gutterBottom color="primary">
                  Yazılım Geliştirme Tutkusu
                </Typography>
                <Typography variant="body1" paragraph>
                  Modern web teknolojileri kullanarak, işlevsel ve estetik web uygulamaları geliştiriyorum. 
                  React tabanlı dinamik kullanıcı arayüzleri, RESTful API entegrasyonları ve veritabanı 
                  yönetimi konularında uzmanlaşıyorum. Clean code prensipleriyle, sürdürülebilir ve 
                  ölçeklenebilir çözümler üretiyorum.
                </Typography>
                <Typography variant="body1">
                  Her projeye özgün bir yaklaşımla, en güncel teknolojileri ve best practice'leri 
                  uygulayarak kaliteli sonuçlar elde ediyorum.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </ContentSection>

      <ContentSection className="content-section cozum-odakli">
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Typography variant="h3" gutterBottom color="primary">
                  Çözüm Odaklı Yaklaşım
                </Typography>
                <Typography variant="body1" paragraph>
                  Frontend'de React.js ile modern ve responsive tasarımlar oluştururken, backend'de .NET Core 
                  ile güvenli ve performanslı API'lar geliştiriyorum. MS-SQL veritabanı yönetimi ve Git 
                  versiyon kontrol sistemleri ile projelerimi profesyonel standartlarda yönetiyorum.
                </Typography>
                <Typography variant="body1">
                  Test-driven development ve agile metodolojiler ile projelerin kalitesini ve 
                  sürdürülebilirliğini garanti altına alıyorum.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </ContentSection>

      <ContentSection className="content-section surekli-gelisim">
        <Container>
          <Grid container spacing={4} justifyContent="flex-end">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Typography variant="h3" gutterBottom color="primary">
                  Sürekli Gelişim
                </Typography>
                <Typography variant="body1" paragraph>
                  Yazılım ekosistemindeki güncel teknolojileri ve trendleri yakından takip ediyor, 
                  sürekli kendimi geliştiriyorum. Microservices mimarisi, containerization ve cloud 
                  teknolojileri gibi modern yaklaşımları projelerime entegre ediyorum.
                </Typography>
                <Typography variant="body1">
                  Code review süreçleri ve pair programming pratikleriyle, kod kalitesini ve 
                  ekip içi bilgi paylaşımını destekliyorum.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </ContentSection>
    </>
  );
};

export default Home; 