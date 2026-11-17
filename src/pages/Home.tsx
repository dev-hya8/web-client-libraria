import { Link } from "react-router-dom";
import { KeyRound, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Layout } from "../components/Layout";
import heroBg1400 from "../assets/hero-1400.webp";
import heroBg768 from "../assets/hero-768.webp";
import heroBgFallback from "../assets/heroimg.jpg";
import treasuresBg900 from "../assets/treasure-900.webp";
import treasuresBg500 from "../assets/treasure-500.webp";
import cafeBg800 from "../assets/coffee-800.webp";
import cafeBg450 from "../assets/coffee-450.webp";
import rareIcon from "../assets/icon-rare-books.webp";
import cafeIcon from "../assets/icon-cafe.webp";
import eventIcon from "../assets/icon-events.webp";
import loungeIcon from "../assets/icon-lounge.webp";

const features = [
  {
    icon: rareIcon,
    title: "Rare Collections",
    description: "Discover vintage and rare books from around the world, carefully curated for readers.",
  },
  {
    icon: cafeIcon,
    title: "Literary Café",
    description: "Enjoy artisan coffee and Filipino pastries while lost in your favorite stories.",
  },
  {
    icon: eventIcon,
    title: "Community Events",
    description: "Join us for intimate book launches, poetry readings, and creative workshops in the heart of Dumaguete.",
  },
  {
    icon: loungeIcon,
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
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet={heroBg768}
              type="image/webp"
            />
            <source
              srcSet={heroBg1400}
              type="image/webp"
            />
            <img
              src={heroBgFallback}
              alt="Cozy vintage bookstore interior"
              width={1400}
              height={788}
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </picture>
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
              dumaguete's home for Filipino stories
            </span>
            <h1 className="font-headline text-6xl md:text-7xl lg:text-[5.5rem] font-semibold text-cream mb-8 leading-[1.1] tracking-tight animate-fade-in [animation-delay:0.4s] [animation-fill-mode:both]">
              Libraria Books
            </h1>
            <p className="text-lg md:text-[1.125rem] text-cream/80 mb-14 max-w-[58ch] leading-[1.6] animate-fade-in [animation-delay:0.6s] [animation-fill-mode:both]">
              A utopia for new books, culture, and journals. Your portal to another world.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in [animation-delay:0.8s] [animation-fill-mode:both]">
              <Button variant="hero" size="xl" asChild>
                <Link to="/cafe">Visit the Café</Link>
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
              Libraria Books is a haven where readers, coffee lovers, and dreamers find their sanctuary.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="group p-8 bg-card rounded-lg border border-border hover:border-accent hover:shadow-card transition-all duration-500 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.2 + i * 0.1}s`, animationFillMode: "forwards" }}
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden mb-6 border border-border shadow-soft group-hover:scale-105 group-hover:shadow-card transition-all duration-500 bg-white">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    width={80}
                    height={80}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
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
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet={treasuresBg500}
                  type="image/webp"
                />
                <img
                  src={treasuresBg900}
                  srcSet={`${treasuresBg500} 500w, ${treasuresBg900} 900w`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  alt="Collection of classic literature and rare books"
                  width={900}
                  height={675}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </picture>
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
                From first editions of Filipino literary classics to vintage tomes from distant shores, our collection spans centuries and continents. Each book has a story beyond its pages, a journey of previous owners, forgotten libraries, and serendipitous finds.
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
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/about" className="gap-2">
                  Read Our Story <ArrowRight className="w-4 h-4" />
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
                Our in-house café serves artisan coffee sourced from local Negros farms, paired with traditional Filipino pastries. The perfect companion for your reading journey.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="py-2">
                  <span className="text-2xl font-headline font-bold text-primary">
                    12+
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    Coffee Varieties
                  </p>
                </div>
                <div className="py-2">
                  <span className="text-2xl font-headline font-bold text-primary">
                    Local
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    Negros Beans
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
                <picture>
                  <source
                    media="(max-width: 640px)"
                    srcSet={cafeBg450}
                    type="image/webp"
                  />
                  <img
                    src={cafeBg800}
                    srcSet={`${cafeBg450} 450w, ${cafeBg800} 800w`}
                    sizes="(max-width: 640px) 100vw, 500px"
                    alt="Artisan coffee with vintage books"
                    width={800}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </picture>
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
              Visit us in the heart of Dumaguete City and discover your next literary adventure. Every book is waiting for the right reader.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Plan Your Visit</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Home;
