import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Container, Grid, Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';
import './About.scss';

const SkillCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '16px',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-5px)',
    background: 'rgba(255, 255, 255, 0.05)',
    boxShadow: `0 10px 30px ${theme.palette.primary.main}25`,
    '& .skill-icon': {
      color: theme.palette.primary.main,
      transform: 'scale(1.1)',
    },
    '& .skill-name': {
      background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }
  }
}));

const AboutCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '16px',
  height: '100%',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    background: 'rgba(255, 255, 255, 0.05)',
    boxShadow: `0 10px 30px ${theme.palette.primary.main}25`,
  }
}));

const About = () => {
  const skills = [
    { name: 'C & C#', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png', level: 'İleri Seviye' },
    { name: 'OOP', icon: 'https://cdn-icons-png.flaticon.com/512/1011/1011321.png', level: 'İleri Seviye' },
    { name: 'HTML', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg', level: 'İleri Seviye' },
    { name: 'CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg', level: 'İleri Seviye' },
    { name: 'JavaScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', level: 'Orta Seviye' },
    { name: 'React', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', level: 'Orta Seviye' },
    { name: 'MS-SQL', icon: 'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg', level: 'Orta Seviye' },
    { name: 'Git & GitHub', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg', level: 'Orta Seviye' },
    { name: '.NET & .NET Core', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg', level: 'İleri Seviye' }
  ];

  return (
    <section className="about">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box mb={8}>
            <Typography variant="h2" component="h1" gutterBottom className="section-title">
              Ben Kimim?
            </Typography>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <AboutCard>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <PersonIcon color="primary" sx={{ fontSize: 40 }} />
                  <Typography variant="h5" color="primary">
                    Merhaba!
                  </Typography>
                </Box>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                  Yazılım dünyasına olan tutkum ve analitik düşünce yapım, beni Full Stack Web Development 
                  alanında sürekli gelişmeye yönlendiriyor. Modern web teknolojileri ve yazılım mimarileri 
                  konusundaki derin ilgim, her projede yenilikçi çözümler üretmemi sağlıyor. Erzurum Teknik 
                  Üniversitesi Bilgisayar Mühendisliği bölümü son sınıf öğrencisi olarak, edindiğim teorik 
                  altyapıyı pratik uygulamalarla birleştirerek kapsamlı web çözümleri geliştiriyorum.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  Yazılım geliştirme süreçlerinde clean code prensiplerini benimsiyor, SOLID prensiplerine 
                  uygun, sürdürülebilir ve ölçeklenebilir uygulamalar tasarlıyorum. Frontend'de React.js 
                  ekosistemi, backend'de .NET Core framework'ü ile modern web uygulamaları geliştirirken, 
                  veritabanı yönetimi ve sistem mimarisi konularında da etkin çözümler üretiyorum. 
                  Version control sistemleri ve CI/CD süreçleriyle profesyonel iş akışlarını destekliyorum.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 2 }}>
                  Teknoloji ve yazılım alanındaki güncel gelişmeleri yakından takip ediyor, sürekli öğrenme 
                  ve gelişim odaklı bir yaklaşım benimsiyorum. Güçlü problem çözme yeteneklerim, 
                  yenilikçi bakış açım ve ekip çalışmasına yatkın yapımla, projelerde etkin sonuçlar 
                  elde ediyorum. Yazılım geliştirme topluluklarıyla etkileşim halinde kalarak, 
                  sektördeki en iyi uygulamaları ve yeni teknolojileri projelerime entegre ediyorum.
                </Typography>
              </AboutCard>
            </motion.div>
          </Box>

          <Box>
            <Typography variant="h2" component="h2" gutterBottom className="section-title">
              Yeteneklerim
            </Typography>
            <Grid container spacing={3}>
              {skills.map((skill, index) => (
                <Grid item xs={12} sm={6} md={4} key={skill.name}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <SkillCard>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <motion.img
                          src={skill.icon}
                          alt={skill.name}
                          className="skill-icon"
                          style={{ width: 40, height: 40 }}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.8 }}
                        />
                        <Box>
                          <Typography variant="h6" className="skill-name">
                            {skill.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {skill.level}
                          </Typography>
                        </Box>
                      </Box>
                    </SkillCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </section>
  );
};

export default About; 