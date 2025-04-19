
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { STATES, RECIPES } from "../data/recipes";

const StatesPage = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const handleStateClick = (stateName: string) => {
    setSelectedState(stateName === selectedState ? null : stateName);
  };

  return (
    <Layout>
      <div className="bg-rosewater-light py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-playfair font-bold text-sandalwood-dark mb-4">
              Explore India's Culinary Diversity
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              India's cuisine varies dramatically from state to state, reflecting the country's diverse geography, culture, and history. Click on a state to discover its unique dishes.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {STATES.map((state) => (
              <button
                key={state.name}
                onClick={() => handleStateClick(state.name)}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedState === state.name 
                    ? 'bg-saffron text-white shadow-md' 
                    : 'bg-white text-sandalwood-dark hover:bg-rosewater hover:text-sandalwood'
                }`}
              >
                {state.name}
              </button>
            ))}
          </div>

          {selectedState ? (
            <div className="animate-fade-in">
              <StateDetail stateName={selectedState} />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {STATES.map((state) => (
                <div 
                  key={state.name}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all group cursor-pointer"
                  onClick={() => handleStateClick(state.name)}
                >
                  <div className="h-48 relative overflow-hidden">
                    {/* We'll use a recipe image from this state as the background */}
                    {RECIPES.find(recipe => recipe.state === state.name) ? (
                      <img 
                        src={RECIPES.find(recipe => recipe.state === state.name)?.image} 
                        alt={state.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-r from-cardamom to-saffron"></div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                      <h3 className="text-xl font-playfair font-bold">{state.name}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm mb-3">{state.description}</p>
                    <div className="mt-2">
                      <h4 className="text-sm font-medium text-sandalwood mb-1">Famous Dishes:</h4>
                      <div className="flex flex-wrap gap-1">
                        {state.famous_dishes.map((dish, index) => (
                          <span 
                            key={index} 
                            className="px-2 py-1 bg-rosewater text-xs text-sandalwood rounded-full"
                          >
                            {dish}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

const StateDetail = ({ stateName }: { stateName: string }) => {
  const state = STATES.find(s => s.name === stateName);
  const stateRecipes = RECIPES.filter(recipe => recipe.state === stateName);

  if (!state) {
    return <div>State not found</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <div className="sticky top-24">
            <h2 className="text-3xl font-playfair font-bold text-sandalwood-dark mb-4">{state.name}</h2>
            <p className="text-gray-600 mb-6">{state.description}</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-bold text-sandalwood mb-2">Famous Dishes</h3>
              <ul className="space-y-1">
                {state.famous_dishes.map((dish, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-saffron rounded-full mr-2"></span>
                    {dish}
                  </li>
                ))}
              </ul>
            </div>
            
            <Link 
              to={`/recipes?state=${stateName}`}
              className="inline-flex items-center px-4 py-2 bg-saffron text-white rounded-full hover:bg-saffron-dark transition-colors"
            >
              View All {stateName} Recipes
            </Link>
          </div>
        </div>
        
        <div className="md:w-2/3">
          <h3 className="text-2xl font-playfair font-bold text-sandalwood-dark mb-6">
            Recipes from {state.name}
          </h3>
          
          <div className="space-y-6">
            {stateRecipes.map((recipe) => (
              <Link 
                key={recipe.id}
                to={`/recipe/${recipe.id}`}
                className="block bg-rosewater-light rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all p-4"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="sm:w-1/4">
                    <div className="relative h-32 sm:h-full rounded-lg overflow-hidden">
                      <img 
                        src={recipe.image} 
                        alt={recipe.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="sm:w-3/4">
                    <div className="flex gap-2 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs text-white ${recipe.type === 'Veg' ? 'bg-green-500' : 'bg-red-500'}`}>
                        {recipe.type}
                      </span>
                      <span className="px-2 py-1 rounded-full text-xs bg-saffron text-white">
                        {recipe.difficulty}
                      </span>
                    </div>
                    <h4 className="text-xl font-playfair font-bold text-sandalwood-dark mb-2">{recipe.name}</h4>
                    <p className="text-gray-600 text-sm mb-2">{recipe.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {recipe.tags.slice(0, 4).map((tag, index) => (
                        <span key={index} className="text-xs text-gray-500">#{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            
            {stateRecipes.length === 0 && (
              <div className="text-center py-10">
                <p className="text-gray-600">No recipes available for {state.name} at the moment.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatesPage;
