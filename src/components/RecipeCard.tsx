
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Clock, Users, ChefHat } from "lucide-react";
import { Recipe } from "../data/recipes";

interface RecipeCardProps {
  recipe: Recipe;
  isFavorite?: boolean;
  onToggleFavorite?: (recipeId: string) => void;
}

const RecipeCard = ({ recipe, isFavorite = false, onToggleFavorite }: RecipeCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onToggleFavorite) {
      onToggleFavorite(recipe.id);
    }
  };

  return (
    <Link 
      to={`/recipe/${recipe.id}`}
      className="block"
    >
      <div 
        className={`relative bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 ${isHovered ? 'shadow-xl transform scale-[1.02]' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={recipe.image} 
            alt={recipe.name} 
            className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 w-full p-4 text-white">
            <div className="flex items-center gap-1 text-xs mb-1">
              <span className={`px-2 py-1 rounded-full ${recipe.type === 'Veg' ? 'bg-green-500' : 'bg-red-500'}`}>
                {recipe.type}
              </span>
              <span className="px-2 py-1 rounded-full bg-cardamom text-white">
                {recipe.state}
              </span>
            </div>
            <h3 className="text-xl font-playfair font-bold truncate">{recipe.name}</h3>
          </div>

          <button 
            onClick={handleToggleFavorite}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white transition-colors"
          >
            <Heart 
              fill={isFavorite ? "#F43F5E" : "none"} 
              stroke={isFavorite ? "#F43F5E" : "currentColor"} 
              className={`h-5 w-5 ${isFavorite ? 'text-rose-500' : 'text-gray-600'}`} 
            />
          </button>
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between mb-3 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{recipe.prepTime} + {recipe.cookTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users size={16} />
              <span>Serves {recipe.servings}</span>
            </div>
            <div className="flex items-center gap-1">
              <ChefHat size={16} />
              <span>{recipe.difficulty}</span>
            </div>
          </div>
          
          <p className="text-sm text-gray-600 line-clamp-2">{recipe.description}</p>
          
          <div className="mt-3 flex flex-wrap gap-1">
            {recipe.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-rosewater text-sandalwood text-xs rounded-full"
              >
                #{tag}
              </span>
            ))}
            {recipe.tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                +{recipe.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
