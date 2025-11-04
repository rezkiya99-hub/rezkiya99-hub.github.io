import { Link } from "react-router-dom";
import { Search, MapPin, User, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-[hsl(var(--header-bg))] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex gap-4">
            <Link to="/" className="hover:text-accent transition-colors">
              Journeys
            </Link>
            <Link to="/kidz" className="hover:text-accent transition-colors">
              Journeys Kidz
            </Link>
          </div>
          <div className="flex gap-4 items-center">
            <Link to="/account" className="hover:text-accent transition-colors">
              Order Tracking
            </Link>
            <Link to="/account" className="hover:text-accent transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-background border-b">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <Link to="/" className="text-2xl font-bold">
            Journeys
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/new-trending" className="hover:text-accent transition-colors font-medium">
              New & Trending
            </Link>
            <Link to="/brands" className="hover:text-accent transition-colors font-medium">
              Brands
            </Link>
            <Link to="/women" className="hover:text-accent transition-colors font-medium">
              Women
            </Link>
            <Link to="/men" className="hover:text-accent transition-colors font-medium">
              Men
            </Link>
            <Link to="/kidz" className="hover:text-accent transition-colors font-medium">
              Kidz
            </Link>
            <Link to="/sale" className="hover:text-accent transition-colors font-medium text-destructive">
              Sale
            </Link>
            <Link to="/gift-guide" className="hover:text-accent transition-colors font-medium">
              Gift Guide
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MapPin className="h-5 w-5" />
            </Button>
            <Link to="/account">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Promo banner */}
      <div className="bg-[hsl(var(--promo-bg))] text-[hsl(var(--promo-text))] py-2 px-4 text-center">
        <p className="text-sm font-semibold">
          Get $10 off $75 + Free Shipping{" "}
          <Link to="/account" className="underline hover:no-underline ml-2">
            Join Rewards For Free
          </Link>
        </p>
      </div>
    </header>
  );
};

export default Header;
