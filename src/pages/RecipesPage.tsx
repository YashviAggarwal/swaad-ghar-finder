
import { useState, useEffect } from "react";
import { Search, Filter, ChevronDown } from "lucide-react";
import Layout from "../components/Layout";
import RecipeCard from "../components/RecipeCard";
import { RECIPES, STATES, CATEGORIES, TYPES, DIFFICULTIES, FESTIVALS, Recipe } from "../data/recipes";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>(RECIPES);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(RECIPES);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [filters, setFilters] = useState({
    state: "",
    category: "",
    type: "",
    difficulty: "",
    festival: ""
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Load favorites from localStorage
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(savedFavorites);
  }, []);

  // Apply filters and search
  useEffect(() => {
    let results = [...RECIPES];
    
    // Apply filters
    if (filters.state) {
      results = results.filter(recipe => recipe.state === filters.state);
    }
    
    if (filters.category) {
      results = results.filter(recipe => recipe.category.includes(filters.category));
    }
    
    if (filters.type) {
      results = results.filter(recipe => recipe.type === filters.type);
    }
    
    if (filters.difficulty) {
      results = results.filter(recipe => recipe.difficulty === filters.difficulty);
    }
    
    if (filters.festival) {
      results = results.filter(recipe => recipe.festival && recipe.festival.includes(filters.festival));
    }
    
    // Apply search
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(recipe => 
        recipe.name.toLowerCase().includes(term) || 
        recipe.description.toLowerCase().includes(term) ||
        recipe.tags.some(tag => tag.includes(term))
      );
    }
    
    setFilteredRecipes(results);
  }, [filters, searchTerm]);

  const toggleFavorite = (recipeId: string) => {
    let newFavorites;
    
    if (favorites.includes(recipeId)) {
      newFavorites = favorites.filter(id => id !== recipeId);
    } else {
      newFavorites = [...favorites, recipeId];
    }
    
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  };

  const resetFilters = () => {
    setFilters({
      state: "",
      category: "",
      type: "",
      difficulty: "",
      festival: ""
    });
    setSearchTerm("");
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-playfair font-bold text-sandalwood-dark mb-4">
            Explore Indian Recipes
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover the rich flavors and traditions of Indian cuisine through our collection of authentic recipes from across the subcontinent.
          </p>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search recipes, ingredients, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all shadow-sm"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-rosewater text-sandalwood-dark rounded-lg hover:bg-rosewater-dark transition-colors shadow-sm md:w-auto w-full"
            >
              <Filter size={20} />
              Filters
              <ChevronDown size={16} className={`transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
          
          {isFilterOpen && (
            <div className="mt-4 p-6 bg-white rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 animate-fade-in">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                <select
                  value={filters.state}
                  onChange={(e) => setFilters({...filters, state: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent"
                >
                  <option value="">All States</option>
                  {STATES.map((state) => (
                    <option key={state.name} value={state.name}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={filters.category}
                  onChange={(e) => setFilters({...filters, category: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent"
                >
                  <option value="">All Categories</option>
                  {CATEGORIES.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                <select
                  value={filters.type}
                  onChange={(e) => setFilters({...filters, type: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent"
                >
                  <option value="">All Types</option>
                  {TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty</label>
                <select
                  value={filters.difficulty}
                  onChange={(e) => setFilters({...filters, difficulty: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent"
                >
                  <option value="">All Difficulties</option>
                  {DIFFICULTIES.map((difficulty) => (
                    <option key={difficulty} value={difficulty}>
                      {difficulty}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Festival</label>
                <select
                  value={filters.festival}
                  onChange={(e) => setFilters({...filters, festival: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent"
                >
                  <option value="">All Festivals</option>
                  {FESTIVALS.map((festival) => (
                    <option key={festival} value={festival}>
                      {festival}
                    </option>
                  ))}
                </select>
              </div>

              <div className="lg:col-span-5 flex justify-end mt-2">
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          )}
        </div>
        
        <div className="mb-4 flex justify-between items-center">
          <p className="text-gray-600">
            {filteredRecipes.length} recipes found
          </p>
        </div>
        
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard 
                key={recipe.id} 
                recipe={recipe} 
                isFavorite={favorites.includes(recipe.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-2xl font-playfair font-bold text-sandalwood-dark mb-2">No Recipes Found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any recipes matching your search criteria.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default RecipesPage;
