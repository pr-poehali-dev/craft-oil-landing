
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "@/components/ProductCard";

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const ProductsSection = () => {
  const products: Product[] = [
    {
      id: 1,
      title: "Сливочное масло",
      description: "Натуральное сливочное масло из фермерских сливок, 82.5% жирности",
      price: "390",
      image: "https://images.unsplash.com/photo-1589985270958-379fc2392beb?ixlib=rb-4.0.3&w=600&auto=format&fit=crop",
      category: "Классика"
    },
    {
      id: 2,
      title: "Масло с травами",
      description: "Сливочное масло с добавлением органических трав и чеснока",
      price: "420",
      image: "https://images.unsplash.com/photo-1633383718081-22ac93e3c9ba?ixlib=rb-4.0.3&w=600&auto=format&fit=crop",
      category: "Новинка"
    },
    {
      id: 3,
      title: "Топлёное масло",
      description: "Традиционное топлёное масло по старинному рецепту, 99% жирности",
      price: "450",
      image: "https://images.unsplash.com/photo-1592013107445-04bf2eef948f?ixlib=rb-4.0.3&w=600&auto=format&fit=crop",
      category: "Премиум"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-cream-light">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Наша продукция</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Попробуйте разнообразие вкусов нашего крафтового масла, созданного с любовью к деталям
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-butter text-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-medium mb-2">{product.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">{product.price} ₽</span>
                  <Button className="bg-olive hover:bg-olive-dark">В корзину</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <TestimonialCard 
                  quote="Лучшее сливочное масло, которое я когда-либо пробовала! Настоящий вкус детства, без химических добавок. Теперь покупаю только у вас!"
                  author="Елена Михайлова"
                  role="Постоянный клиент"
                  initials="ЕМ"
                />
              </CarouselItem>
              
              <CarouselItem>
                <TestimonialCard 
                  quote="Перешли на ваше масло всей семьей. Топлёное масло — это что-то невероятное! Теперь даже простая каша становится праздничным блюдом."
                  author="Александр Соколов"
                  role="Шеф-повар"
                  initials="АС"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-white" />
            <CarouselNext className="right-0 bg-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ quote, author, role, initials }: { 
  quote: string, 
  author: string, 
  role: string, 
  initials: string 
}) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-sm border border-border">
      <p className="text-lg mb-6 italic text-foreground">
        "{quote}"
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-butter mr-4 flex items-center justify-center text-foreground font-semibold">{initials}</div>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
