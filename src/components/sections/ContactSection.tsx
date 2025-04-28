
import { Button } from "@/components/ui/button";
import { Truck } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Свяжитесь с нами</h2>
            <p className="text-muted-foreground mb-8 max-w-xl">
              Хотите заказать наше масло или у вас есть вопросы? Мы всегда рады помочь и ответить на все ваши вопросы.
            </p>
            
            <div className="space-y-6">
              <ContactItem 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-butter-dark">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                }
                text="+7 (495) 123-45-67" 
              />
              
              <ContactItem 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-butter-dark">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                }
                text="info@maslodar.ru" 
              />
              
              <ContactItem 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-butter-dark">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                }
                text="г. Москва, ул. Маслодельная, д. 12" 
              />
              
              <ContactItem 
                icon={<Truck className="text-butter-dark h-5 w-5" />} 
                text="Доставка по Москве и области" 
              />
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-md border border-border">
            <h3 className="text-xl font-semibold mb-4">Отправить сообщение</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => {
  return (
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full bg-butter-light flex items-center justify-center mr-4">
        {icon}
      </div>
      <p className="text-foreground">{text}</p>
    </div>
  );
};

const ContactForm = () => {
  return (
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
  );
};

export default ContactSection;
