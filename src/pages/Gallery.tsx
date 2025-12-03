import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import heroLobby from "@/assets/hero-lobby.jpg";
import roomPremium from "@/assets/room-premium.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import roomPenthouse from "@/assets/room-penthouse.jpg";
import rooftopBar from "@/assets/rooftop-bar.jpg";
import restaurant from "@/assets/restaurant.jpg";
import sunsetStrip from "@/assets/sunset-strip.jpg";

const images = [
  { src: heroLobby, alt: "Lobby", category: "Spaces" },
  { src: roomPremium, alt: "Premium Room", category: "Rooms" },
  { src: rooftopBar, alt: "Rooftop Bar", category: "Dining" },
  { src: roomSuite, alt: "Suite", category: "Rooms" },
  { src: restaurant, alt: "Restaurant", category: "Dining" },
  { src: sunsetStrip, alt: "Views", category: "Views" },
  { src: roomPenthouse, alt: "Penthouse", category: "Rooms" },
];

export default function Gallery() {
  return (
    <>
      <Helmet>
        <title>Gallery | The Valorian West Hollywood</title>
        <meta name="description" content="Explore The Valorian through our gallery. Discover our luxury rooms, rooftop bar, restaurant, and stunning Los Angeles views." />
      </Helmet>
      <Layout>
        <section className="pt-32 pb-20 lg:pt-40">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-display mb-6">Gallery</motion.h1>
          </div>
        </section>
        <section className="pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {images.map((img, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="break-inside-avoid image-container group cursor-pointer">
                  <img src={img.src} alt={img.alt} className="image-luxury" loading="lazy" />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-end p-6 opacity-0 group-hover:opacity-100">
                    <span className="text-primary-foreground text-sm font-medium">{img.category}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
