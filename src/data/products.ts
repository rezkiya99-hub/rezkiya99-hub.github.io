export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  brand: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "New Balance 9060 Athletic Shoe - Arid Stone / Black Cement",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
    category: "women",
    brand: "New Balance",
    description: "Classic athletic shoe with premium materials and comfort."
  },
  {
    id: "2",
    name: "Mens Jelly Roll x HEYUDE Bradley Boot - Black",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?w=800&q=80",
    category: "men",
    brand: "HEYUDE",
    description: "Stylish boot perfect for any occasion."
  },
  {
    id: "3",
    name: "New Balance 9060 Athletic Shoe - Sea Salt / Concrete",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
    category: "women",
    brand: "New Balance",
    description: "Fresh colorway of the popular 9060 silhouette."
  },
  {
    id: "4",
    name: "Womens adidas Samba OG Athletic Shoe - Gold Metallic / White / Core White",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800&q=80",
    category: "women",
    brand: "adidas",
    description: "Iconic Samba design with modern metallic finish."
  },
  {
    id: "5",
    name: "Womens adidas Samba OG Athletic Shoe - Silver Metallic / White / Core White",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=80",
    category: "women",
    brand: "adidas",
    description: "Sleek silver metallic Samba for a bold look."
  },
  {
    id: "6",
    name: "Womens UGG® Classic Ultra Mini Boot - Caribou",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80",
    category: "women",
    brand: "UGG",
    description: "Classic comfort in a mini silhouette."
  },
  {
    id: "7",
    name: "Mens Nike Air Force 1 '07 Athletic Shoe - White",
    price: 115.00,
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&q=80",
    category: "men",
    brand: "Nike",
    description: "Timeless basketball icon in crisp white."
  },
  {
    id: "8",
    name: "Womens Converse Chuck Taylor All Star Hi Sneaker - Black",
    price: 65.00,
    image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=800&q=80",
    category: "women",
    brand: "Converse",
    description: "The original Chuck Taylor in classic black."
  },
  {
    id: "9",
    name: "Mens Vans Old Skool Skate Shoe - Black / White",
    price: 70.00,
    image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=800&q=80",
    category: "men",
    brand: "Vans",
    description: "Legendary skate shoe with iconic side stripe."
  },
  {
    id: "10",
    name: "Kids adidas Superstar Athletic Shoe - White / Black",
    price: 65.00,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
    category: "kids",
    brand: "adidas",
    description: "Classic shell-toe design for kids."
  }
];

export const getProductById = (id: string) => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: string) => {
  return products.filter(p => p.category === category);
};

export const getProductsByBrand = (brand: string) => {
  return products.filter(p => p.brand === brand);
};
