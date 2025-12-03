import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import rooftopBar from "@/assets/rooftop-bar.jpg";
import restaurant from "@/assets/restaurant.jpg";
import sunsetStrip from "@/assets/sunset-strip.jpg";
import heroLobby from "@/assets/hero-lobby.jpg";

const experiences = [
  {
    id: 1,
    title: "Rooftop Bar",
    subtitle: "Elevated Spirits",
    description: "Sip craft cocktails above the city lights",
    image: rooftopBar,
    href: "/dining#rooftop",
  },
  {
    id: 2,
    title: "Fine Dining",
    subtitle: "Culinary Art",
    description: "California cuisine reimagined",
    image: restaurant,
    href: "/dining#restaurant",
  },
  {
    id: 3,
    title: "The Neighborhood",
    subtitle: "Sunset Strip",
    description: "The heartbeat of West Hollywood",
    image: sunsetStrip,
    href: "/experiences",
  },
  {
    id: 4,
    title: "The Lobby",
    subtitle: "First Impressions",
    description: "Where dreams begin to unfold",
    image: heroLobby,
    href: "/about",
  },
];

export function ExperiencesCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="section-luxury bg-background overflow-hidden" aria-labelledby="experiences-heading">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div className="max-w-xl">
            <p className="text-caption text-primary mb-4">Discover</p>
            <h2 id="experiences-heading" className="text-headline">
              Curated Experiences
            </h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 border border-border rounded-full flex items-center justify-center transition-all duration-300 hover:bg-secondary hover:border-primary"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 border border-border rounded-full flex items-center justify-center transition-all duration-300 hover:bg-secondary hover:border-primary"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-6 lg:px-12 pb-4"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {experiences.map((experience, index) => (
          <motion.article
            key={experience.id}
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            className="flex-shrink-0 w-[320px] md:w-[380px] group"
            style={{ scrollSnapAlign: "start" }}
          >
            <Link to={experience.href}>
              <div className="image-container aspect-[3/4] mb-6">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="image-luxury"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-primary-foreground">
                  <p className="text-caption mb-2 opacity-80">{experience.subtitle}</p>
                  <h3 className="font-serif text-2xl font-medium mb-2">{experience.title}</h3>
                  <p className="text-sm opacity-80">{experience.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                <span>Discover</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
