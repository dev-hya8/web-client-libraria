import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import { cn } from "../lib/utils";
import logoUrl from "../assets/Libraria Logo.jpg";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "The Café", path: "/cafe" },
  { name: "Contact", path: "/contact" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src={logoUrl}
              alt="Libraria Books"
              className="w-10 h-10 object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="font-headline text-xl font-semibold text-cream leading-tight">
              Libraria
            </span>
            <span className="text-xs text-cream/70 tracking-widest uppercase">
              Books
            </span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "relative text-sm font-medium tracking-wide transition-colors duration-300 py-2",
                location.pathname === item.path
                  ? "text-accent"
                  : "text-cream/90 hover:text-accent"
              )}
            >
              {item.name}
              <span
                className={cn(
                  "absolute bottom-0 left-0 w-full h-0.5 bg-accent transition-transform duration-300 origin-left",
                  location.pathname === item.path ? "scale-x-100" : "scale-x-0"
                )}
              />
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button variant="gold" size="sm" asChild>
            <Link to="/contact">Visit Us</Link>
          </Button>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-cream p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-primary/98 backdrop-blur-md transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-96 border-b border-cream/10" : "max-h-0"
        )}
      >
        <nav className="container mx-auto py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-lg font-medium py-2 transition-colors duration-300 border-b border-cream/10",
                location.pathname === item.path
                  ? "text-accent"
                  : "text-cream/90 hover:text-accent"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button variant="gold" className="mt-4" asChild>
            <Link to="/contact">Visit Us</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};
export default Header;
