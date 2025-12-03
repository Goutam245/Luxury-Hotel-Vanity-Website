import { motion } from "framer-motion";
import { MapPin, Clock, Car } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import sunsetStrip from "@/assets/sunset-strip.jpg";

const nearbyAttractions = [
  { name: "The Comedy Store", distance: "2 min walk" },
  { name: "Chateau Marmont", distance: "5 min walk" },
  { name: "Beverly Hills", distance: "10 min drive" },
];

export function LocationSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="section-luxury bg-secondary/30" aria-labelledby="location-heading">
      <div className="container mx-auto px-6 lg:px-12">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Map / Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="image-container aspect-[4/3]">
                <img
                  src={sunsetStrip}
                  alt="Sunset Strip, West Hollywood at golden hour"
                  className="image-luxury"
                  loading="lazy"
                />
              </div>
              {/* Map Pin Overlay */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isVisible ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-gold">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap">
                  <span className="bg-foreground text-background text-xs px-3 py-1">
                    The Valorian
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div className="space-y-4">
              <p className="text-caption text-primary">Location</p>
              <h2 id="location-heading" className="text-headline">
                Sunset Strip, West Hollywood
              </h2>
            </div>
            
            <div className="divider-gold !mx-0" />
            
            <p className="text-body-large text-muted-foreground">
              Nestled in the heart of West Hollywood's legendary Sunset Strip, 
              The Valorian places you at the epicenter of Los Angeles' most 
              vibrant creative community.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-background border border-border/50">
                <Clock className="w-5 h-5 text-primary mb-3" />
                <h4 className="font-medium mb-1">From LAX</h4>
                <p className="text-sm text-muted-foreground">35 minutes by car</p>
              </div>
              <div className="p-6 bg-background border border-border/50">
                <Car className="w-5 h-5 text-primary mb-3" />
                <h4 className="font-medium mb-1">Valet Parking</h4>
                <p className="text-sm text-muted-foreground">Complimentary for guests</p>
              </div>
            </div>

            {/* Nearby Attractions */}
            <div className="space-y-4">
              <h4 className="text-caption text-muted-foreground">Nearby</h4>
              <ul className="space-y-3">
                {nearbyAttractions.map((attraction) => (
                  <li key={attraction.name} className="flex items-center justify-between text-sm">
                    <span>{attraction.name}</span>
                    <span className="text-muted-foreground">{attraction.distance}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
