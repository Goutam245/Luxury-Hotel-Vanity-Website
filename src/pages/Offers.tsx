import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import roomPremium from "@/assets/room-premium.jpg";
import rooftopBar from "@/assets/rooftop-bar.jpg";
import roomSuite from "@/assets/room-suite.jpg";

const offers = [
  {
    title: "Romance Package",
    subtitle: "For Two",
    description: "Champagne on arrival, couples spa treatment, and a private rooftop dinner under the stars.",
    price: "From $1,295",
    image: roomPremium,
  },
  {
    title: "Extended Stay",
    subtitle: "Stay Longer, Save More",
    description: "Book 4 nights or more and receive 20% off your stay plus daily breakfast for two.",
    price: "20% Off",
    image: roomSuite,
  },
  {
    title: "Rooftop Experience",
    subtitle: "Elevated Evenings",
    description: "Suite accommodation with priority rooftop reservations and a signature cocktail tasting.",
    price: "From $895",
    image: rooftopBar,
  },
];

export default function Offers() {
  return (
    <>
      <Helmet>
        <title>Special Offers | The Valorian West Hollywood</title>
        <meta name="description" content="Discover exclusive packages and special offers at The Valorian. From romantic getaways to extended stays." />
      </Helmet>
      <Layout>
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
              <h1 className="text-display mb-6">Special Offers</h1>
              <p className="text-body-large text-muted-foreground">Curated experiences designed for unforgettable moments.</p>
            </motion.div>
          </div>
        </section>
        <section className="section-luxury bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offers.map((offer, index) => (
                <motion.article key={offer.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="card-luxury overflow-hidden">
                  <div className="image-container aspect-[4/3]">
                    <img src={offer.image} alt={offer.title} className="image-luxury" loading="lazy" />
                  </div>
                  <div className="p-8 space-y-4">
                    <p className="text-caption text-primary">{offer.subtitle}</p>
                    <h3 className="font-serif text-2xl font-medium">{offer.title}</h3>
                    <p className="text-sm text-muted-foreground">{offer.description}</p>
                    <div className="flex items-center justify-between pt-4">
                      <span className="font-medium text-primary">{offer.price}</span>
                      <Button variant="luxury" size="sm" asChild><a href="#book-now">Book Now</a></Button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
