import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import { Search, Heart, Share2, Timer, Star, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Search,
      title: 'Smart Recipe Search',
      description: 'Find the perfect recipe by ingredients, dietary preferences, or cooking time. Our AI-powered search makes discovery effortless.',
      color: '#FF6B35'
    },
    {
      icon: Heart,
      title: 'Save Your Favorites',
      description: 'Create your personal collection of beloved recipes. Never lose track of that perfect dish you want to make again.',
      color: '#E91E63'
    },
    {
      icon: Share2,
      title: 'Share & Connect',
      description: 'Share your culinary creations with friends and family. Build a community around your passion for cooking.',
      color: '#2196F3'
    },
    {
      icon: Timer,
      title: 'Meal Planning',
      description: 'Plan your weekly meals effortlessly. Get organized shopping lists and step-by-step cooking schedules.',
      color: '#9C27B0'
    },
    {
      icon: Star,
      title: 'Rate & Review',
      description: 'Help others discover amazing recipes by sharing your cooking experiences and rating dishes you\'ve tried.',
      color: '#FF9800'
    },
    {
      icon: Users,
      title: 'Chef Community',
      description: 'Connect with fellow food enthusiasts, share tips, and learn from experienced home cooks and professional chefs.',
      color: '#4CAF50'
    }
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#FFF8E7' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
              fontWeight: 800,
              color: '#2D5016',
              mb: 3
            }}
          >
            Everything You Need to
            <Box component="span" sx={{ color: '#FF6B35', display: 'block' }}>
              Master Your Kitchen
            </Box>
          </Typography>
          
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(45, 80, 22, 0.8)',
              fontWeight: 400,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            From discovery to creation, FlavorVault provides all the tools you need 
            to elevate your culinary journey and become the chef you've always wanted to be.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} lg={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  bgcolor: 'white',
                  borderRadius: 3,
                  border: 'none',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)'
                  }
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      bgcolor: `${feature.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3
                    }}
                  >
                    <feature.icon size={36} color={feature.color} />
                  </Box>
                  
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: '#2D5016',
                      mb: 2,
                      fontSize: '1.25rem'
                    }}
                  >
                    {feature.title}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(45, 80, 22, 0.7)',
                      lineHeight: 1.6,
                      fontSize: '0.95rem'
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;