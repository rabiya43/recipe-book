import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import heroImage from '../assets/images/hero-image.jpg';
import Features from '../components/Features';

// Styled Hero Section
const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  background: 'linear-gradient(135deg, #2D5016 0%, #1A2F0D 100%)',
  color: 'white',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(4),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
    pointerEvents: 'none'
  }
}));

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ overflow: 'hidden' }}>
      <HeroSection>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography 
                  variant="h1" 
                  gutterBottom 
                  sx={{ 
                    color: 'white',
                    fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                    fontWeight: 800,
                    lineHeight: 1.2,
                    mb: 3
                  }}
                >
                  Your Culinary Journey <br />
                  <Box component="span" sx={{ color: '#FF6B35' }}>Starts Here</Box>
                </Typography>
                <Typography 
                  variant="h5" 
                  paragraph 
                  sx={{ 
                    color: 'white', 
                    opacity: 0.9, 
                    maxWidth: '450px',
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    lineHeight: 1.6,
                    mb: 4
                  }}
                >
                  Discover, save, and share amazing recipes from around the world. Turn your kitchen into a playground of flavors.
                </Typography>
                <Box sx={{ mt: 4, display: 'flex', gap: 2, alignItems: 'center' }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={() => navigate('/recipes')}
                    sx={{ 
                      px: 4, 
                      py: 1.5, 
                      fontWeight: 600,
                      bgcolor: '#FF6B35',
                      '&:hover': {
                        bgcolor: '#FF5722'
                      }
                    }}
                  >
                    Start Cooking
                  </Button>
                </Box>

                <Grid container spacing={3} sx={{ mt: 6, color: 'white' }}>
                  <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <BookOutlinedIcon sx={{ fontSize: 24, color: '#FF6B35' }} />
                    <Box>
                      <Typography variant="h4" sx={{ fontWeight: 700, fontSize: { xs: '1.5rem', md: '2rem' } }}>10K+</Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>Recipes</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <GroupOutlinedIcon sx={{ fontSize: 24, color: '#FF6B35' }} />
                    <Box>
                      <Typography variant="h4" sx={{ fontWeight: 700, fontSize: { xs: '1.5rem', md: '2rem' } }}>50K+</Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>Cooks</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <StarOutlinedIcon sx={{ fontSize: 24, color: '#FF6B35' }} />
                    <Box>
                      <Typography variant="h4" sx={{ fontWeight: 700, fontSize: { xs: '1.5rem', md: '2rem' } }}>4.9</Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>Rating</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
          </Grid>

          {/* Image absolutely positioned on the right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              position: 'absolute',
              top: '50%',
              right: '5%',
              transform: 'translateY(-50%)',
              zIndex: 1,
              width: '45%',
              maxWidth: 600,
              display: { xs: 'none', md: 'block' }
            }}
          >
            <Box
              component="img"
              src={heroImage}
              alt="Cooking Ingredients"
              sx={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: 4,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                transform: 'perspective(1000px) rotateY(-5deg)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'perspective(1000px) rotateY(0deg)'
                }
              }}
            />
          </motion.div>
        </Container>
      </HeroSection>

      {/* Features Section */}
      <Features />
    </Box>
  );
};

export default LandingPage;
