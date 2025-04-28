
import { Leaf, Award, CheckCircle2 } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">О нашей маслодельне</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы создаём настоящее ремесленное масло с заботой о традициях и качестве
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Leaf className="text-olive-dark h-6 w-6" />}
            title="Натуральные ингредиенты"
            description="Мы используем только свежие сливки от коров с экологически чистых ферм Подмосковья."
          />
          
          <FeatureCard 
            icon={<Award className="text-olive-dark h-6 w-6" />}
            title="Традиционные рецепты"
            description="Наши технологии производства основаны на традиционных рецептах, передаваемых из поколения в поколение."
          />
          
          <FeatureCard 
            icon={<CheckCircle2 className="text-olive-dark h-6 w-6" />}
            title="Высокое качество"
            description="Каждая партия масла проходит строгий контроль качества, чтобы вы получили лучший продукт."
          />
        </div>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-8">
              <ProcessStep 
                number="1"
                title="Отбор свежих сливок"
                description="Мы тщательно отбираем сливки только от проверенных ферм, где коровы питаются натуральными кормами."
              />
              
              <ProcessStep 
                number="2"
                title="Традиционное взбивание"
                description="Сливки взбиваются небольшими партиями с использованием традиционных методов, что обеспечивает неповторимый вкус."
              />
              
              <ProcessStep 
                number="3"
                title="Ручная формовка"
                description="Каждый брусок масла формуется вручную, сохраняя текстуру и вкусовые качества настоящего крафтового продукта."
              />
            </div>
          </div>
          
          <div>
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573566835367-110a82d73773?ixlib=rb-4.0.3&w=800&auto=format&fit=crop" 
                alt="Процесс производства масла" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Дополнительные компоненты для раздела About
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-butter-light rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">
        {description}
      </p>
    </div>
  );
};

const ProcessStep = ({ number, title, description }: { number: string, title: string, description: string }) => {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 rounded-full bg-butter flex items-center justify-center flex-shrink-0 mt-1">
        <span className="font-semibold text-foreground">{number}</span>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
