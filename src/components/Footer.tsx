import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--header-bg))] text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/account" className="hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/account" className="hover:text-accent transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/account" className="hover:text-accent transition-colors">
                  Order Tracking
                </Link>
              </li>
              <li>
                <Link to="/account" className="hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/account" className="hover:text-accent transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/account" className="hover:text-accent transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/account" className="hover:text-accent transition-colors">
                  Store Locator
                </Link>
              </li>
              <li>
                <Link to="/account" className="hover:text-accent transition-colors">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/new-trending" className="hover:text-accent transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/brands" className="hover:text-accent transition-colors">
                  Brands
                </Link>
              </li>
              <li>
                <Link to="/sale" className="hover:text-accent transition-colors">
                  Sale
                </Link>
              </li>
              <li>
                <Link to="/gift-guide" className="hover:text-accent transition-colors">
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Rewards Program</h3>
            <p className="text-sm mb-4">Join our rewards program and get exclusive perks!</p>
            <Link to="/account" className="inline-block bg-accent text-[hsl(var(--promo-text))] px-6 py-2 rounded font-semibold hover:bg-accent/90 transition-colors">
              Join Now
            </Link>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 Journeys. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
