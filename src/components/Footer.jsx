import React from 'react';
import { Box, Typography, Container, Grid, Link, IconButton } from '@mui/material';
import { ChefHat, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    recipes: ['Popular Recipes', 'New Recipes', 'Seasonal', 'Quick Meals', 'Desserts'],
    company: ['About Us', 'Our Story', 'Careers', 'Press', 'Contact'],
    support: ['Help Center', 'Community', 'Privacy Policy', 'Terms of Service', 'Cookie Policy'],
    connect: ['Newsletter', 'Blog', 'Recipe Contest', 'Partner with Us', 'Affiliate Program']
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <Box sx={{ bgcolor: '#2D5016', color: 'white', pt: 8, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
              <ChefHat size={32} color="#FF6B35" />
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                FlavorVault
              </Typography>
            </Box>
            
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                mb: 4,
                lineHeight: 1.6,
                maxWidth: '300px'
              }}
            >
              Your ultimate destination for discovering, saving, and sharing incredible recipes. 
              Join our community of passionate cooks and food lovers.
            </Typography>

            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  href={social.href}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                      color: '#FF6B35',
                      bgcolor: 'rgba(255, 107, 53, 0.1)',
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  <social.icon size={20} />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Links Sections */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              {Object.entries(footerLinks).map(([category, links]) => (
                <Grid item xs={6} sm={3} key={category}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: '#FF6B35',
                      textTransform: 'capitalize',
                      fontSize: '1rem'
                    }}
                  >
                    {category}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {links.map((link) => (
                      <Link
                        key={link}
                        href="#"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          textDecoration: 'none',
                          fontSize: '0.9rem',
                          '&:hover': {
                            color: '#FF6B35',
                            textDecoration: 'underline'
                          },
                          transition: 'color 0.3s ease'
                        }}
                      >
                        {link}
                      </Link>
                    ))}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            mt: 6,
            pt: 4,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.85rem'
            }}
          >
            © 2024 FlavorVault. All rights reserved. Made with ❤️ for food lovers everywhere.
          </Typography>
          
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.85rem'
            }}
          >
            Built with React & Material-UI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;