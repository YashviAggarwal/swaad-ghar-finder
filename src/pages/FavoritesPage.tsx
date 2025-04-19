
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import Layout from "../components/Layout";
import RecipeCard from "../components/RecipeCard";
import { RECIPES, Recipe } from "../data/recipes";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    // Load favorites from localStorage
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(savedFavorites);
    
    // Filter recipes to get only favorites
    const recipes = RECIPES.filter(recipe => savedFavorites.includes(recipe.id));
    setFavoriteRecipes(recipes);
  }, []);

  const toggleFavorite = (recipeId: string) => {
    const newFavorites = favorites.filter(id => id !== recipeId);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setFavorites(newFavorites);
    
    // Update displayed recipes
    setFavoriteRecipes(prev => prev.filter(recipe => recipe.id !== recipeId));
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-playfair font-bold text-sandalwood-dark mb-4">
            Your Favorite Recipes
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            All your saved recipes in one place. Click the heart icon to remove a recipe from your favorites.
          </p>
        </div>
        
        {favoriteRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favoriteRecipes.map((recipe) => (
              <RecipeCard 
                key={recipe.id} 
                recipe={recipe} 
                isFavorite={true}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-rosewater rounded-full text-sandalwood mb-4">
              <Heart size={32} />
            </div>
            <h3 className="text-2xl font-playfair font-bold text-sandalwood-dark mb-2">No Favorites Yet</h3>
            <p className="text-gray-600 mb-6">
              You haven't added any recipes to your favorites yet. Explore our recipes and click the heart icon to save your favorites.
            </p>
            <Link
              to="/recipes"
              className="px-6 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-all"
            >
              Explore Recipes
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default FavoritesPage;
