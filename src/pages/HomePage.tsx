
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import FeaturedRecipes from "../components/FeaturedRecipes";
import CategorySection from "../components/CategorySection";
import { RECIPES } from "../data/recipes";

const categories = [
  {
    id: "state-wise",
    name: "State-wise",
    icon: "🌎",
    image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2370&q=80",
    description: "Explore the diverse cuisines of India, from Punjab's rich curries to Kerala's coconut-infused dishes."
  },
  {
    id: "festivals",
    name: "Festivals",
    icon: "🪔",
    image: "https://images.unsplash.com/photo-1604429868519-8a55dc5f1602?ixlib=rb-4.0.3&auto=format&fit=crop&w=2370&q=80",
    description: "Celebrate with traditional festival foods like Diwali sweets and Holi specialties."
  },
  {
    id: "meal-types",
    name: "Meal Types",
    icon: "🍲",
    image: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?ixlib=rb-4.0.3&auto=format&fit=crop&w=2988&q=80",
    description: "Browse recipes by meal type - breakfast, main course, snacks, and desserts."
  },
  {
    id: "street-food",
    name: "Street Food",
    icon: "🛵",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=2371&q=80",
    description: "Discover the vibrant street foods from across India, from Vada Pav to Jhal Muri."
  },
  {
    id: "dietary",
    name: "Dietary Preferences",
    icon: "🥗",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2370&q=80",
    description: "Find recipes that match your dietary needs - vegetarian, vegan, or gluten-free."
  },
  {
    id: "difficulty",
    name: "By Difficulty",
    icon: "👨‍🍳",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2370&q=80",
    description: "Choose recipes based on your cooking skills, from beginner to expert level."
  },
  {
    id: "quick-easy",
    name: "Quick & Easy",
    icon: "⏱️",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=2980&q=80",
    description: "Delicious Indian recipes that can be prepared in 30 minutes or less."
  },
  {
    id: "traditional",
    name: "Traditional",
    icon: "📜",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=2371&q=80",
    description: "Authentic, time-honored recipes passed down through generations."
  }
];

const HomePage = () => {
  const [featuredRecipes, setFeaturedRecipes] = useState(RECIPES.slice(0, 6));
  const [recipeOfDay, setRecipeOfDay] = useState(RECIPES[0]);

  // Select a random recipe of the day based on date
  useEffect(() => {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const diff = today.getTime() - startOfYear.getTime();
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
    const randomIndex = dayOfYear % RECIPES.length;
    setRecipeOfDay(RECIPES[randomIndex]);
  }, []);

  return (
    <Layout>
      <HeroSection />
      
      <div className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-sandalwood-dark mb-2">
                Recipe of the Day
              </h2>
              <p className="text-gray-600 max-w-2xl">
                A daily dose of delicious inspiration from India's diverse culinary traditions.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-64 md:h-auto overflow-hidden rounded-lg">
              <img 
                src={recipeOfDay.image} 
                alt={recipeOfDay.name}
                className="w-full h-full object-cover animate-pulse-soft"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="flex gap-2 mb-2">
                <span className={`px-2 py-1 rounded-full text-xs text-white ${recipeOfDay.type === 'Veg' ? 'bg-green-500' : 'bg-red-500'}`}>
                  {recipeOfDay.type}
                </span>
                <span className="px-2 py-1 rounded-full text-xs bg-cardamom text-white">
                  {recipeOfDay.state}
                </span>
                <span className="px-2 py-1 rounded-full text-xs bg-saffron text-white">
                  {recipeOfDay.difficulty}
                </span>
              </div>
              
              <h3 className="text-4xl font-playfair font-bold text-sandalwood-dark mb-3">
                {recipeOfDay.name}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {recipeOfDay.description}
              </p>
              
              {recipeOfDay.backstory && (
                <p className="text-sm text-gray-500 italic mb-4">
                  "{recipeOfDay.backstory}"
                </p>
              )}
              
              <div className="flex flex-wrap gap-2 mb-6">
                {recipeOfDay.tags.slice(0, 6).map((tag, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-rosewater text-sandalwood text-xs rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              <a 
                href={`/recipe/${recipeOfDay.id}`}
                className="inline-flex items-center px-6 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-all transform hover:scale-105 active:scale-95 shadow-md self-start"
              >
                View Recipe
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <FeaturedRecipes 
        recipes={featuredRecipes}
        title="Featured Recipes"
        description="Explore our handpicked selection of authentic Indian recipes from various regions."
      />
      
      <CategorySection categories={categories} />
      
      <div className="py-16 bg-cardamom text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold mb-4">Join Our Culinary Community</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Sign up for our newsletter to receive new recipes, cooking tips, and special promotions directly to your inbox.
          </p>
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-l-lg text-gray-800 focus:outline-none"
            />
            <button className="px-6 py-3 bg-saffron hover:bg-saffron-dark text-white font-semibold rounded-r-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
