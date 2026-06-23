import { Link } from "react-router-dom";
import { BookOpen, Heart, Users, Award } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Layout } from "../components/Layout";

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
  { number: "2019", label: "Founded" },
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
              About Hidden Library
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
                  Hidden Library Cebu began as a dream shared by two Cebuano book lovers who believed that every forgotten book deserves a second chance at finding its reader.
                </p>
                <p>
                  What started as a small collection of rescued books from estate sales and closing libraries has grown into a sanctuary for rare and vintage literature. Our mission is simple: to preserve stories that might otherwise be lost to time.
                </p>
                <p>
                  We specialize in Visayan and Filipino literature, believing deeply in the importance of preserving our cultural heritage through the written word. But our shelves also hold treasures from around the world — each with its own journey to our little corner of Cebu.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] bg-card rounded-lg overflow-hidden shadow-card">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-primary/40" />
                </div>
              </div>
              <div className="aspect-[3/4] bg-card rounded-lg overflow-hidden shadow-card mt-8">
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <Heart className="w-16 h-16 text-accent/40" />
                </div>
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
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <val.icon className="w-7 h-7 text-accent" />
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
              We'd love to welcome you to Hidden Library Cebu. Discover our collection, enjoy a cup of coffee, and find your next literary adventure.
            </p>
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Get Directions</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default About;
