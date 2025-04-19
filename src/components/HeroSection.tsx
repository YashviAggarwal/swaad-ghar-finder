
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const steamElements = Array.from({ length: 12 }, (_, i) => i);

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1616173758552-ec5e7acb2b90?ixlib=rb-4.0.3&auto=format&fit=crop&w=3270&q=80" 
          alt="Indian Kitchen" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sandalwood/70 to-black/50"></div>
      </div>

      {/* Animated steam effect */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {steamElements.map((i) => (
          <div 
            key={i}
            className="absolute opacity-0 animate-steam-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${60 + Math.random() * 20}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <svg 
              width="60" 
              height="60" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-white/20"
            >
              <path 
                d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4 lg:px-0">
        <div className="max-w-3xl">
          <h2 
            className={`text-4xl md:text-6xl font-playfair font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <span className="text-saffron">Bharat ka Swaad,</span> Ek Jagah
          </h2>
          <h3 
            className={`text-xl md:text-2xl font-poppins text-white/90 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '600ms' }}
          >
            Find the Taste of Every Indian Home
          </h3>
          <div 
            className={`flex flex-wrap gap-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '900ms' }}
          >
            <Link 
              to="/recipes"
              className="px-6 py-3 bg-saffron text-white font-semibold rounded-full flex items-center gap-2 hover:bg-saffron-dark transition-all transform hover:scale-105 active:scale-95 shadow-lg"
            >
              Explore Recipes
              <ArrowRight size={18} />
            </Link>
            <Link 
              to="/states"
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full flex items-center gap-2 hover:bg-white/10 transition-all transform hover:scale-105 active:scale-95"
            >
              Browse by State
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
