
import { Button } from "@/components/ui/button";

interface FooterProps {
  setActiveSection: (section: string) => void;
}

const Footer = ({ setActiveSection }: FooterProps) => {
  return (
    <footer className="py-12 bg-cream-dark text-foreground">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">МаслоДар</h3>
            <p className="text-muted-foreground mb-4">
              Крафтовое масло из натуральных ингредиентов, созданное с любовью и заботой о традициях.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li><button onClick={() => setActiveSection("hero")} className="text-muted-foreground hover:text-primary">Главная</button></li>
              <li><button onClick={() => setActiveSection("about")} className="text-muted-foreground hover:text-primary">О нас</button></li>
              <li><button onClick={() => setActiveSection("products")} className="text-muted-foreground hover:text-primary">Продукция</button></li>
              <li><button onClick={() => setActiveSection("contact")} className="text-muted-foreground hover:text-primary">Контакты</button></li>
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
  );
};

export default Footer;
