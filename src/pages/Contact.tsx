import * as React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Textarea } from "../components/ui/Textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/Accordion";
import { useToast } from "../hooks/use-toast";
import { Layout } from "../components/Layout";

const faqs = [
  {
    question: "What are your opening hours?",
    answer: "We're open Monday through Friday from 11:00 AM to 7:00 PM, and Saturday and Sunday from 11:00 AM to 6:00 PM.",
  },
  {
    question: "Can I sell my old books to you?",
    answer:
      "Yes! We're always looking to expand our collection. Bring your books for evaluation during store hours. We're particularly interested in vintage Filipino literature, rare editions, and well-preserved antiquarian books.",
  },
  {
    question: "Do you ship books?",
    answer:
      "Currently, we only offer in-store pickup. However, library members can reserve books online and pick them up at their convenience.",
  },
  {
    question: "How long can I keep borrowed books?",
    answer:
      "Lending periods depend on your membership tier. Reader members can borrow for 2 weeks, Bibliophile for 3 weeks, and Patrons have flexible returns. Extensions are available upon request.",
  },
  {
    question: "Do you host events?",
    answer:
      "Yes! We regularly host book clubs, author readings, literary salons, and private events. Check our social media or sign up for our newsletter to stay updated on upcoming events.",
  },
  {
    question: "Can I bring my laptop and work at the café?",
    answer:
      "Absolutely! Our café is designed for readers and remote workers alike. We have Wi-Fi available and plenty of cozy spots to set up for a few hours.",
  },
];

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24-48 hours.",
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-primary paper-texture">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <span className="font-sans text-cream/80 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-3 block">
              Get in Touch
            </span>
            <h1 className="font-headline text-5xl md:text-6xl font-bold text-cream mb-6">
              Contact Us
            </h1>
            <p className="text-cream/70 text-lg leading-[1.6] max-w-xl">
              Have questions or want to plan a visit? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-24 bg-background paper-texture">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-headline text-3xl font-bold text-foreground mb-8">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your name"
                      required
                      className="bg-card border-border focus:border-accent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your@email.com"
                      required
                      className="bg-card border-border focus:border-accent"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="How can we help?"
                    required
                    className="bg-card border-border focus:border-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Your message..."
                    rows={6}
                    required
                    className="bg-card border-border focus:border-accent resize-none"
                  />
                </div>
                <Button type="submit" variant="gold" size="lg" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Visit Details */}
            <div>
              <h2 className="font-headline text-3xl font-bold text-foreground mb-8">
                Visit Our Store
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Address
                    </h3>
                    <p className="text-muted-foreground">
                      Dumaguete City, Philippines
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">(032) 503 6154</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      librariabooks@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                    <div className="text-muted-foreground">
                      <p>Monday - Friday: 11:00 AM - 7:00 PM</p>
                      <p>Saturday - Sunday: 11:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-card paper-texture">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <span className="font-sans text-charcoal-light text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-3 block">
                Have Questions?
              </span>
              <h2 className="font-headline text-4xl font-bold text-foreground">
                Frequently Asked Questions
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-background border border-border rounded-lg px-6 data-[state=open]:border-accent transition-colors duration-300"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-accent py-5 [&[data-state=open]>svg]:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-primary paper-texture">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-headline text-4xl font-bold text-cream mb-6">
              We'd Love to Meet You
            </h2>
            <p className="text-cream/70 text-lg leading-[1.6] mb-10">
              Come discover the magic of Libraria Books. Your next literary adventure awaits.
            </p>
            <div className="aspect-video rounded-lg overflow-hidden bg-card border border-cream/20 mb-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62997.31466678954!2d123.24969615814284!3d9.303806996237526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ab6f392de360b7%3A0x2d6945df4760769!2sDumaguete+City%2C+Negros+Oriental!5e0!3m2!1sen!2sph!4v1511747012426"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Libraria Books Location"
              />
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="gold" size="lg">
                Get Directions
              </Button>
              <Button variant="heroOutline" size="lg">
                Call Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Contact;
