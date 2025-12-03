import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin } from "lucide-react";
import sunsetStrip from "@/assets/sunset-strip.jpg";
import rooftopBar from "@/assets/rooftop-bar.jpg";

const highlights = [
  {
    category: "Nightlife",
    description: "World-class clubs, legendary music venues, and intimate lounges line the Strip.",
    image: rooftopBar,
  },
  {
    category: "Shopping",
    description: "From designer boutiques to vintage finds, discover fashion without boundaries.",
    image: sunsetStrip,
  },
  {
    category: "Culture",
    description: "Galleries, theaters, and creative spaces that define LA's artistic pulse.",
    image: sunsetStrip,
  },
];

const recommendations = [
  { name: "The Comedy Store", type: "Entertainment", distance: "2 min walk" },
  { name: "Chateau Marmont", type: "Landmark", distance: "5 min walk" },
  { name: "Pacific Design Center", type: "Design", distance: "8 min walk" },
  { name: "Runyon Canyon", type: "Nature", distance: "10 min drive" },
  { name: "The Grove", type: "Shopping", distance: "12 min drive" },
  { name: "LACMA", type: "Museum", distance: "15 min drive" },
];

export default function Experiences() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <>
      <Helmet>
        <title>Experiences | The Valorian West Hollywood</title>
        <meta
          name="description"
          content="Discover West Hollywood from The Valorian. Explore the Sunset Strip's legendary nightlife, shopping, and cultural attractions steps from our door."
        />
        <link rel="canonical" href="https://thevalorianhotel.com/experiences" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-end pb-20">
          <div className="absolute inset-0">
            <img
              src={sunsetStrip}
              alt="Sunset Strip, West Hollywood at golden hour"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>

          <div className="relative z-10 container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <nav className="text-caption text-muted-foreground mb-8">
                <span>Home</span>
                <span className="mx-2">/</span>
                <span className="text-foreground">Experiences</span>
              </nav>
              <h1 className="text-display mb-6">West Hollywood Awaits</h1>
              <p className="text-body-large text-muted-foreground">
                Where creativity, glamour, and possibility intersect on the legendary Sunset Strip.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        <section className="section-luxury bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl mx-auto text-center mb-20"
            >
              <p className="text-caption text-primary mb-4">The Neighborhood</p>
              <h2 className="text-headline mb-6">A World of Discovery</h2>
              <div className="divider-gold mb-6" />
              <p className="text-body-large text-muted-foreground">
                West Hollywood is more than a location—it's a state of mind. Here, 
                creative freedom meets refined taste, and every corner reveals 
                something unexpected. From the iconic Sunset Strip to hidden 
                neighborhood gems, this is Los Angeles at its most captivating.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {highlights.map((highlight, index) => (
                <motion.article
                  key={highlight.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group"
                >
                  <div className="image-container aspect-[4/5] mb-6">
                    <img
                      src={highlight.image}
                      alt={highlight.category}
                      className="image-luxury"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-primary-foreground">
                      <h3 className="font-serif text-2xl font-medium">{highlight.category}</h3>
                    </div>
                  </div>
                  <p className="text-body text-muted-foreground">{highlight.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="section-luxury bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto text-center mb-16"
            >
              <p className="text-caption text-primary mb-4">Curated</p>
              <h2 className="text-headline mb-6">Local Favorites</h2>
              <div className="divider-gold mb-6" />
              <p className="text-body text-muted-foreground">
                Our concierge-selected recommendations for the best of West Hollywood.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {recommendations.map((place, index) => (
                <motion.div
                  key={place.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between py-5 border-b border-border last:border-0"
                >
                  <div className="flex items-center gap-4">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">{place.name}</h4>
                      <p className="text-xs text-muted-foreground">{place.type}</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">{place.distance}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="section-luxury bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="aspect-[16/9] bg-secondary border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.3789851888584!2d-118.38542032357305!3d34.09026257314426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bed3b5f12b0d%3A0x1a12f7b0f8e4f6e6!2sSunset%20Strip%2C%20West%20Hollywood%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Valorian location map"
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
