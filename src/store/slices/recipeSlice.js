import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recipes: [
    {
      id: 1,
      title: 'Classic Margherita Pizza',
      description: 'A traditional Italian pizza with fresh tomatoes, mozzarella, and basil.',
      image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500',
      cookTime: '30 mins',
      difficulty: 'Easy',
      rating: 4.8
    },
    {
      id: 2,
      title: 'Creamy Mushroom Pasta',
      description: 'Rich and creamy pasta with sautéed mushrooms and herbs.',
      image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=500',
      cookTime: '25 mins',
      difficulty: 'Medium',
      rating: 4.6
    },
    {
      id: 3,
      title: 'Chocolate Lava Cake',
      description: 'Decadent chocolate cake with a molten center, served warm.',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500',
      cookTime: '45 mins',
      difficulty: 'Hard',
      rating: 4.9
    }
  ],
  favorites: []
};

const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(id => id !== action.payload);
    }
  }
});

export const { addToFavorites, removeFromFavorites } = recipeSlice.actions;
export default recipeSlice.reducer; 