import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCarousel from "@/components/ProductCarousel";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  const newArrivals = products.slice(0, 5);
  const trending = products.slice(5, 10);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] bg-secondary flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1556906781-9cba4a9bc48c?w=1920&q=80"
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg">
              Step Into Style
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-lg">
              Discover the latest trends in footwear
            </p>
            <Link to="/new-trending">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-[hsl(var(--promo-text))] font-bold">
                Shop New Arrivals
              </Button>
            </Link>
          </div>
        </section>

        {/* New Arrivals */}
        <ProductCarousel title="NEW ARRIVALS" products={newArrivals} />

        {/* Featured Brands */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">FEATURED BRANDS</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["Nike", "adidas", "Vans", "Converse", "New Balance", "UGG", "Puma", "HEYUDE"].map((brand) => (
                <Link
                  key={brand}
                  to="/brands"
                  className="aspect-square bg-background rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow"
                >
                  <span className="text-xl font-bold">{brand}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Trending */}
        <ProductCarousel title="TRENDING NOW" products={trending} />

        {/* Categories */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">SHOP BY CATEGORY</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/women" className="relative h-80 rounded-lg overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80"
                  alt="Women"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white">WOMEN</h3>
                </div>
              </Link>
              <Link to="/men" className="relative h-80 rounded-lg overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80"
                  alt="Men"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white">MEN</h3>
                </div>
              </Link>
              <Link to="/kidz" className="relative h-80 rounded-lg overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1514090458221-65bb69cf63e5?w=800&q=80"
                  alt="Kids"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white">KIDZ</h3>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
