
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-cream-light to-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1 space-y-4">
            <span className="inline-block bg-butter text-foreground px-4 py-1.5 rounded-full text-sm font-medium">Натуральный продукт</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">Крафтовое масло из&nbsp;свежих сливок</h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl">
              Мы производим настоящее крафтовое масло из сливок с частных ферм без добавок и консервантов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-butter hover:bg-butter-dark text-foreground">
                Попробовать сейчас
              </Button>
              <Button size="lg" variant="outline" className="border-butter text-foreground">
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-olive-light rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
              <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-butter-light rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1610400975131-5286b9f7ee58?ixlib=rb-4.0.3&w=800&auto=format&fit=crop" 
                alt="Крафтовое масло" 
                className="relative rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
