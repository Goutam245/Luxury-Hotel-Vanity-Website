import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Wifi, Tv, Wine, Mountain, Bath, Coffee } from "lucide-react";
import roomPremium from "@/assets/room-premium.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import roomPenthouse from "@/assets/room-penthouse.jpg";

const amenities = [
  { icon: Wifi, label: "High-Speed WiFi" },
  { icon: Tv, label: "65\" Smart TV" },
  { icon: Wine, label: "Premium Minibar" },
  { icon: Mountain, label: "City Views" },
  { icon: Bath, label: "Rainfall Shower" },
  { icon: Coffee, label: "Nespresso Machine" },
];

const rooms = [
  {
    id: "premium",
    name: "Premium King Room",
    subtitle: "Sophisticated Comfort",
    description:
      "Our Premium King Room offers an elegant retreat with floor-to-ceiling windows showcasing stunning city views. The space features a plush king bed with Italian linens, a marble bathroom with rainfall shower, and thoughtful amenities that anticipate your every need.",
    size: "450 sq ft",
    price: "From $495",
    image: roomPremium,
    features: ["King Bed", "City View", "Marble Bathroom", "Work Desk"],
  },
  {
    id: "deluxe",
    name: "Deluxe Suite",
    subtitle: "Spacious Elegance",
    description:
      "The Deluxe Suite presents a gracious living space separate from the bedroom, perfect for entertaining or relaxation. Floor-to-ceiling windows frame panoramic views, while the suite's refined design creates an atmosphere of understated luxury.",
    size: "750 sq ft",
    price: "From $895",
    image: roomSuite,
    features: ["Separate Living Area", "Panoramic Views", "Soaking Tub", "Dining Space"],
  },
  {
    id: "penthouse",
    name: "Signature Penthouse",
    subtitle: "Ultimate Luxury",
    description:
      "Our Signature Penthouse represents the pinnacle of The Valorian experience. Spanning the top floor with wraparound terraces, this exceptional residence offers unparalleled privacy, breathtaking 360-degree views, and dedicated butler service.",
    size: "2,400 sq ft",
    price: "From $2,495",
    image: roomPenthouse,
    features: ["Private Terrace", "360° Views", "Butler Service", "Two Bedrooms"],
  },
];

export default function Rooms() {
  return (
    <>
      <Helmet>
        <title>Rooms & Suites | The Valorian West Hollywood</title>
        <meta
          name="description"
          content="Discover our luxury rooms and suites at The Valorian. From elegant king rooms to the signature penthouse, experience refined comfort on the Sunset Strip."
        />
        <link rel="canonical" href="https://thevalorianhotel.com/rooms" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <nav className="text-caption text-muted-foreground mb-8">
                <span>Home</span>
                <span className="mx-2">/</span>
                <span className="text-foreground">Rooms & Suites</span>
              </nav>
              <h1 className="text-display mb-6">Rooms & Suites</h1>
              <p className="text-body-large text-muted-foreground">
                Each sanctuary has been designed as a haven of tranquility, 
                where every detail speaks to our commitment to refined luxury.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Rooms */}
        {rooms.map((room, index) => (
          <RoomSection key={room.id} room={room} index={index} />
        ))}

        {/* Amenities */}
        <section className="section-luxury bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <p className="text-caption text-primary mb-4">In Every Room</p>
              <h2 className="text-headline mb-6">Amenities</h2>
              <div className="divider-gold mb-6" />
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {amenities.map((amenity, index) => (
                <motion.div
                  key={amenity.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-4 border border-border rounded-full flex items-center justify-center">
                    <amenity.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">{amenity.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-luxury bg-charcoal text-primary-foreground">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-headline mb-6">Ready to Experience The Valorian?</h2>
              <p className="text-body-large opacity-80 mb-10">
                Reserve your sanctuary and step into a world of refined luxury.
              </p>
              <Button
                variant="luxury"
                size="xl"
                asChild
                className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90"
              >
                <a href="#book-now">Check Availability</a>
              </Button>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}

interface RoomSectionProps {
  room: (typeof rooms)[0];
  index: number;
}

function RoomSection({ room, index }: RoomSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const isReversed = index % 2 === 1;

  return (
    <section id={room.id} className="section-luxury bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            isReversed ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={isReversed ? "lg:order-2" : ""}
          >
            <div className="image-container aspect-[4/3]">
              <img
                src={room.image}
                alt={room.name}
                className="image-luxury"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={`space-y-6 ${isReversed ? "lg:order-1" : ""}`}
          >
            <div>
              <p className="text-caption text-primary mb-2">{room.subtitle}</p>
              <h2 className="text-headline mb-2">{room.name}</h2>
              <p className="text-sm text-muted-foreground">
                {room.size} • {room.price}
              </p>
            </div>

            <div className="divider-gold !mx-0" />

            <p className="text-body text-muted-foreground">{room.description}</p>

            <div className="flex flex-wrap gap-3">
              {room.features.map((feature) => (
                <span
                  key={feature}
                  className="px-4 py-2 bg-secondary text-sm text-secondary-foreground"
                >
                  {feature}
                </span>
              ))}
            </div>

            <div className="pt-4">
              <Button variant="luxury" size="lg" asChild>
                <a href="#book-now">Book This Room</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
