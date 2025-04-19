
import { Link } from "react-router-dom";

interface Category {
  id: string;
  name: string;
  icon: string;
  image: string;
  description: string;
}

interface CategorySectionProps {
  categories: Category[];
}

const CategorySection = ({ categories }: CategorySectionProps) => {
  return (
    <div className="py-12 bg-rosewater-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold text-sandalwood-dark mb-3">
            Explore by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the rich diversity of Indian cuisine through our carefully curated categories
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/category/${category.id}`}
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-[1.03]">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-saffron" dangerouslySetInnerHTML={{ __html: category.icon }}></span>
                      <h3 className="text-xl font-playfair font-bold">{category.name}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 line-clamp-2">{category.description}</p>
                </div>
                <div className="px-4 pb-4">
                  <span className="inline-flex items-center text-sm font-medium text-saffron">
                    Explore <span className="ml-1 text-lg">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
