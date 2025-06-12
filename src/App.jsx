import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { store } from './store/store';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import Features from './components/Features';
import RecipeShowcase from './components/RecipeShowcase';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import MainPage from './components/MainPage/MainPage';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6B35',
    },
    secondary: {
      main: '#2D5016',
    },
    background: {
      default: '#FFF8E7',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

const mockRecipes = [
  {
    _id: '1',
    name: 'Classic Pancakes',
    time: '15 mins',
    description: 'Fluffy pancakes with maple syrup and fresh berries. Perfect for a weekend brunch.',
    image: 'https://images.unsplash.com/photo-1528207776546-365bb10ee283?w=500',
    difficulty: 'Easy',
    likes: 128,
    steps: [
      'In a large bowl, whisk together flour, sugar, baking powder, and salt.',
      'In a separate bowl, whisk together milk, egg, and melted butter.',
      'Pour the wet ingredients into the dry ingredients and stir until just combined. Do not overmix; lumps are okay.',
      'Heat a lightly oiled griddle or frying pan over medium-high heat. Pour or scoop about 1/4 cup of batter per pancake onto the griddle.',
      'Cook for 2-3 minutes per side, or until golden brown and cooked through.',
      'Serve warm with your favorite toppings.'
    ]
  },
  {
    _id: '2',
    name: 'Avocado Toast',
    time: '10 mins',
    description: 'Crispy sourdough topped with smashed avocado, cherry tomatoes, and microgreens. A healthy and delicious breakfast or snack.',
    image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=500',
    difficulty: 'Easy',
    likes: 95,
    steps: [
      'Toast your favorite slice of sourdough bread until golden and crispy.',
      'In a small bowl, mash ripe avocado with a fork. Season with salt, pepper, and a squeeze of lemon juice.',
      'Spread the mashed avocado generously over the toasted bread.',
      'Top with sliced cherry tomatoes and a sprinkle of microgreens.',
      'Optionally, drizzle with a little olive oil or balsamic glaze before serving.'
    ]
  },
  {
    _id: '3',
    name: 'Spaghetti Aglio e Olio',
    time: '20 mins',
    description: 'Simple yet flavorful pasta tossed in garlic, olive oil, and fresh parsley. A quick and satisfying Italian classic.',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500',
    difficulty: 'Medium',
    likes: 156,
    steps: [
      'Cook spaghetti according to package directions until al dente. Reserve about 1 cup of pasta water before draining.',
      'While pasta cooks, heat olive oil in a large skillet over medium-low heat. Add sliced garlic and red pepper flakes (if using) and cook until garlic is fragrant and lightly golden, about 2-3 minutes. Be careful not to burn the garlic.',
      'Add the cooked and drained spaghetti to the skillet with the garlic and oil. Toss to combine.',
      'Gradually add some of the reserved pasta water, about 1/4 cup at a time, tossing constantly, until a light sauce forms and coats the pasta.',
      'Stir in fresh chopped parsley. Season with salt and pepper to taste.',
      'Serve immediately, garnished with extra parsley if desired.'
    ]
  },
  {
    _id: '4',
    name: 'Chocolate Lava Cake',
    time: '45 mins',
    description: 'Decadent chocolate cake with a molten center, served warm with vanilla ice cream. An impressive dessert for any occasion.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500',
    difficulty: 'Hard',
    likes: 203,
    steps: [
      'Preheat oven to 425°F (220°C). Grease and flour four 6-ounce ramekins.',
      'In a double boiler or microwave, melt butter and chocolate together until smooth. Stir until well combined and set aside to cool slightly.',
      'In a large bowl, whisk eggs, egg yolks, and sugar until light and creamy.',
      'Gradually whisk the melted chocolate mixture into the egg mixture until fully incorporated.',
      'Sift in the flour and whisk until just combined. Do not overmix.',
      'Divide the batter evenly among the prepared ramekins. Place ramekins on a baking sheet.',
      'Bake for 12-14 minutes, or until the edges are set but the center is still gooey.',
      'Carefully invert each cake onto a serving plate. Let stand for 1 minute, then lift off the ramekin.',
      'Serve immediately with a scoop of vanilla ice cream or a sprinkle of powdered sugar.'
    ]
  }
];

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <RecipeShowcase />
      <Newsletter />
    </>
  );
};

function AppContent() {
  const location = useLocation();
  const showFooter = location.pathname === '/';

  return (
    <div className="AppContent">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/recipes" element={<MainPage recipes={mockRecipes} />} />
        <Route path="/recipe/:id" element={<RecipeDetail recipes={mockRecipes} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <AppContent />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;