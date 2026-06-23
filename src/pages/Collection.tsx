import { Link } from "react-router-dom";
import { BookOpen, Hammer, Search, Users, Check } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Layout } from "../components/Layout";

const restorationBg = "/assets/vintage-books-BBG8AonW.jpg";

const services = [
  {
    icon: BookOpen,
    title: "Library Subscription",
    description: "Join our lending library and take the treasures home. Various membership tiers to suit your reading pace.",
  },
  {
    icon: Hammer,
    title: "Book Restoration",
    description: "Professional restoration services for damaged books. From rebinding to page repair, we bring your beloved books back to life.",
  },
  {
    icon: Search,
    title: "Rare Book Sourcing",
    description: "Looking for a specific title? Our network of collectors and dealers can help you find that elusive book.",
  },
  {
    icon: Users,
    title: "Private Events",
    description: "Host your book club, literary salon, or private gathering in our atmospheric space.",
  },
];

const plans = [
  {
    name: "Reader",
    price: "₱500",
    period: "per month",
    description: "Perfect for casual readers",
    features: [
      "Borrow up to 3 books at a time",
      "Access to general collection",
      "10% café discount",
      "Member newsletter",
    ],
    highlighted: false,
  },
  {
    name: "Bibliophile",
    price: "₱1,200",
    period: "per month",
    description: "For devoted book lovers",
    features: [
      "Borrow up to 6 books at a time",
      "Access to rare collection",
      "20% café discount",
      "Priority reservations",
      "Member events access",
      "Guest passes (2/month)",
    ],
    highlighted: true,
  },
  {
    name: "Patron",
    price: "₱3,000",
    period: "per month",
    description: "Support our mission",
    features: [
      "Unlimited borrowing",
      "Full collection access",
      "30% café discount",
      "Private reading room access",
      "Exclusive patron events",
      "Annual restoration service",
      "Recognition on patron wall",
    ],
    highlighted: false,
  },
];

const steps = [
  { step: "01", title: "Visit", description: "Come to our store or browse our catalog online" },
  { step: "02", title: "Choose", description: "Select your membership plan or service" },
  { step: "03", title: "Register", description: "Complete your membership registration" },
  { step: "04", title: "Enjoy", description: "Start borrowing and exploring our collection" },
];

export const Collection = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-primary paper-texture">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <span className="font-sans text-cream/80 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-3 block">
              What We Offer
            </span>
            <h1 className="font-headline text-5xl md:text-6xl font-bold text-cream mb-6">
              Our Services
            </h1>
            <p className="text-cream/70 text-lg leading-[1.6] max-w-xl">
              From lending library subscriptions to professional restoration, we're here to serve the literary community.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background paper-texture">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 bg-card rounded-lg border border-border hover:border-accent hover:shadow-card transition-all duration-500"
              >
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-[1.6]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-24 bg-card paper-texture">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-16">
            <span className="font-sans text-charcoal-light text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-3 block">
              Library Membership
            </span>
            <h2 className="font-headline text-4xl font-bold text-foreground mb-6">
              Subscription Plans
            </h2>
            <p className="text-muted-foreground text-lg leading-[1.6]">
              Choose the plan that fits your reading lifestyle. All memberships include access to our reading lounge and member community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-8 rounded-lg border-2 transition-all duration-500 ${
                  plan.highlighted
                    ? "bg-primary text-cream border-accent shadow-card scale-105"
                    : "bg-background border-border hover:border-accent"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                )}
                <div className="text-center mb-8">
                  <h3
                    className={`font-headline text-2xl font-semibold mb-2 ${
                      plan.highlighted ? "text-cream" : "text-foreground"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm mb-4 ${
                      plan.highlighted ? "text-cream/70" : "text-muted-foreground"
                    }`}
                  >
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-headline font-bold text-accent">
                      {plan.price}
                    </span>
                    <span
                      className={`text-sm ${
                        plan.highlighted ? "text-cream/70" : "text-muted-foreground"
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <Check className="w-5 h-5 shrink-0 mt-0.5 text-accent" />
                      <span
                        className={`text-sm ${
                          plan.highlighted ? "text-cream/80" : "text-muted-foreground"
                        }`}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.highlighted ? "gold" : "outline"}
                  className="w-full"
                  asChild
                >
                  <Link to="/contact">Subscribe</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Restoration Section */}
      <section className="py-24 bg-primary paper-texture">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-sans text-cream/80 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-3 block">
                Book Restoration
              </span>
              <h2 className="font-headline text-4xl font-bold text-cream mb-6">
                Bringing Books Back to Life
              </h2>
              <p className="text-cream/70 text-lg leading-[1.6] mb-6">
                Our skilled craftspeople specialize in restoring damaged and aging books. From family heirlooms to rare finds, we treat every book with the care and respect it deserves.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Rebinding & cover restoration",
                  "Page cleaning & repair",
                  "Spine reinforcement",
                  "Custom protective cases",
                  "Archival preservation",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-cream/80"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">Request Quote</Link>
              </Button>
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-card">
              <img
                src={restorationBg}
                alt="Vintage books awaiting restoration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 bg-background paper-texture">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-16">
            <span className="font-sans text-charcoal-light text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-3 block">
              Getting Started
            </span>
            <h2 className="font-headline text-4xl font-bold text-foreground">
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((item) => (
              <div key={item.step} className="relative">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-6 shadow-gold">
                  <span className="text-xl font-headline font-bold text-accent-foreground">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-[1.6]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Join Section */}
      <section className="py-24 bg-card paper-texture">
        <div className="container mx-auto">
          <div className="max-w-xl">
            <h2 className="font-headline text-4xl font-bold text-foreground mb-6">
              Ready to Join?
            </h2>
            <p className="text-muted-foreground text-lg leading-[1.6] mb-10">
              Visit us to explore our collection and find the perfect membership for you.
            </p>
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Collection;
