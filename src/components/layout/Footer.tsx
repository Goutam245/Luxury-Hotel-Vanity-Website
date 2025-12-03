import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { name: "Rooms & Suites", href: "/rooms" },
  { name: "Dining & Bars", href: "/dining" },
  { name: "Experiences", href: "/experiences" },
  { name: "About The Valorian", href: "/about" },
  { name: "Special Offers", href: "/offers" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <span className="text-caption text-primary-foreground/60 tracking-widest-xl">THE</span>
              <h3 className="font-serif text-3xl font-medium tracking-wide -mt-1">VALORIAN</h3>
            </div>
            <p className="text-body text-primary-foreground/70 max-w-xs">
              A fever dream in white — where elegance flirts with temptation on the Sunset Strip.
            </p>
            <div className="flex gap-4 pt-4">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center transition-colors duration-300 hover:bg-primary-foreground/10"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center transition-colors duration-300 hover:bg-primary-foreground/10"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-caption text-primary-foreground/60 tracking-widest">Explore</h4>
            <nav className="grid grid-cols-2 gap-x-8 gap-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm text-primary-foreground/70 transition-colors duration-300 hover:text-primary-foreground"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-caption text-primary-foreground/60 tracking-widest">Contact</h4>
            <div className="space-y-4">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-primary-foreground/70 transition-colors duration-300 hover:text-primary-foreground"
              >
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>8440 Sunset Boulevard<br />West Hollywood, CA 90069</span>
              </a>
              <a
                href="tel:+13108080000"
                className="flex items-center gap-3 text-sm text-primary-foreground/70 transition-colors duration-300 hover:text-primary-foreground"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+1 (310) 808-0000</span>
              </a>
              <a
                href="mailto:hello@thevalorianhotel.com"
                className="flex items-center gap-3 text-sm text-primary-foreground/70 transition-colors duration-300 hover:text-primary-foreground"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>hello@thevalorianhotel.com</span>
              </a>
            </div>

            {/* Newsletter */}
            <div className="pt-4">
              <h5 className="text-caption text-primary-foreground/60 tracking-widest mb-4">Newsletter</h5>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-primary-foreground/5 border border-primary-foreground/10 px-4 py-2 text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/30 transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:bg-primary/90"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
            <p>© {new Date().getFullYear()} The Valorian. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="transition-colors duration-300 hover:text-primary-foreground/70">
                Privacy Policy
              </Link>
              <Link to="/terms" className="transition-colors duration-300 hover:text-primary-foreground/70">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
