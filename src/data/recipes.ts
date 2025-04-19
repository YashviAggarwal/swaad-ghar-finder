
export interface Recipe {
  id: string;
  name: string;
  state: string;
  type: "Veg" | "Non-Veg";
  category: string[];
  festival?: string[];
  difficulty: "Easy" | "Moderate" | "Expert";
  image: string;
  ingredients: string[];
  steps: string[];
  prepTime: string;
  cookTime: string;
  servings: number;
  tags: string[];
  description: string;
  backstory?: string;
}

export const RECIPES: Recipe[] = [
  {
    id: "butter-chicken",
    name: "Butter Chicken",
    state: "Punjab",
    type: "Non-Veg",
    category: ["Main Course", "Traditional"],
    festival: ["Baisakhi"],
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=2370&q=80",
    ingredients: [
      "500g chicken breast, cut into chunks",
      "2 tbsp butter",
      "1 large onion, finely chopped",
      "2 tbsp ginger-garlic paste",
      "400g tomato puree",
      "200ml heavy cream",
      "1 tbsp garam masala",
      "1 tsp red chili powder",
      "1 tsp turmeric powder",
      "2 tbsp kasuri methi (dried fenugreek leaves)",
      "Salt to taste",
      "Fresh coriander for garnish"
    ],
    steps: [
      "Marinate chicken with ginger-garlic paste, red chili powder, and salt for 30 minutes.",
      "In a large pan, melt butter over medium heat. Add onions and sauté until golden brown.",
      "Add marinated chicken and cook until it turns white on all sides.",
      "Stir in tomato puree, garam masala, and turmeric. Cover and simmer for 15 minutes.",
      "Add cream and kasuri methi. Simmer for another 10 minutes until the gravy thickens.",
      "Garnish with fresh coriander and serve hot with naan or rice."
    ],
    prepTime: "20 min",
    cookTime: "40 min",
    servings: 4,
    tags: ["punjab", "nonveg", "baisakhi", "moderate", "creamy", "spicy"],
    description: "A rich, creamy curry made with tender chicken in a tomato-based sauce flavored with aromatic spices.",
    backstory: "Butter Chicken or Murgh Makhani was invented in the 1950s by Kundan Lal Gujral, who ran the famous Moti Mahal restaurant in Delhi. The story goes that they used to mix leftover tandoori chicken in a buttery tomato gravy to avoid wastage, accidentally creating this iconic dish."
  },
  {
    id: "sarson-da-saag",
    name: "Sarson da Saag",
    state: "Punjab",
    type: "Veg",
    category: ["Main Course", "Traditional"],
    festival: ["Lohri", "Winter Festivals"],
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1575451536181-33307c992a55?ixlib=rb-4.0.3&auto=format&fit=crop&w=2370&q=80",
    ingredients: [
      "1 kg mustard greens (sarson)",
      "250g spinach",
      "100g bathua leaves (if available)",
      "2 green chilies",
      "1 inch ginger piece",
      "3 tbsp ghee",
      "1 tbsp ginger, finely chopped",
      "1 tbsp garlic, finely chopped",
      "1 onion, finely chopped",
      "2 tomatoes, chopped",
      "1 tsp red chili powder",
      "Salt to taste",
      "2 tbsp maize flour (makki ka atta)"
    ],
    steps: [
      "Clean and chop all the greens. Pressure cook with green chilies and ginger for 4-5 whistles.",
      "Once cooled, blend the mixture to a coarse paste.",
      "Heat ghee in a pan, add chopped ginger, garlic, and onions. Sauté until golden brown.",
      "Add tomatoes and cook until soft. Add red chili powder and salt.",
      "Add the blended greens mixture and cook for 15-20 minutes on low heat.",
      "Sprinkle maize flour, mix well and cook for another 5 minutes.",
      "Serve hot with makki di roti and a dollop of butter."
    ],
    prepTime: "30 min",
    cookTime: "45 min",
    servings: 4,
    tags: ["punjab", "veg", "winter", "moderate", "traditional"],
    description: "A traditional Punjabi dish made with mustard greens and served with corn flour flatbreads.",
    backstory: "Sarson da Saag is a winter delicacy in Punjab, traditionally cooked over slow fires in earthen pots. It was a staple for farmers who needed hearty, nutritious meals during the cold months when fresh mustard greens were abundant in their fields."
  },
  {
    id: "dhokla",
    name: "Dhokla",
    state: "Gujarat",
    type: "Veg",
    category: ["Snack", "Breakfast"],
    festival: ["Diwali", "Navratri"],
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1695192413478-3a0aec349515?ixlib=rb-4.0.3&auto=format&fit=crop&w=2370&q=80",
    ingredients: [
      "2 cups gram flour (besan)",
      "1/2 cup yogurt",
      "1 cup water",
      "1 tbsp ginger-green chili paste",
      "1 tsp turmeric powder",
      "1 tsp fruit salt (eno)",
      "Salt to taste",
      "2 tbsp oil",
      "1 tsp mustard seeds",
      "1 tsp sesame seeds",
      "2 green chilies, slit",
      "10-12 curry leaves",
      "2 tbsp fresh coriander, chopped",
      "2 tbsp fresh coconut, grated",
      "1 tbsp lemon juice"
    ],
    steps: [
      "Mix gram flour, yogurt, water, ginger-green chili paste, turmeric, and salt. Let it ferment for 4-6 hours.",
      "Add fruit salt to the batter and mix gently. Pour into a greased thali or cake tin.",
      "Steam for 15-20 minutes until a toothpick comes out clean.",
      "For tempering, heat oil in a pan. Add mustard seeds, sesame seeds, green chilies, and curry leaves.",
      "Once it splutters, pour over the steamed dhokla. Sprinkle coconut, coriander, and lemon juice.",
      "Cut into squares and serve with green chutney."
    ],
    prepTime: "4-6 hours (fermentation)",
    cookTime: "20 min",
    servings: 4,
    tags: ["gujarat", "veg", "snack", "easy", "steamed", "fermented"],
    description: "A steamed savory cake made from fermented gram flour batter, seasoned with a tempered spice mix.",
    backstory: "Dhokla originated as a way to utilize gram flour in a region where chickpeas were abundantly grown. The steaming technique was developed to create a lighter, more digestible dish in the hot climate of Gujarat, making it perfect for any time of day."
  },
  {
    id: "pongal",
    name: "Pongal",
    state: "Tamil Nadu",
    type: "Veg",
    category: ["Breakfast", "Festival Food"],
    festival: ["Pongal Festival"],
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1590496793929-36417d3117de?ixlib=rb-4.0.3&auto=format&fit=crop&w=2369&q=80",
    ingredients: [
      "1 cup rice",
      "1/2 cup moong dal (yellow lentils)",
      "2 tbsp ghee",
      "1 tsp cumin seeds",
      "1 tsp black pepper, whole",
      "1/2 tsp asafoetida (hing)",
      "Few curry leaves",
      "1 inch ginger, chopped",
      "2-3 green chilies, chopped",
      "1/4 cup cashew nuts",
      "Salt to taste",
      "3.5 cups water"
    ],
    steps: [
      "Dry roast moong dal until aromatic and golden. Wash rice and dal together.",
      "In a pressure cooker, heat ghee. Add cumin, pepper, asafoetida, curry leaves, ginger, and green chilies.",
      "Add cashew nuts and sauté until golden brown.",
      "Add washed rice and dal. Sauté for 2 minutes.",
      "Add water and salt. Pressure cook for 4-5 whistles.",
      "Mash lightly and serve hot with coconut chutney and sambar."
    ],
    prepTime: "10 min",
    cookTime: "20 min",
    servings: 4,
    tags: ["tamilnadu", "veg", "breakfast", "easy", "festival"],
    description: "A comforting rice and lentil dish seasoned with cumin, pepper, and curry leaves, popular in South India.",
    backstory: "Pongal is both a harvest festival and its namesake dish. The word 'Pongal' means 'to boil over' in Tamil, symbolizing abundance and prosperity. The dish is traditionally prepared in earthen pots over wood fires as an offering to the Sun God during the festival."
  },
  {
    id: "rogan-josh",
    name: "Rogan Josh",
    state: "Jammu & Kashmir",
    type: "Non-Veg",
    category: ["Main Course", "Traditional"],
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&auto=format&fit=crop&w=2369&q=80",
    ingredients: [
      "1 kg lamb, cut into pieces",
      "4 tbsp ghee or oil",
      "2 bay leaves",
      "4-5 cloves",
      "1 cinnamon stick",
      "3-4 green cardamoms",
      "2 black cardamoms",
      "1 cup yogurt, whisked",
      "2 tbsp Kashmiri red chili powder",
      "1 tsp ginger powder",
      "1 tsp fennel powder",
      "1/2 tsp asafoetida",
      "Salt to taste",
      "2 cups water",
      "Fresh coriander for garnish"
    ],
    steps: [
      "Heat ghee in a heavy-bottomed pan. Add all whole spices and sauté until aromatic.",
      "Add lamb pieces and sear on high heat till brown on all sides.",
      "Lower the heat, add Kashmiri red chili powder, ginger powder, fennel powder, and asafoetida. Mix well.",
      "Add whisked yogurt, stirring continuously to prevent curdling.",
      "Add salt and water. Cover and simmer for about 1 hour or until meat is tender.",
      "Remove lid and cook for another 10-15 minutes until the gravy thickens.",
      "Garnish with fresh coriander and serve hot with steamed rice or naan."
    ],
    prepTime: "15 min",
    cookTime: "1 hour 15 min",
    servings: 4,
    tags: ["kashmir", "nonveg", "lamb", "moderate", "aromatic", "spicy"],
    description: "An aromatic lamb curry known for its vibrant red color from Kashmiri chilies and rich flavor from various spices.",
    backstory: "Rogan Josh came to Kashmir with the Mughals, who were influenced by Persian cuisine. The name comes from Persian words 'Roughan' (oil) and 'Josh' (heat/passion). Unlike many Indian curries, authentic Kashmiri Rogan Josh doesn't use onions or garlic, relying instead on the rich flavor of spices."
  },
  {
    id: "vada-pav",
    name: "Vada Pav",
    state: "Maharashtra",
    type: "Veg",
    category: ["Street Food", "Snack"],
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1606287383215-039da88082dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2369&q=80",
    ingredients: [
      "4 potato buns (pav)",
      "For the vada:",
      "4 medium potatoes, boiled and mashed",
      "1 tsp mustard seeds",
      "1 tsp cumin seeds",
      "1 sprig curry leaves",
      "2 green chilies, finely chopped",
      "1 inch ginger, grated",
      "2 garlic cloves, minced",
      "1/2 tsp turmeric powder",
      "1 tsp red chili powder",
      "1 tbsp lemon juice",
      "2 tbsp coriander leaves, chopped",
      "Salt to taste",
      "For the batter:",
      "1 cup gram flour (besan)",
      "1/4 tsp turmeric powder",
      "1/4 tsp red chili powder",
      "A pinch of baking soda",
      "Salt to taste",
      "Water as needed",
      "Oil for deep frying",
      "For the chutneys:",
      "Green chutney and tamarind chutney",
      "Dry garlic chutney powder"
    ],
    steps: [
      "For the potato mixture: Heat oil in a pan, add mustard seeds, cumin seeds, and curry leaves.",
      "Add green chilies, ginger, and garlic. Sauté for a minute.",
      "Add mashed potatoes, turmeric, red chili powder, and salt. Mix well.",
      "Add lemon juice and coriander leaves. Keep aside to cool.",
      "For the batter: Mix gram flour, turmeric, red chili powder, baking soda, and salt. Add water to make a smooth batter.",
      "Shape potato mixture into round balls. Dip in batter and deep fry until golden brown.",
      "Slice pav horizontally, spread chutneys on both sides. Place hot vada in between.",
      "Sprinkle dry garlic chutney and serve immediately."
    ],
    prepTime: "20 min",
    cookTime: "30 min",
    servings: 4,
    tags: ["maharashtra", "mumbai", "veg", "street food", "moderate", "spicy"],
    description: "A spicy potato fritter served in a bread bun with various chutneys, the ultimate Mumbai street food.",
    backstory: "Vada Pav was invented in 1966 by a street food vendor named Ashok Vaidya, who started selling it outside Dadar railway station in Mumbai. It was created as a quick, affordable meal for textile mill workers and has since become Mumbai's most iconic street food, often called the 'Indian burger'."
  },
  {
    id: "chole-bhature",
    name: "Chole Bhature",
    state: "Punjab",
    type: "Veg",
    category: ["Street Food", "Main Course"],
    festival: ["Festivals", "Celebrations"],
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1626100213351-94392a4b1412?ixlib=rb-4.0.3&auto=format&fit=crop&w=2370&q=80",
    ingredients: [
      "For the chole:",
      "2 cups chickpeas, soaked overnight",
      "1 large onion, finely chopped",
      "2 tomatoes, pureed",
      "1 tbsp ginger-garlic paste",
      "2-3 green chilies, slit",
      "2 tsp chole masala",
      "1 tsp cumin powder",
      "1 tsp coriander powder",
      "1/2 tsp turmeric powder",
      "1 tsp red chili powder",
      "1 tsp garam masala",
      "1 tsp dried mango powder (amchur)",
      "1 tea bag",
      "Salt to taste",
      "2 tbsp oil",
      "Fresh coriander for garnish",
      "For the bhature:",
      "2 cups all-purpose flour",
      "1/4 cup semolina (sooji)",
      "2 tbsp yogurt",
      "1/2 tsp baking soda",
      "1 tsp sugar",
      "Salt to taste",
      "Lukewarm water as needed",
      "Oil for deep frying"
    ],
    steps: [
      "For the chole: Pressure cook chickpeas with tea bag, salt, and water for 15-20 minutes.",
      "In a pan, heat oil. Add onions and sauté until golden brown.",
      "Add ginger-garlic paste and green chilies. Sauté for 2 minutes.",
      "Add tomato puree and cook until oil separates.",
      "Add all spice powders and cook for 2-3 minutes.",
      "Add boiled chickpeas (without tea bag) and some cooking water. Simmer for 15-20 minutes.",
      "Garnish with fresh coriander.",
      "For the bhature: Mix flour, semolina, yogurt, baking soda, sugar, and salt.",
      "Knead into a soft dough using lukewarm water. Cover and rest for 2-3 hours.",
      "Divide into small balls, roll into oval shapes.",
      "Deep fry in hot oil until they puff up and turn golden brown.",
      "Serve hot chole with bhature, sliced onions, and lemon wedges."
    ],
    prepTime: "Overnight (soaking) + 2-3 hours (dough resting)",
    cookTime: "1 hour",
    servings: 4,
    tags: ["punjab", "veg", "street food", "moderate", "spicy", "festival"],
    description: "A popular North Indian dish featuring spicy chickpea curry served with deep-fried bread.",
    backstory: "Chole Bhature originated in the Punjab region of northern India but became extremely popular in Delhi after partition. The dish combines the protein-rich chickpea curry with indulgent fried bread, traditionally served as a special breakfast or lunch for celebrations and festivals."
  },
  {
    id: "baingan-bharta",
    name: "Baingan Bharta",
    state: "Punjab",
    type: "Veg",
    category: ["Main Course", "Traditional"],
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1506700403745-f5e9812f742a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2370&q=80",
    ingredients: [
      "1 large eggplant (baingan)",
      "2 tbsp oil",
      "1 tsp cumin seeds",
      "1 large onion, finely chopped",
      "1 tbsp ginger-garlic paste",
      "2 green chilies, finely chopped",
      "2 tomatoes, finely chopped",
      "1/2 tsp turmeric powder",
      "1 tsp red chili powder",
      "1 tsp garam masala",
      "Salt to taste",
      "2 tbsp fresh coriander, chopped"
    ],
    steps: [
      "Roast the eggplant directly over a flame or in an oven until the skin is charred and the flesh is soft.",
      "Let it cool, then peel off the skin and mash the flesh. Keep aside.",
      "Heat oil in a pan. Add cumin seeds and let them splutter.",
      "Add chopped onions and sauté until golden brown.",
      "Add ginger-garlic paste and green chilies. Sauté for 2 minutes.",
      "Add chopped tomatoes and cook until they soften.",
      "Add turmeric powder, red chili powder, and salt. Mix well.",
      "Add the mashed eggplant and mix thoroughly.",
      "Cook for 10-15 minutes on low heat, stirring occasionally.",
      "Add garam masala and fresh coriander. Mix well.",
      "Serve hot with roti or rice."
    ],
    prepTime: "10 min",
    cookTime: "30 min",
    servings: 4,
    tags: ["punjab", "veg", "easy", "smoky", "eggplant", "vegan"],
    description: "A smoky, flavorful dish made from roasted and mashed eggplant cooked with spices and herbs.",
    backstory: "Baingan Bharta is a rustic dish that originated in rural Punjab where farm-fresh vegetables were roasted directly over wood fires. The smokiness from the open flame gives it a distinctive flavor that connects to its rural origins. It's a perfect example of how simple ingredients can create deeply flavored dishes."
  },
  {
    id: "chana-masala",
    name: "Chana Masala",
    state: "North India",
    type: "Veg",
    category: ["Main Course", "Everyday"],
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2370&q=80",
    ingredients: [
      "2 cups chickpeas, soaked overnight and boiled",
      "2 tbsp oil",
      "1 tsp cumin seeds",
      "1 large onion, finely chopped",
      "1 tbsp ginger-garlic paste",
      "2 tomatoes, pureed",
      "1/2 tsp turmeric powder",
      "1 tsp red chili powder",
      "1 tsp coriander powder",
      "1/2 tsp garam masala",
      "1/2 tsp dried mango powder (amchur)",
      "1/2 tsp cumin powder",
      "Salt to taste",
      "Fresh coriander leaves for garnish",
      "Lemon wedges to serve"
    ],
    steps: [
      "Heat oil in a pan. Add cumin seeds and let them splutter.",
      "Add chopped onions and sauté until golden brown.",
      "Add ginger-garlic paste and sauté for 2 minutes.",
      "Add tomato puree and cook until oil separates.",
      "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well.",
      "Add boiled chickpeas and 1 cup of water. Mix well.",
      "Cover and simmer for 15-20 minutes until the gravy thickens.",
      "Add garam masala, dried mango powder, and cumin powder. Mix well.",
      "Garnish with fresh coriander leaves.",
      "Serve hot with rice, roti, or naan, accompanied by lemon wedges."
    ],
    prepTime: "Overnight (soaking) + 10 min",
    cookTime: "30 min",
    servings: 4,
    tags: ["north india", "veg", "easy", "chickpeas", "vegan", "protein"],
    description: "A popular North Indian curry made with chickpeas cooked in a spicy tomato-based sauce.",
    backstory: "Chana Masala is a ubiquitous dish across North India, especially popular in the streets of Delhi and Punjab. Its popularity stems from being both nutritious and affordable. During the development of vegetarianism in India, chickpeas became an important source of protein, making this dish a staple in vegetarian households."
  },
  {
    id: "kaju-katli",
    name: "Kaju Katli",
    state: "Pan-Indian",
    type: "Veg",
    category: ["Dessert", "Sweet"],
    festival: ["Diwali", "Raksha Bandhan"],
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1601303516534-6018108439b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2370&q=80",
    ingredients: [
      "2 cups cashew nuts",
      "1 cup sugar",
      "1/2 cup water",
      "2 tbsp ghee",
      "1/4 tsp cardamom powder",
      "Silver varq (edible silver foil) for garnish (optional)"
    ],
    steps: [
      "Grind cashew nuts to a fine powder.",
      "In a pan, mix sugar and water. Heat until the sugar dissolves completely.",
      "Add the cashew powder to the sugar syrup and mix well.",
      "Add ghee and cardamom powder. Mix continuously to avoid lumps.",
      "Cook on low heat until the mixture thickens and starts to leave the sides of the pan.",
      "Transfer to a greased plate and spread evenly.",
      "Cover with silver varq if using.",
      "When slightly cool, cut into diamond shapes.",
      "Allow to cool completely before serving."
    ],
    prepTime: "15 min",
    cookTime: "20 min",
    servings: 20,
    tags: ["sweet", "festival", "diwali", "cashew", "moderate", "vegetarian"],
    description: "A popular Indian sweet made from cashew nuts, sugar, and cardamom, typically served during festivals.",
    backstory: "Kaju Katli is one of India's most beloved mithai (sweets). Its origin is traced back to the Mughal era when nuts and dried fruits were fashioned into elaborate desserts for the royal court. Today, it's an essential part of Diwali gifting and is considered a premium sweet due to the cost of cashews."
  },
  {
    id: "chakli",
    name: "Chakli",
    state: "Maharashtra",
    type: "Veg",
    category: ["Snack", "Savory"],
    festival: ["Diwali", "Ganesh Chaturthi"],
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2370&q=80",
    ingredients: [
      "1 cup rice flour",
      "1/4 cup gram flour (besan)",
      "2 tbsp hot oil",
      "1 tsp red chili powder",
      "1/2 tsp turmeric powder",
      "1 tsp cumin seeds",
      "1 tsp sesame seeds",
      "A pinch of asafoetida (hing)",
      "Salt to taste",
      "Water as needed",
      "Oil for deep frying"
    ],
    steps: [
      "In a bowl, mix rice flour, gram flour, red chili powder, turmeric powder, cumin seeds, sesame seeds, asafoetida, and salt.",
      "Add hot oil and mix well to create a crumbly texture.",
      "Gradually add water and knead into a stiff dough.",
      "Fill the dough in a chakli press or a piping bag with a star nozzle.",
      "Press the dough in a spiral shape onto a greased surface or directly into hot oil.",
      "Deep fry on medium heat until golden brown and crispy.",
      "Drain on paper towels and let cool completely.",
      "Store in an airtight container once completely cooled."
    ],
    prepTime: "20 min",
    cookTime: "30 min",
    servings: 20,
    tags: ["maharashtra", "veg", "diwali", "snack", "deep fried", "spiral", "crunchy"],
    description: "A spiral-shaped, crunchy savory snack made from rice flour and gram flour, seasoned with spices.",
    backstory: "Chakli is a traditional Maharashtrian snack that has been part of festival preparations for centuries. Its distinctive spiral shape is created using a special tool called the 'chakli press.' Before modern refrigeration, these dry, crispy snacks were made in large batches during festivals as they could be stored for weeks without spoiling."
  },
  {
    id: "pakora",
    name: "Pakora",
    state: "Pan-Indian",
    type: "Veg",
    category: ["Snack", "Street Food"],
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1557641594-e80778e4d961?ixlib=rb-4.0.3&auto=format&fit=crop&w=2370&q=80",
    ingredients: [
      "1 cup gram flour (besan)",
      "1/4 tsp baking soda",
      "1/2 tsp red chili powder",
      "1/2 tsp cumin powder",
      "1/4 tsp turmeric powder",
      "Salt to taste",
      "Water as needed",
      "Vegetables of choice (potato, onion, spinach, cauliflower, etc.), sliced or chopped",
      "Oil for deep frying",
      "Chaat masala for sprinkling"
    ],
    steps: [
      "In a bowl, mix gram flour, baking soda, red chili powder, cumin powder, turmeric powder, and salt.",
      "Gradually add water and whisk to form a smooth, thick batter.",
      "Dip the vegetable pieces in the batter, coating them evenly.",
      "Heat oil in a deep pan for frying.",
      "Drop the battered vegetables into the hot oil and fry until golden brown and crispy.",
      "Drain on paper towels to remove excess oil.",
      "Sprinkle with chaat masala and serve hot with mint chutney or tamarind chutney."
    ],
    prepTime: "15 min",
    cookTime: "15 min",
    servings: 4,
    tags: ["pan-indian", "veg", "street food", "monsoon", "easy", "crispy"],
    description: "Crispy, deep-fried fritters made from gram flour batter and various vegetables, perfect for rainy days.",
    backstory: "Pakoras are the quintessential Indian monsoon snack, enjoyed with hot tea across the country when the rains arrive. This ancient snack appears in medieval texts and was a favorite in Mughal courts. The technique of coating ingredients in chickpea batter before frying has been a cooking method in Indian kitchens for centuries."
  },
  {
    id: "samosa",
    name: "Samosa",
    state: "North India",
    type: "Veg",
    category: ["Snack", "Street Food"],
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=2370&q=80",
    ingredients: [
      "For the dough:",
      "2 cups all-purpose flour",
      "1/4 cup ghee or oil",
      "1/2 tsp carom seeds (ajwain)",
      "Salt to taste",
      "Water as needed",
      "For the filling:",
      "3 medium potatoes, boiled and mashed",
      "1/2 cup green peas, boiled",
      "2 tbsp oil",
      "1 tsp cumin seeds",
      "1 tsp ginger, finely chopped",
      "1-2 green chilies, finely chopped",
      "1/2 tsp turmeric powder",
      "1 tsp red chili powder",
      "1 tsp garam masala",
      "1 tsp dried mango powder (amchur)",
      "1/4 cup coriander leaves, chopped",
      "Salt to taste",
      "Oil for deep frying"
    ],
    steps: [
      "For the dough: Mix flour, ghee, carom seeds, and salt. Add water gradually to form a firm dough. Cover and rest for 30 minutes.",
      "For the filling: Heat oil in a pan. Add cumin seeds and let them splutter.",
      "Add ginger and green chilies. Sauté for a minute.",
      "Add boiled peas, turmeric powder, red chili powder, garam masala, dried mango powder, and salt. Mix well.",
      "Add mashed potatoes and coriander leaves. Mix thoroughly and cook for 2-3 minutes. Let it cool.",
      "Divide the dough into small balls. Roll each ball into an oval shape.",
      "Cut the oval in half to form two semicircles.",
      "Take one semicircle, fold it into a cone shape, and fill with the potato mixture.",
      "Seal the edges with water and press firmly.",
      "Heat oil in a deep pan. Fry the samosas on medium heat until golden brown and crispy.",
      "Serve hot with mint chutney and tamarind chutney."
    ],
    prepTime: "30 min",
    cookTime: "30 min",
    servings: 8,
    tags: ["north india", "veg", "street food", "snack", "moderate", "crispy"],
    description: "A popular triangular pastry filled with spiced potatoes and peas, deep-fried until crispy and golden.",
    backstory: "Samosas came to India via Middle Eastern traders in the 13th or 14th century. Originally filled with minced meat, they evolved to include vegetarian fillings as they spread across India. The word 'samosa' is derived from the Persian word 'sanbosag'. Today, they're one of India's most recognized snacks globally."
  }
];

export const STATES = [
  {
    name: "Punjab",
    description: "Known for its rich, buttery curries and hearty dishes that reflect its agricultural abundance.",
    famous_dishes: ["Butter Chicken", "Sarson da Saag", "Chole Bhature"]
  },
  {
    name: "Gujarat",
    description: "Features predominantly vegetarian cuisine with a balance of sweet, salty, and spicy flavors.",
    famous_dishes: ["Dhokla", "Thepla", "Khandvi"]
  },
  {
    name: "Tamil Nadu",
    description: "Characterized by the use of rice, legumes, and coconut, with dishes ranging from mildly spiced to fiery hot.",
    famous_dishes: ["Pongal", "Dosa", "Idli Sambar"]
  },
  {
    name: "Jammu & Kashmir",
    description: "Influenced by Central Asian and Persian cuisines, known for its aromatic and slow-cooked dishes.",
    famous_dishes: ["Rogan Josh", "Yakhni", "Dum Aloo"]
  },
  {
    name: "Maharashtra",
    description: "Combines both mild and spicy flavors, with a variety of street foods and seafood along the coastal regions.",
    famous_dishes: ["Vada Pav", "Misal Pav", "Puran Poli"]
  },
  {
    name: "North India",
    description: "Encompasses cuisines from multiple northern states, characterized by rich gravies and bread varieties.",
    famous_dishes: ["Chana Masala", "Samosa", "Paneer Tikka"]
  },
  {
    name: "Pan-Indian",
    description: "Dishes that are popular across multiple states in India, often with regional variations.",
    famous_dishes: ["Pakora", "Kaju Katli", "Biryani"]
  }
];

export const CATEGORIES = [
  "Main Course",
  "Breakfast",
  "Snack",
  "Dessert",
  "Street Food",
  "Traditional",
  "Festival Food",
  "Everyday",
  "Sweet",
  "Savory"
];

export const FESTIVALS = [
  "Diwali",
  "Holi",
  "Navratri",
  "Baisakhi",
  "Pongal Festival",
  "Ganesh Chaturthi",
  "Lohri",
  "Onam",
  "Raksha Bandhan"
];

export const DIFFICULTIES = ["Easy", "Moderate", "Expert"];

export const TYPES = ["Veg", "Non-Veg"];
