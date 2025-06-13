import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Chip,
  IconButton,
  Checkbox,
  Divider,
  Button,
  Card,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  TextField,
} from '@mui/material';
import {
  Clock,
  ArrowLeft,
  ThumbsUp,
  CheckCircle,
  Circle,
  Share2,
  Send,
} from 'lucide-react';
import './RecipeDetail.css';
import CommentSection from './CommentSection';

function RecipeDetail({ recipes }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState('');

  useEffect(() => {
    const foundRecipe = recipes.find(r => r._id === id);
    if (foundRecipe) {
      setRecipe(foundRecipe);
      // Initialize completed steps from localStorage if available
      const savedSteps = localStorage.getItem(`recipe-${id}-steps`);
      if (savedSteps) {
        setCompletedSteps(JSON.parse(savedSteps));
      }
      // Initialize liked state from localStorage if available
      const savedLiked = localStorage.getItem(`recipe-${id}-liked`);
      if (savedLiked) {
        setLiked(JSON.parse(savedLiked));
      }
      // Initialize comments from localStorage if available
      const savedComments = localStorage.getItem(`recipe-${id}-comments`);
      if (savedComments) {
        setComments(JSON.parse(savedComments));
      }
    }
  }, [id, recipes]);

  const handleStepToggle = (stepIndex) => {
    setCompletedSteps(prev => {
      const newSteps = prev.includes(stepIndex)
        ? prev.filter(i => i !== stepIndex)
        : [...prev, stepIndex];
      // Save to localStorage
      localStorage.setItem(`recipe-${id}-steps`, JSON.stringify(newSteps));
      return newSteps;
    });
  };

  const handleLikeToggle = () => {
    setLiked(prev => {
      const newLiked = !prev;
      // Save to localStorage
      localStorage.setItem(`recipe-${id}-liked`, JSON.stringify(newLiked));
      return newLiked;
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: recipe.name,
        text: `Check out this recipe: ${recipe.name}`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href);
      // You could add a snackbar/toast notification here
    }
  };

  const handleAddComment = () => {
    if (newCommentText.trim() === '') return;

    const comment = {
      id: Date.now(),
      author: 'Anonymous User', // Default author for now
      text: newCommentText.trim(),
      date: new Date().toLocaleString(),
    };

    setComments(prev => {
      const newComments = [...prev, comment];
      localStorage.setItem(`recipe-${id}-comments`, JSON.stringify(newComments));
      return newComments;
    });

    setNewCommentText('');
  };

  if (!recipe) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h5" sx={{ textAlign: 'center', color: '#666' }}>
          Recipe not found
        </Typography>
      </Container>
    );
  }

  return (
    <Box sx={{ bgcolor: '#F5F0E1', minHeight: '100vh', pt: { xs: 8, md: 10 }, pb: 8 }}>
      <Container maxWidth="lg">
        <Button
          startIcon={<ArrowLeft size={20} />}
          onClick={() => navigate(-1)}
          sx={{
            color: '#2D5016',
            mb: 3,
            '&:hover': {
              bgcolor: 'rgba(45, 80, 22, 0.1)',
            },
          }}
        >
          Back to Recipes
        </Button>

        <Grid container spacing={4}>
          {/* Recipe Image and Basic Info */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                height: '100%',
              }}
            >
              <CardMedia
                component="img"
                image={recipe.image}
                alt={recipe.name}
                sx={{ height: 400, objectFit: 'cover' }}
              />
            </Card>
          </Grid>

          {/* Recipe Details */}
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Typography variant="h4" sx={{ color: '#2D5016', fontWeight: 700 }}>
                  {recipe.name}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Tooltip title={liked ? "Unlike recipe" : "Like recipe"}>
                    <IconButton
                      onClick={handleLikeToggle}
                      sx={{
                        color: liked ? '#2196F3' : '#666',
                        '&:hover': {
                          bgcolor: 'rgba(33, 150, 243, 0.1)',
                        },
                      }}
                    >
                      <ThumbsUp
                        size={24}
                        fill={liked ? '#2196F3' : 'none'}
                      />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Share recipe">
                    <IconButton
                      onClick={handleShare}
                      sx={{
                        color: '#666',
                        '&:hover': {
                          bgcolor: 'rgba(45, 80, 22, 0.1)',
                        },
                      }}
                    >
                      <Share2 size={24} />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                <Chip
                  icon={<Clock size={16} />}
                  label={recipe.time}
                  sx={{
                    bgcolor: 'rgba(45, 80, 22, 0.1)',
                    color: '#2D5016',
                    '& .MuiChip-icon': { color: '#2D5016' },
                  }}
                />
                <Chip
                  label={recipe.difficulty}
                  sx={{
                    bgcolor: recipe.difficulty === 'Easy' ? '#4CAF50' :
                           recipe.difficulty === 'Medium' ? '#FF9800' : '#F44336',
                    color: 'white',
                    fontWeight: 600,
                  }}
                />
              </Box>

              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(45, 80, 22, 0.8)',
                  lineHeight: 1.6,
                  mb: 4,
                }}
              >
                {recipe.description}
              </Typography>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" sx={{ color: '#2D5016', fontWeight: 600, mb: 2 }}>
                Steps to Follow
              </Typography>

              <List sx={{ width: '100%' }}>
                {recipe.steps.map((step, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      bgcolor: 'white',
                      borderRadius: 2,
                      mb: 1,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateX(8px)',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                      },
                    }}
                  >
                    <ListItemIcon>
                      <Checkbox
                        checked={completedSteps.includes(index)}
                        onChange={() => handleStepToggle(index)}
                        icon={<Circle size={24} color="#666" />}
                        checkedIcon={<CheckCircle size={24} color="#4CAF50" fill="#4CAF50" />}
                        sx={{
                          '&:hover': {
                            bgcolor: 'rgba(76, 175, 80, 0.1)',
                          },
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          sx={{
                            color: completedSteps.includes(index) ? '#4CAF50' : '#2D5016',
                            textDecoration: completedSteps.includes(index) ? 'line-through' : 'none',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {step}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>

        {/* Comments Section */}
        {recipe && <CommentSection recipeId={recipe._id} />}
      </Container>
    </Box>
  );
}

export default RecipeDetail; 