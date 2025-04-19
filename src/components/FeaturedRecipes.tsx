
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import RecipeCard from "./RecipeCard";
import { Recipe } from "../data/recipes";

interface FeaturedRecipesProps {
  recipes: Recipe[];
  title: string;
  description?: string;
}

const FeaturedRecipes = ({ recipes, title, description }: FeaturedRecipesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleRecipes, setVisibleRecipes] = useState<Recipe[]>([]);
  const [itemsPerView, setItemsPerView] = useState(4);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerView(1);
      } else if (width < 768) {
        setItemsPerView(2);
      } else if (width < 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    updateVisibleRecipes();
  }, [currentIndex, itemsPerView, recipes]);

  const updateVisibleRecipes = () => {
    const visibleItems = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % recipes.length;
      visibleItems.push(recipes[index]);
    }
    setVisibleRecipes(visibleItems);
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % recipes.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + recipes.length) % recipes.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);
  
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-3xl font-playfair font-bold text-sandalwood-dark mb-2">
              {title}
            </h2>
            {description && (
              <p className="text-gray-600 max-w-2xl">{description}</p>
            )}
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-rosewater text-sandalwood hover:bg-rosewater-dark transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-rosewater text-sandalwood hover:bg-rosewater-dark transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div 
          ref={containerRef}
          className="relative overflow-hidden"
        >
          <div 
            className={`flex gap-6 transition-transform duration-500 ease-in-out`}
            style={{ 
              transform: `translateX(0%)`,
            }}
          >
            {visibleRecipes.map((recipe, index) => (
              <div 
                key={`${recipe.id}-${index}`} 
                className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 transition-opacity duration-500 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}
              >
                <RecipeCard recipe={recipe} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6">
          {Array.from({ length: Math.min(recipes.length, 5) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full mx-1 transition-all ${
                index === currentIndex % 5 ? 'bg-saffron w-4' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedRecipes;
