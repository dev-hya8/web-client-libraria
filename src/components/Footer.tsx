import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-cream paper-texture">
      <div className="max-w-[1280px] mx-auto py-16 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h4 className="font-headline text-lg font-semibold mb-6 text-cream">
              Visit Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-cream/70">
                  IT Park, Cebu City, Philippines
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span className="text-cream/70">(032) 503 6154</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="text-cream/70">
                  hiddenlibrarycebu@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-cream/70">
                  Mon-Sun: 10:00 AM - 7:00 PM
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline text-lg font-semibold mb-6 text-cream">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Library Subscription",
                "Book Restoration",
                "Rare Book Sourcing",
                "Café & Reading Room",
                "Private Events",
              ].map((service) => (
                <li key={service}>
                  <span className="text-cream/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-cream/10 text-center">
          <p className="text-cream/50 text-sm">
            © {new Date().getFullYear()} Hidden Library Cebu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
