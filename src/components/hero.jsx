import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { PlayCircle, Star, Users, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #2D5016 0%, #1a2f0c 100%)',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 8, md: 12 }
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center" sx={{ minHeight: '80vh' }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                  fontWeight: 800,
                  color: 'white',
                  lineHeight: 1.2,
                  mb: 3
                }}
              >
                Your Culinary Journey
                <Box component="span" sx={{ color: '#FF6B35', display: 'block' }}>
                  Starts Here
                </Box>
              </Typography>
              
              <Typography
                variant="h5"
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: 400,
                  lineHeight: 1.6,
                  mb: 4,
                  maxWidth: '500px'
                }}
              >
                Discover, save, and share amazing recipes from around the world. 
                Turn your kitchen into a playground of flavors.
              </Typography>

              <Box sx={{ display: 'flex', gap: 3, mb: 6, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: '#FF6B35',
                    color: 'white',
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    borderRadius: 3,
                    '&:hover': {
                      bgcolor: '#E55A2B',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 12px 30px rgba(255, 107, 53, 0.4)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Start Cooking
                </Button>
                
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<PlayCircle size={20} />}
                  sx={{
                    color: 'white',
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    borderRadius: 3,
                    '&:hover': {
                      borderColor: '#FF6B35',
                      color: '#FF6B35',
                      bgcolor: 'rgba(255, 107, 53, 0.1)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Watch Demo
                </Button>
              </Box>

              <Box sx={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {[
                  { icon: BookOpen, value: '10K+', label: 'Recipes' },
                  { icon: Users, value: '50K+', label: 'Cooks' },
                  { icon: Star, value: '4.9', label: 'Rating' }
                ].map((stat, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <stat.icon size={24} color="#FF6B35" />
                    <Box>
                      <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, lineHeight: 1 }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        {stat.label}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -20,
                  left: -20,
                  right: 20,
                  bottom: 20,
                  bgcolor: '#FF6B35',
                  borderRadius: 4,
                  opacity: 0.2,
                  zIndex: -1
                }
              }}
            >
              <Box
                component="img"
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Delicious food"
                sx={{
                  width: '100%',
                  height: { xs: '300px', md: '500px' },
                  objectFit: 'cover',
                  borderRadius: 4,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;