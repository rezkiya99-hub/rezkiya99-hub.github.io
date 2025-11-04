import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
}

const ProductCard = ({ id, name, price, image }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`}>
      <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300">
        <CardContent className="p-0">
          <div className="aspect-square overflow-hidden bg-secondary">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <h3 className="font-medium text-sm mb-2 line-clamp-2">{name}</h3>
            <p className="font-bold text-lg">${price.toFixed(2)}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
