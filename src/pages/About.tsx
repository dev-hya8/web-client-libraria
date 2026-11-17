
import { Heart, Users, Award } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Layout } from "../components/Layout";
import beginningPhoto1 from "../assets/beginning-1.webp";
import beginningPhoto2 from "../assets/beginning-2.webp";

const values = [
  {
    icon: Heart,
    title: "Preservation",
    description: "Every book tells a story beyond its pages. We honor the history and journey of each volume that passes through our hands.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe in creating spaces where book lovers can connect, share, and discover together. Literature is best enjoyed in company.",
  },
  {
    icon: Award,
    title: "Heritage",
    description: "Championing Filipino and Visayan literature is at our core. We work to ensure these stories reach new generations.",
  },
];

const stats = [
  { number: "500+", label: "Rare Books" },
  { number: "2020", label: "Founded" },
  { number: "1000+", label: "Happy Readers" },
  { number: "50+", label: "Events Hosted" },
];

export const About = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-primary paper-texture">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <span className="font-sans text-cream/80 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-3 block">
              Our Story
            </span>
            <h1 className="font-headline text-5xl md:text-6xl font-bold text-cream mb-6">
              About Libraria Books
            </h1>
            <p className="text-cream/70 text-lg leading-[1.6] max-w-xl">
              Born from a love of forgotten stories and a passion for preserving literary heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-24 bg-background paper-texture">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-headline text-4xl font-bold text-foreground mb-6">
                The Beginning
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-[1.6]">
                <p>
                  Libraria Books began in August 2020 during the pandemic, when Gayle Acar, a former musician, stylist, and graphic designer, started selling her children’s books on Instagram. What began as a way to pass the time while navigating lockdown isolation quickly evolved into a visual sanctuary for readers as Gayle discovered her passion for curating and photographing beautiful titles.
                </p>
                <p>
                  As her online community grew, the desire for deeper real-world connections led Gayle and her husband Ernest to move from Manila to Dumaguete, opening a physical "hidden bookshop" at 58 EJ Blanco in December 2022.
                </p>
                <p>
                  Today, Libraria serves as an intentional bridge between the online and offline worlds, dedicated to supporting Filipino literature, homeschooling families, and the vibrant community of Dumaguete writers and artists.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] bg-card rounded-lg overflow-hidden shadow-card">
                <img
                  src={beginningPhoto2}
                  alt="Beautiful curated books on display"
                  width={800}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] bg-card rounded-lg overflow-hidden shadow-card mt-8">
                <img
                  src={beginningPhoto1}
                  alt="Libraria Books storefront"
                  width={800}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-card paper-texture">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-16">
            <span className="font-sans text-charcoal-light text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-3 block">
              What We Believe
            </span>
            <h2 className="font-headline text-4xl font-bold text-foreground">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val) => (
              <div key={val.title} className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <val.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-headline text-xl font-semibold text-foreground mb-4">
                  {val.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-[1.6]">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary paper-texture">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="block text-4xl md:text-5xl font-display font-bold text-accent mb-2">
                  {stat.number}
                </span>
                <span className="text-cream/70 text-sm uppercase tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background paper-texture">
        <div className="container mx-auto">
          <div className="max-w-xl">
            <h2 className="font-headline text-4xl font-bold text-foreground mb-6">
              Come Visit Us
            </h2>
            <p className="text-muted-foreground text-lg leading-[1.6] mb-10">
              We'd love to welcome you to Libraria Books. Discover our collection, enjoy a cup of coffee, and find your next literary adventure.
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
export default About;
