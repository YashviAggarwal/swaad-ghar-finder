
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { RECIPES, Recipe } from "../data/recipes";
import RecipeCard from "../components/RecipeCard";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryMapping {
  [key: string]: {
    title: string;
    description: string;
    filterFn: (recipe: Recipe) => boolean;
    image: string;
  };
}

const CATEGORY_MAPPING: CategoryMapping = {
  "state-wise": {
    title: "State-wise Recipes",
    description: "Explore the diverse culinary traditions from different states of India",
    filterFn: (recipe: Recipe) => true, // All recipes have states
    image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2370&q=80"
  },
  "festivals": {
    title: "Festival Recipes",
    description: "Special dishes prepared during Indian festivals and celebrations",
    filterFn: (recipe: Recipe) => !!recipe.festival && recipe.festival.length > 0,
    image: "https://images.unsplash.com/photo-1604429868519-8a55dc5f1602?ixlib=rb-4.0.3&auto=format&fit=crop&w=2370&q=80"
  },
  "meal-types": {
    title: "Meal Types",
    description: "Browse recipes by meal types - breakfast, main course, snacks, and desserts",
    filterFn: (recipe: Recipe) => true, // All recipes have categories
    image: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?ixlib=rb-4.0.3&auto=format&fit=crop&w=2988&q=80"
  },
  "street-food": {
    title: "Street Food",
    description: "Iconic street foods from across India that are bursting with flavor",
    filterFn: (recipe: Recipe) => recipe.category.includes("Street Food"),
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=2371&q=80"
  },
  "dietary": {
    title: "Dietary Preferences",
    description: "Find recipes that match your dietary needs",
    filterFn: (recipe: Recipe) => true, // All recipes have a type (Veg/Non-Veg)
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2370&q=80"
  },
  "difficulty": {
    title: "Recipes by Difficulty",
    description: "Choose recipes based on your cooking skills",
    filterFn: (recipe: Recipe) => true, // All recipes have difficulty
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2370&q=80"
  },
  "quick-easy": {
    title: "Quick & Easy Recipes",
    description: "Delicious Indian recipes that can be prepared in 30 minutes or less",
    filterFn: (recipe: Recipe) => {
      // Convert cook time to minutes for comparison
      const cookTime = recipe.cookTime;
      const minutes = parseInt(cookTime.split(" ")[0]);
      return minutes <= 30;
    },
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=2980&q=80"
  },
  "traditional": {
    title: "Traditional Recipes",
    description: "Authentic, time-honored recipes passed down through generations",
    filterFn: (recipe: Recipe) => recipe.category.includes("Traditional"),
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=2371&q=80"
  }
};

const CategoryDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  
  if (!id || !CATEGORY_MAPPING[id]) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-playfair font-bold mb-4">Category Not Found</h2>
          <p>The category you're looking for doesn't exist.</p>
          <Link to="/" className="mt-4 inline-flex items-center text-saffron">
            <ArrowLeft size={18} className="mr-2" />
            Back to Home
          </Link>
        </div>
      </Layout>
    );
  }
  
  const categoryInfo = CATEGORY_MAPPING[id];
  const filteredRecipes = RECIPES.filter(categoryInfo.filterFn);
  
  return (
    <Layout>
      <div className="relative h-60 md:h-80 overflow-hidden">
        <img 
          src={categoryInfo.image} 
          alt={categoryInfo.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center flex-col px-4">
          <Link to="/" className="absolute top-4 left-4 text-white flex items-center">
            <ArrowLeft size={18} className="mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white text-center">
            {categoryInfo.title}
          </h1>
          <p className="text-lg text-white/90 mt-3 max-w-2xl text-center">
            {categoryInfo.description}
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <h3 className="text-2xl font-playfair font-bold mb-2">No Recipes Found</h3>
              <p className="text-gray-600">We couldn't find any recipes in this category.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryDetailPage;
