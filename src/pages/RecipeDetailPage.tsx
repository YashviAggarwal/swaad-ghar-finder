
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Clock, Users, ChefHat, Heart, Star, ArrowLeft } from "lucide-react";
import Layout from "../components/Layout";
import { Recipe, RECIPES } from "../data/recipes";

const RecipeDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [userRating, setUserRating] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the recipe by id
    const foundRecipe = RECIPES.find(r => r.id === id) || null;
    setRecipe(foundRecipe);
    setLoading(false);

    // Check if recipe is in favorites
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.includes(id));

    // Load user rating if available
    const ratings = JSON.parse(localStorage.getItem('ratings') || '{}');
    if (id && ratings[id]) {
      setUserRating(ratings[id]);
    }
  }, [id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    let newFavorites;
    
    if (isFavorite) {
      newFavorites = favorites.filter((favId: string) => favId !== id);
    } else {
      newFavorites = [...favorites, id];
    }
    
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  const handleRating = (rating: number) => {
    setUserRating(rating);
    const ratings = JSON.parse(localStorage.getItem('ratings') || '{}');
    ratings[id as string] = rating;
    localStorage.setItem('ratings', JSON.stringify(ratings));
  };

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center min-h-[50vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-saffron"></div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!recipe) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <h2 className="text-2xl font-playfair font-bold text-sandalwood mb-4">Recipe Not Found</h2>
            <p className="mb-6">We couldn't find the recipe you're looking for.</p>
            <Link 
              to="/recipes"
              className="inline-flex items-center px-4 py-2 bg-saffron text-white rounded-md hover:bg-saffron-dark transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Recipes
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Link 
          to="/recipes"
          className="inline-flex items-center mb-6 text-sandalwood hover:text-saffron transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Recipes
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src={recipe.image} 
                alt={recipe.name} 
                className="w-full h-auto"
              />
              <button
                onClick={toggleFavorite}
                className="absolute top-4 right-4 p-3 rounded-full bg-white/90 shadow-md transition-all hover:bg-white"
              >
                <Heart 
                  fill={isFavorite ? "#F43F5E" : "none"} 
                  stroke={isFavorite ? "#F43F5E" : "currentColor"} 
                  className={`h-6 w-6 ${isFavorite ? 'text-rose-500' : 'text-gray-700'}`} 
                />
              </button>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-playfair font-bold mb-2">Your Rating</h3>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button 
                    key={star}
                    onClick={() => handleRating(star)}
                    className="focus:outline-none"
                  >
                    <Star 
                      fill={userRating && star <= userRating ? "#F59E0B" : "none"} 
                      stroke={userRating && star <= userRating ? "#F59E0B" : "currentColor"} 
                      className={`h-7 w-7 ${userRating && star <= userRating ? 'text-saffron' : 'text-gray-400'}`} 
                    />
                  </button>
                ))}
                <span className="ml-2 text-gray-600">
                  {userRating ? `${userRating}/5` : 'Rate this recipe'}
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className={`px-3 py-1 rounded-full text-sm text-white ${recipe.type === 'Veg' ? 'bg-green-500' : 'bg-red-500'}`}>
                {recipe.type}
              </span>
              <span className="px-3 py-1 rounded-full text-sm bg-cardamom text-white">
                {recipe.state}
              </span>
              <span className="px-3 py-1 rounded-full text-sm bg-saffron text-white">
                {recipe.difficulty}
              </span>
              {recipe.festival && recipe.festival.length > 0 && (
                <span className="px-3 py-1 rounded-full text-sm bg-rosewater text-sandalwood">
                  {recipe.festival[0]}
                </span>
              )}
            </div>

            <h1 className="text-4xl font-playfair font-bold text-sandalwood-dark mb-4">
              {recipe.name}
            </h1>

            <p className="text-lg text-gray-700 mb-6">
              {recipe.description}
            </p>

            <div className="bg-rosewater-light rounded-lg p-4 mb-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm mb-2">
                    <Clock className="h-6 w-6 text-saffron" />
                  </div>
                  <p className="text-xs text-gray-500">Prep Time</p>
                  <p className="font-medium">{recipe.prepTime}</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm mb-2">
                    <Clock className="h-6 w-6 text-cardamom" />
                  </div>
                  <p className="text-xs text-gray-500">Cook Time</p>
                  <p className="font-medium">{recipe.cookTime}</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm mb-2">
                    <Users className="h-6 w-6 text-sandalwood" />
                  </div>
                  <p className="text-xs text-gray-500">Servings</p>
                  <p className="font-medium">{recipe.servings}</p>
                </div>
              </div>
            </div>

            {recipe.backstory && (
              <div className="mb-6">
                <h3 className="text-xl font-playfair font-bold mb-2">Story Behind the Dish</h3>
                <p className="text-gray-700 italic">
                  "{recipe.backstory}"
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-6">
              {recipe.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-2xl font-playfair font-bold text-sandalwood-dark mb-4 flex items-center">
                <span className="w-8 h-8 flex items-center justify-center bg-saffron text-white rounded-full mr-2 text-sm">1</span>
                Ingredients
              </h3>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-saffron mt-2 mr-2"></span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-2xl font-playfair font-bold text-sandalwood-dark mb-4 flex items-center">
                <span className="w-8 h-8 flex items-center justify-center bg-saffron text-white rounded-full mr-2 text-sm">2</span>
                Instructions
              </h3>
              <ol className="space-y-6">
                {recipe.steps.map((step, index) => (
                  <li key={index} className="flex">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rosewater text-sandalwood font-bold mr-3 shrink-0">
                      {index + 1}
                    </span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RecipeDetailPage;
