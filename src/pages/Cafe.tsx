
import { Button } from "../components/ui/Button";
import { Layout } from "../components/Layout";
import cafeBg800 from "../assets/coffee-800.webp";
import cafeBg450 from "../assets/coffee-450.webp";

const menuCategories = [
  {
    name: "Coffee",
    items: [
      { name: "Negros Barako Espresso", price: "₱120", description: "Bold local beans, single origin" },
      { name: "Café Americano", price: "₱100", description: "Double shot espresso with hot water" },
      { name: "Flat White", price: "₱140", description: "Velvety microfoam with ristretto" },
      { name: "Pour Over", price: "₱160", description: "Hand-brewed single origin" },
      { name: "Cold Brew", price: "₱150", description: "12-hour steeped, smooth & rich" },
      { name: "Iced Spanish Latte", price: "₱160", description: "With condensed milk" },
    ],
  },
  {
    name: "Tea & Others",
    items: [
      { name: "Chamomile Blend", price: "₱100", description: "Calming herbal infusion" },
      { name: "Earl Grey", price: "₱100", description: "Classic bergamot notes" },
      { name: "Matcha Latte", price: "₱150", description: "Ceremonial grade from Kyoto" },
      { name: "Hot Chocolate", price: "₱120", description: "Rich Belgian cocoa" },
      { name: "Tsokolate Batirol", price: "₱130", description: "Traditional Filipino cacao" },
    ],
  },
  {
    name: "Pastries",
    items: [
      { name: "Ensaymada", price: "₱80", description: "Buttery Filipino brioche" },
      { name: "Pan de Sal Sliders", price: "₱120", description: "With kesong puti" },
      { name: "Ube Cheesecake", price: "₱150", description: "Purple yam delight" },
      { name: "Bibingka Muffin", price: "₱90", description: "Rice cake inspired" },
      { name: "Croissant", price: "₱100", description: "Buttery, flaky, perfect" },
      { name: "Banana Bread", price: "₱85", description: "Saba banana, walnut" },
    ],
  },
];

export const Cafe = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-primary paper-texture">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <span className="font-sans text-cream/80 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-3 block">
              The Literary Café
            </span>
            <h1 className="font-headline text-5xl md:text-6xl font-bold text-cream mb-6">
              The Café
            </h1>
            <p className="text-cream/70 text-lg leading-[1.6] max-w-xl">
              Where every cup tells a story. Artisan coffee meets Filipino flavors in a space designed for reading and reflection.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-background paper-texture">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-square rounded-lg overflow-hidden shadow-card">
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet={cafeBg450}
                  type="image/webp"
                />
                <img
                  src={cafeBg800}
                  srcSet={`${cafeBg450} 450w, ${cafeBg800} 800w`}
                  sizes="(max-width: 640px) 100vw, 600px"
                  alt="Artisan coffee with books"
                  width={800}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
            <div>
              <h2 className="font-headline text-4xl font-bold text-foreground mb-6">
                Crafted with Care
              </h2>
              <p className="text-muted-foreground text-lg leading-[1.6] mb-6">
                Our café celebrates the rich coffee heritage of the Philippines. We source our beans from small farms across Negros and the Cordilleras, roasted locally to bring out their unique character.
              </p>
              <p className="text-muted-foreground text-lg leading-[1.6] mb-8">
                Pair your brew with our selection of Filipino-inspired pastries, all baked fresh daily. Whether you're deep in a novel or catching up with friends, our café is your home away from home.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="py-2">
                  <span className="text-2xl font-display font-bold text-primary">
                    Local
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    Negros Beans
                  </p>
                </div>
                <div className="py-2">
                  <span className="text-2xl font-display font-bold text-primary">
                    Fresh
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    Baked Daily
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-24 bg-card paper-texture">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-16">
            <span className="font-sans text-charcoal-light text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-3 block">
              Our Offerings
            </span>
            <h2 className="font-headline text-4xl font-bold text-foreground mb-6">
              The Menu
            </h2>
            <p className="text-muted-foreground text-lg leading-[1.6]">
              From bold espressos to soothing teas and sweet treats — something for every taste.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {menuCategories.map((category) => (
              <div key={category.name}>
                <h3 className="font-headline text-2xl font-semibold text-foreground mb-6 pb-4 border-b-2 border-accent">
                  {category.name}
                </h3>
                <ul className="space-y-6">
                  {category.items.map((item) => (
                    <li key={item.name} className="group">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium text-foreground group-hover:text-accent transition-colors duration-300">
                          {item.name}
                        </span>
                        <span className="text-accent font-semibold">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-16 bg-[#E9AF3A] text-white">
        <div className="container mx-auto">
          <div className="max-w-2xl">
            <span className="font-sans text-white/75 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-2 block">
              Special Offer
            </span>
            <h3 className="font-headline text-3xl font-bold text-white mb-4">
              Book & Brew Combo
            </h3>
            <p className="text-white/90 text-lg leading-[1.6]">
              Purchase any book and get 20% off your coffee order. Because the best stories deserve the best brews.
            </p>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-24 bg-background paper-texture">
        <div className="container mx-auto">
          <div className="max-w-xl">
            <h2 className="font-headline text-4xl font-bold text-foreground mb-6">
              Join Us for a Cup
            </h2>
            <p className="text-muted-foreground text-lg leading-[1.6] mb-10">
              Open Monday through Sunday. We look forward to serving you.
            </p>
            <Button variant="gold" size="lg" asChild>
              <a href="https://www.instagram.com/libraria.ph/?hl=en" target="_blank" rel="noopener noreferrer">
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Cafe;
