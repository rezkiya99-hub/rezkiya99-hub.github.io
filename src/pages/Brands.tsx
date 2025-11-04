import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Brands = () => {
  const brands = [
    "Nike", "adidas", "Vans", "Converse", "New Balance", "UGG", 
    "Puma", "HEYUDE", "Reebok", "Jordan", "Timberland", "Dr. Martens"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">Shop by Brand</h1>
          <p className="text-muted-foreground mb-8">
            Explore our collection of top footwear brands
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {brands.map((brand) => (
              <Link
                key={brand}
                to={`/brands/${brand.toLowerCase()}`}
                className="aspect-square bg-secondary rounded-lg flex items-center justify-center hover:shadow-lg transition-all hover:bg-accent/10"
              >
                <span className="text-2xl font-bold">{brand}</span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Brands;
