import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const ProductCard = ({ title, description, price, image, category }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden border-border hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-butter text-foreground px-3 py-1 rounded-full text-sm font-medium">
          {category}
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-medium">{title}</CardTitle>
        <CardDescription className="text-muted-foreground line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-lg font-semibold">{price} ₽</div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-olive hover:bg-olive-dark">Добавить в корзину</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;