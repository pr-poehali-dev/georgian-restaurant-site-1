import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = {
    khachapuri: [
      { name: 'Хачапури по-аджарски', price: 450, description: 'Лодочка из теста с сыром и яйцом' },
      { name: 'Имеретинский хачапури', price: 380, description: 'Круглый закрытый хачапури с сыром' },
      { name: 'Мегрельский хачапури', price: 420, description: 'С сыром внутри и снаружи' },
    ],
    khinkali: [
      { name: 'Хинкали с мясом', price: 90, description: 'Классические грузинские пельмени (1 шт)' },
      { name: 'Хинкали с грибами', price: 85, description: 'Вегетарианский вариант (1 шт)' },
      { name: 'Хинкали с сыром', price: 80, description: 'С сулугуни (1 шт)' },
    ],
    shashlik: [
      { name: 'Шашлык из баранины', price: 650, description: 'Сочное мясо на углях' },
      { name: 'Шашлык из телятины', price: 580, description: 'Нежная телятина' },
      { name: 'Шашлык из курицы', price: 420, description: 'Куриное филе в маринаде' },
    ],
    salads: [
      { name: 'Салат по-грузински', price: 350, description: 'Свежие овощи с орехами' },
      { name: 'Бадриджани', price: 380, description: 'Баклажаны с орехово-чесночной пастой' },
      { name: 'Лобио', price: 320, description: 'Фасоль в томатном соусе' },
    ],
    desserts: [
      { name: 'Чурчхела', price: 250, description: 'Традиционная грузинская сладость' },
      { name: 'Пеламуши', price: 280, description: 'Виноградный пудинг' },
      { name: 'Гозинаки', price: 220, description: 'Орехи в меду' },
    ],
  };

  const reviews = [
    { name: 'Анна К.', text: 'Потрясающая атмосфера Грузии! Хачапури просто тают во рту.', rating: 5 },
    { name: 'Дмитрий С.', text: 'Лучшие хинкали в городе. Обязательно вернёмся!', rating: 5 },
    { name: 'Елена М.', text: 'Отличное обслуживание и очень вкусно. Рекомендую!', rating: 5 },
  ];

  const gallery = [
    'https://cdn.poehali.dev/projects/d74d24cc-0812-4008-82ca-116e689c69c7/files/4980e60e-6621-4c87-b789-93cd1af566e8.jpg',
    'https://cdn.poehali.dev/projects/d74d24cc-0812-4008-82ca-116e689c69c7/files/31420793-e254-4641-8c4a-4f02540e0cad.jpg',
    'https://cdn.poehali.dev/projects/d74d24cc-0812-4008-82ca-116e689c69c7/files/15fa8edd-f92b-4d58-bfdd-6074aff78d42.jpg',
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50 animate-fade-in">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-primary">GEORGIAN RESTAURANT</h1>
            <div className="hidden md:flex gap-6">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Меню
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors"
              >
                О нас
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Галерея
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Отзывы
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://cdn.poehali.dev/projects/d74d24cc-0812-4008-82ca-116e689c69c7/files/4980e60e-6621-4c87-b789-93cd1af566e8.jpg')`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10 animate-fade-in-up">
          <div className="max-w-3xl text-white">
            <h2 className="text-6xl md:text-7xl font-bold mb-6">Добро пожаловать в Грузию</h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Погрузитесь в мир настоящего грузинского гостеприимства и кулинарных традиций
            </p>
            <div className="flex gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Icon name="CalendarDays" className="mr-2" size={20} />
                    Забронировать стол
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Бронирование стола</DialogTitle>
                    <DialogDescription>Заполните форму, и мы свяжемся с вами</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя</Label>
                      <Input id="name" placeholder="Ваше имя" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date">Дата</Label>
                      <Input id="date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guests">Количество гостей</Label>
                      <Input id="guests" type="number" min="1" placeholder="2" />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90">Забронировать</Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white"
                onClick={() => scrollToSection('menu')}
              >
                Посмотреть меню
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 text-primary animate-fade-in">Наше меню</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Авторские блюда от шеф-повара из Тбилиси
          </p>
          <Tabs defaultValue="khachapuri" className="w-full animate-scale-in">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="khachapuri">Хачапури</TabsTrigger>
              <TabsTrigger value="khinkali">Хинкали</TabsTrigger>
              <TabsTrigger value="shashlik">Шашлыки</TabsTrigger>
              <TabsTrigger value="salads">Салаты</TabsTrigger>
              <TabsTrigger value="desserts">Десерты</TabsTrigger>
            </TabsList>
            {Object.entries(menuItems).map(([key, items]) => (
              <TabsContent key={key} value={key}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((item, idx) => (
                    <Card
                      key={idx}
                      className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold text-foreground">{item.name}</h3>
                        <span className="text-2xl font-bold text-primary">{item.price}₽</span>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-right">
              <h2 className="text-5xl font-bold mb-6 text-primary">О ресторане</h2>
              <p className="text-lg text-foreground mb-4 leading-relaxed">
                Наш ресторан — это кусочек Грузии в сердце города. Мы создали пространство, где каждый
                гость чувствует себя как дома, а каждое блюдо рассказывает историю.
              </p>
              <p className="text-lg text-foreground mb-4 leading-relaxed">
                Наш шеф-повар родом из Тбилиси и готовит по семейным рецептам, передающимся из поколения
                в поколение. Мы используем только свежие продукты и традиционные специи.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Грузинское гостеприимство — это не просто слова. Это наша философия, которую мы
                воплощаем каждый день.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-scale-in">
              <Card className="p-6 text-center bg-primary text-primary-foreground">
                <Icon name="Users" size={48} className="mx-auto mb-4" />
                <h3 className="text-4xl font-bold mb-2">500+</h3>
                <p>Довольных гостей</p>
              </Card>
              <Card className="p-6 text-center bg-secondary text-secondary-foreground">
                <Icon name="ChefHat" size={48} className="mx-auto mb-4" />
                <h3 className="text-4xl font-bold mb-2">50+</h3>
                <p>Блюд в меню</p>
              </Card>
              <Card className="p-6 text-center bg-accent text-accent-foreground">
                <Icon name="Award" size={48} className="mx-auto mb-4" />
                <h3 className="text-4xl font-bold mb-2">15</h3>
                <p>Лет опыта шефа</p>
              </Card>
              <Card className="p-6 text-center bg-muted text-muted-foreground">
                <Icon name="Star" size={48} className="mx-auto mb-4" />
                <h3 className="text-4xl font-bold mb-2">4.9</h3>
                <p>Средний рейтинг</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 text-primary animate-fade-in">Галерея</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Взгляните на атмосферу нашего ресторана
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((img, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-lg aspect-square group animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 text-primary animate-fade-in">Отзывы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Что говорят наши гости</p>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <Card
                key={idx}
                className="p-6 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-secondary fill-secondary" size={20} />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{review.text}"</p>
                <p className="font-semibold text-primary">{review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-in-right">
              <h2 className="text-5xl font-bold mb-8">Контакты</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Адрес</h3>
                    <p className="opacity-90">г. Москва, ул. Грузинская, д. 15</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Телефон</h3>
                    <p className="opacity-90">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={24} className="mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Часы работы</h3>
                    <p className="opacity-90">Ежедневно с 12:00 до 23:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Email</h3>
                    <p className="opacity-90">info@georgian-restaurant.ru</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8 animate-scale-in">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Напишите нам</h3>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="contact-name">Имя</Label>
                  <Input id="contact-name" placeholder="Ваше имя" />
                </div>
                <div>
                  <Label htmlFor="contact-email">Email</Label>
                  <Input id="contact-email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea id="message" placeholder="Ваше сообщение..." rows={4} />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">Отправить</Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">GEORGIAN RESTAURANT</h3>
          <p className="opacity-90 mb-4">Грузинское гостеприимство в сердце города</p>
          <div className="flex justify-center gap-6">
            <Icon name="Instagram" size={24} className="cursor-pointer hover:opacity-80 transition-opacity" />
            <Icon name="Facebook" size={24} className="cursor-pointer hover:opacity-80 transition-opacity" />
            <Icon name="Youtube" size={24} className="cursor-pointer hover:opacity-80 transition-opacity" />
          </div>
          <p className="mt-6 opacity-75 text-sm">© 2025 Georgian Restaurant. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
