import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";

const GiftGuide = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="bg-gradient-to-r from-accent/20 to-accent/40 py-12 text-center mb-8">
          <h1 className="text-5xl font-bold mb-4">Gift Guide</h1>
          <p className="text-xl mb-6">Find the perfect gift for everyone on your list</p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-[hsl(var(--promo-text))] font-bold">
            Shop Gift Cards
          </Button>
        </div>

        <div className="container mx-auto px-4 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">For Her</h3>
              <p className="text-muted-foreground mb-4">Stylish picks she'll love</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">For Him</h3>
              <p className="text-muted-foreground mb-4">Classic styles he needs</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">For Kids</h3>
              <p className="text-muted-foreground mb-4">Fun shoes they'll want to wear</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GiftGuide;
