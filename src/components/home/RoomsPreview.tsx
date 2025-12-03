import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import roomPremium from "@/assets/room-premium.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import roomPenthouse from "@/assets/room-penthouse.jpg";

const rooms = [
  {
    id: 1,
    name: "Premium King Room",
    description: "Sophisticated comfort with city views",
    price: "From $495",
    image: roomPremium,
    href: "/rooms#premium",
  },
  {
    id: 2,
    name: "Deluxe Suite",
    description: "Spacious elegance with separate living area",
    price: "From $895",
    image: roomSuite,
    href: "/rooms#deluxe",
  },
  {
    id: 3,
    name: "Signature Penthouse",
    description: "Ultimate luxury with panoramic vistas",
    price: "From $2,495",
    image: roomPenthouse,
    href: "/rooms#penthouse",
  },
];

export function RoomsPreview() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="section-luxury bg-secondary/30" aria-labelledby="rooms-heading">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-20"
        >
          <p className="text-caption text-primary mb-4">Accommodations</p>
          <h2 id="rooms-heading" className="text-headline mb-6">
            Rooms & Suites
          </h2>
          <div className="divider-gold mb-6" />
          <p className="text-body-large text-muted-foreground">
            Each sanctuary balances modern refinement with dreamlike comfort, 
            where every detail has been considered.
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.article
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <Link to={room.href} className="block">
                <div className="image-container aspect-[4/5] mb-6">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="image-luxury"
                    loading="lazy"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-medium group-hover:text-primary transition-colors duration-300">
                    {room.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{room.description}</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm font-medium text-primary">{room.price}</span>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      Explore
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/rooms"
            className="link-elegant text-sm font-medium tracking-wider uppercase"
          >
            View All Rooms
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
