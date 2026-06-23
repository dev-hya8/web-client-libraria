import { Link } from "react-router-dom";
import { BookOpen, Coffee, Hammer, Clock, KeyRound, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Layout } from "../components/Layout";
import heroBg from "../assets/heroimg.png";
const treasuresBg = "/assets/treasures-books-Ccnu8zIR.webp";
const cafeBg = "/assets/cafe-coffee-DZK01GkV.jpg";

const features = [
  {
    icon: BookOpen,
    title: "Rare Collections",
    description: "Discover vintage and rare books from around the world, carefully curated for readers.",
  },
  {
    icon: Coffee,
    title: "Literary Café",
    description: "Enjoy artisan coffee and Filipino pastries while lost in your favorite stories.",
  },
  {
    icon: Hammer,
    title: "Book Restoration",
    description: "Expert restoration services to preserve your treasured books for generations.",
  },
  {
    icon: Clock,
    title: "Reading Lounge",
    description: "A cozy sanctuary where time slows down and stories come alive.",
  },
];

export const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Cozy vintage bookstore interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-[150px] bg-gradient-to-b from-black/60 to-transparent" />
        </div>
        <div className="absolute left-8 md:left-16 lg:left-24 top-1/2 -translate-y-1/2 z-[1] pointer-events-none">
          <KeyRound
            className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 text-cream/[0.04] rotate-45"
            strokeWidth={1}
          />
        </div>
        <div className="container mx-auto relative z-10 pt-32 pb-20">
          <div className="max-w-3xl pl-0 md:pl-4 lg:pl-8">
            <span className="inline-block font-sans text-cream/90 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-3 animate-fade-in [animation-delay:0.2s] [animation-fill-mode:both]">
              Cebu's Hidden Literary Gem
            </span>
            <h1 className="font-headline text-6xl md:text-7xl lg:text-[5.5rem] font-semibold text-cream mb-8 leading-[1.1] tracking-tight animate-fade-in [animation-delay:0.4s] [animation-fill-mode:both]">
              Hidden Library Cebu
            </h1>
            <p className="text-lg md:text-[1.125rem] text-cream/80 mb-14 max-w-[58ch] leading-[1.6] animate-fade-in [animation-delay:0.6s] [animation-fill-mode:both]">
              Independent bookshop focusing on Filipino writers, history, and culture. Curated selection of new, secondhand, and rare books.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in [animation-delay:0.8s] [animation-fill-mode:both]">
              <Button variant="hero" size="xl" asChild>
                <Link to="/services">Browse Collection</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background paper-texture">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-16">
            <span className="font-sans text-charcoal-light text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-3 block">
              What We Offer
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-6">
              More Than a Bookstore
            </h2>
            <p className="text-muted-foreground text-lg leading-[1.6]">
              Hidden Library Cebu is a haven where readers, coffee lovers, and dreamers find their sanctuary.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="group p-8 bg-card rounded-lg border border-border hover:border-accent hover:shadow-card transition-all duration-500 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.2 + i * 0.1}s`, animationFillMode: "forwards" }}
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-headline text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-[1.6]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection Section */}
      <section className="py-24 bg-primary paper-texture">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-card">
              <img
                src={treasuresBg}
                alt="Collection of classic literature and rare books"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
            </div>
            <div>
              <span className="font-sans text-cream/80 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-3 block">
                Featured Collection
              </span>
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-cream mb-6">
                Treasures Waiting to Be Discovered
              </h2>
              <p className="text-cream/70 text-lg leading-[1.6] mb-8">
                From first editions of Filipino literary classics to vintage tomes from distant shores, our collection spans centuries and continents. Each book has a story beyond its pages — a journey of previous owners, forgotten libraries, and serendipitous finds.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Visayan & Filipino Literature",
                  "Vintage Art & Photography Books",
                  "Rare First Editions",
                  "Antique Maps & Manuscripts",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-cream/80 text-lg"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="gold" size="lg" asChild>
                <Link to="/services" className="gap-2">
                  View Collection <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Café Promo Section */}
      <section className="py-24 bg-background paper-texture">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="font-sans text-charcoal-light text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-3 block">
                The Café
              </span>
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-6">
                Where Coffee Meets Literature
              </h2>
              <p className="text-muted-foreground text-lg leading-[1.6] mb-8">
                Our in-house café serves artisan coffee sourced from local Cebu farms, paired with traditional Filipino pastries. The perfect companion for your reading journey.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="p-4 bg-card rounded-lg border border-border">
                  <span className="text-2xl font-headline font-bold text-accent">
                    12+
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    Coffee Varieties
                  </p>
                </div>
                <div className="p-4 bg-card rounded-lg border border-border">
                  <span className="text-2xl font-headline font-bold text-accent">
                    Local
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    Cebu Beans
                  </p>
                </div>
              </div>
              <Button variant="outline" size="lg" asChild>
                <Link to="/cafe" className="gap-2">
                  See Full Menu <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-square rounded-lg overflow-hidden shadow-card">
                <img
                  src={cafeBg}
                  alt="Artisan coffee with vintage books"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-forest to-primary paper-texture">
        <div className="container mx-auto">
          <div className="max-w-xl">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-cream mb-6">
              Ready to Get Lost?
            </h2>
            <p className="text-cream/70 text-lg leading-[1.6] mb-10">
              Visit us in the heart of Cebu City and discover your next literary adventure. Every book is waiting for the right reader.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Plan Your Visit</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/services">Browse Collection</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Home;
