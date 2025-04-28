import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { CheckCircle2, Leaf, Award, Truck } from "lucide-react";

const Index = () => {
  const products = [
    {
      id: 1,
      title: "Сливочное масло",
      description: "Натуральное сливочное масло из фермерских сливок, 82.5% жирности",
      price: "390",
      image: "https://images.unsplash.com/photo-1589985270958-379fc2392beb?q=80&w=600&auto=format&fit=crop",
      category: "Классика"
    },
    {
      id: 2,
      title: "Масло с травами",
      description: "Сливочное масло с добавлением органических трав и чеснока",
      price: "420",
      image: "https://images.unsplash.com/photo-1633383718081-22ac93e3c9ba?q=80&w=600&auto=format&fit=crop",
      category: "Новинка"
    },
    {
      id: 3,
      title: "Топлёное масло",
      description: "Традиционное топлёное масло по старинному рецепту, 99% жирности",
      price: "450",
      image: "https://images.unsplash.com/photo-1592013107445-04bf2eef948f?q=80&w=600&auto=format&fit=crop",
      category: "Премиум"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-gradient-to-b from-cream-light to-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex-1 space-y-4">
              <span className="inline-block bg-butter text-foreground px-4 py-1.5 rounded-full text-sm font-medium">Натуральный продукт</span>
              <h1 className="font-buttermilk text-4xl md:text-5xl lg:text-6xl text-foreground">Крафтовое масло из&nbsp;свежих сливок</h1>
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
                <div className="absolute -top-6 -left-6 w-72 h-72 bg-olive-light rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float"></div>
                <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-butter-light rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float animation-delay-2000"></div>
                <img 
                  src="https://images.unsplash.com/photo-1610400975131-5286b9f7ee58?q=80&w=800&auto=format&fit=crop" 
                  alt="Крафтовое масло" 
                  className="relative rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 lg:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-buttermilk text-3xl md:text-4xl text-foreground mb-4">О нашей маслодельне</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы создаём настоящее ремесленное масло с заботой о традициях и качестве
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-butter-light rounded-full flex items-center justify-center mb-4">
                <Leaf className="text-olive-dark h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Натуральные ингредиенты</h3>
              <p className="text-muted-foreground">
                Мы используем только свежие сливки от коров с экологически чистых ферм Подмосковья.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-butter-light rounded-full flex items-center justify-center mb-4">
                <Award className="text-olive-dark h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Традиционные рецепты</h3>
              <p className="text-muted-foreground">
                Наши технологии производства основаны на традиционных рецептах, передаваемых из поколения в поколение.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-butter-light rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="text-olive-dark h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Высокое качество</h3>
              <p className="text-muted-foreground">
                Каждая партия масла проходит строгий контроль качества, чтобы вы получили лучший продукт.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 lg:py-24 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-buttermilk text-3xl md:text-4xl text-foreground mb-4">Наша продукция</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Попробуйте разнообразие вкусов нашего крафтового масла, созданного с любовью к деталям
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard 
                key={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-butter hover:bg-butter-dark text-foreground">
              Смотреть весь ассортимент
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 lg:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-buttermilk text-3xl md:text-4xl text-foreground mb-4">Как мы делаем масло</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Производство настоящего крафтового масла — это искусство, требующее мастерства и внимания к деталям
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-butter flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-semibold text-foreground">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Отбор свежих сливок</h3>
                    <p className="text-muted-foreground">
                      Мы тщательно отбираем сливки только от проверенных ферм, где коровы питаются натуральными кормами.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-butter flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-semibold text-foreground">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Традиционное взбивание</h3>
                    <p className="text-muted-foreground">
                      Сливки взбиваются небольшими партиями с использованием традиционных методов, что обеспечивает неповторимый вкус.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-butter flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-semibold text-foreground">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ручная формовка</h3>
                    <p className="text-muted-foreground">
                      Каждый брусок масла формуется вручную, сохраняя текстуру и вкусовые качества настоящего крафтового продукта.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573566835367-110a82d73773?q=80&w=800&auto=format&fit=crop" 
                  alt="Процесс производства масла" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-cream-light">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-buttermilk text-3xl md:text-4xl text-foreground mb-4">Отзывы наших клиентов</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нашем масле те, кто уже попробовал его вкус
            </p>
          </div>
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="bg-background rounded-lg p-8 shadow-sm border border-border">
                  <p className="text-lg mb-6 italic text-foreground">
                    "Лучшее сливочное масло, которое я когда-либо пробовала! Настоящий вкус детства, без химических добавок. Теперь покупаю только у вас!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-butter mr-4 flex items-center justify-center text-foreground font-semibold">ЕМ</div>
                    <div>
                      <p className="font-semibold">Елена Михайлова</p>
                      <p className="text-sm text-muted-foreground">Постоянный клиент</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              
              <CarouselItem>
                <div className="bg-background rounded-lg p-8 shadow-sm border border-border">
                  <p className="text-lg mb-6 italic text-foreground">
                    "Перешли на ваше масло всей семьей. Топлёное масло — это что-то невероятное! Теперь даже простая каша становится праздничным блюдом."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-butter mr-4 flex items-center justify-center text-foreground font-semibold">АС</div>
                    <div>
                      <p className="font-semibold">Александр Соколов</p>
                      <p className="text-sm text-muted-foreground">Шеф-повар</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              
              <CarouselItem>
                <div className="bg-background rounded-lg p-8 shadow-sm border border-border">
                  <p className="text-lg mb-6 italic text-foreground">
                    "Заказываю для своего кафе уже больше года. Клиенты в восторге от выпечки на вашем масле. Качество всегда на высоте!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-butter mr-4 flex items-center justify-center text-foreground font-semibold">МК</div>
                    <div>
                      <p className="font-semibold">Мария Климова</p>
                      <p className="text-sm text-muted-foreground">Владелец кафе</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-white" />
            <CarouselNext className="right-0 bg-white" />
          </Carousel>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-buttermilk text-3xl md:text-4xl text-foreground mb-4">Свяжитесь с нами</h2>
              <p className="text-muted-foreground mb-8 max-w-xl">
                Хотите заказать наше масло или у вас есть вопросы? Мы всегда рады помочь и ответить на все ваши вопросы.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-butter-light flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-butter-dark">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <p className="text-foreground">+7 (495) 123-45-67</p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-butter-light flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-butter-dark">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <p className="text-foreground">info@maslodar.ru</p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-butter-light flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-butter-dark">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <p className="text-foreground">г. Москва, ул. Маслодельная, д. 12</p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-butter-light flex items-center justify-center mr-4">
                    <Truck className="text-butter-dark h-5 w-5" />
                  </div>
                  <p className="text-foreground">Доставка по Москве и области</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-8 shadow-md border border-border">
              <h3 className="text-xl font-semibold mb-4">Отправить сообщение</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Имя</label>
                    <input id="name" type="text" className="w-full px-3 py-2 border border-border rounded-md" placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                    <input id="email" type="email" className="w-full px-3 py-2 border border-border rounded-md" placeholder="Ваш email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">Тема</label>
                  <input id="subject" type="text" className="w-full px-3 py-2 border border-border rounded-md" placeholder="Тема сообщения" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Сообщение</label>
                  <textarea id="message" rows={4} className="w-full px-3 py-2 border border-border rounded-md" placeholder="Ваше сообщение"></textarea>
                </div>
                <Button type="submit" className="w-full bg-butter hover:bg-butter-dark text-foreground">
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-cream-dark text-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-buttermilk text-2xl mb-4">МаслоДар</h3>
              <p className="text-muted-foreground mb-4">
                Крафтовое масло из натуральных ингредиентов, созданное с любовью и заботой о традициях.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Меню</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Главная</a></li>
                <li><a href="#about" className="text-muted-foreground hover:text-primary">О нас</a></li>
                <li><a href="#products" className="text-muted-foreground hover:text-primary">Продукция</a></li>
                <li><a href="#process" className="text-muted-foreground hover:text-primary">Производство</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-primary">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Контакты</h4>
              <ul className="space-y-2">
                <li className="text-muted-foreground">г. Москва, ул. Маслодельная, д. 12</li>
                <li className="text-muted-foreground">+7 (495) 123-45-67</li>
                <li className="text-muted-foreground">info@maslodar.ru</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Подписаться на новости</h4>
              <div className="flex">
                <input type="email" placeholder="Ваш email" className="w-full px-3 py-2 rounded-l-md border border-border" />
                <Button className="rounded-l-none bg-butter hover:bg-butter-dark text-foreground">
                  OK
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Подпишитесь на нашу рассылку и получите скидку 10% на первый заказ.
              </p>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} МаслоДар. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;