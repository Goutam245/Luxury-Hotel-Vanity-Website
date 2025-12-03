import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroLobby from "@/assets/hero-lobby.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import rooftopBar from "@/assets/rooftop-bar.jpg";

const values = [
  {
    title: "Dream",
    description:
      "We believe in the power of imagination. Every detail at The Valorian is designed to transport you beyond the ordinary into a realm of possibility.",
  },
  {
    title: "Danger",
    description:
      "Life without a touch of thrill is merely existence. We embrace the unexpected, the daring, the moments that make your heart race.",
  },
  {
    title: "Desire",
    description:
      "True luxury speaks to what we yearn for—beauty, connection, experiences that linger in memory long after they've passed.",
  },
];

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <>
      <Helmet>
        <title>About | The Valorian West Hollywood</title>
        <meta
          name="description"
          content="Discover the story of The Valorian, an ethereal luxury hotel where elegance flirts with temptation on West Hollywood's legendary Sunset Strip."
        />
        <link rel="canonical" href="https://thevalorianhotel.com/about" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl mx-auto text-center"
            >
              <nav className="text-caption text-muted-foreground mb-8">
                <span>Home</span>
                <span className="mx-2">/</span>
                <span className="text-foreground">About</span>
              </nav>
              <h1 className="text-display mb-8">Our Story</h1>
              <blockquote className="text-subheadline text-muted-foreground font-serif italic">
                "Where elegance flirts with temptation."
              </blockquote>
            </motion.div>
          </div>
        </section>

        {/* Brand Story */}
        <section className="section-luxury bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="image-container aspect-[4/5]">
                  <img
                    src={heroLobby}
                    alt="The Valorian lobby interior"
                    className="image-luxury"
                    loading="lazy"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-8"
              >
                <p className="text-body-large text-muted-foreground leading-relaxed">
                  Rising above the Sunset Strip, The Valorian is a fever dream in white — 
                  a seductive collision of fantasy and fame. Within its translucent walls, 
                  glamour hides danger and pleasure flirts with consequence.
                </p>

                <p className="text-body text-muted-foreground leading-relaxed">
                  It's a place where creativity, confidence, and desire intertwine — 
                  a modern temple for those who live between light and shadow. Cross 
                  the threshold and time seems to slow, as if you've followed a White 
                  Rabbit into a world where rules dissolve and beauty bends.
                </p>

                <p className="text-body text-muted-foreground leading-relaxed">
                  Refined yet untamed, The Valorian invites guests to drift beyond 
                  reality, where every reflection hints at another world. Here, 
                  allure is the rule, and transcendence is always one drink — 
                  or one glance — away.
                </p>

                <blockquote className="border-l-2 border-primary pl-6 text-xl font-serif italic text-foreground/80">
                  Our brand whispers exclusivity and allure through restraint, not excess.
                </blockquote>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-luxury bg-charcoal text-primary-foreground">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <p className="text-caption text-primary-foreground/60 mb-4">Our Philosophy</p>
              <h2 className="text-headline">Three Pillars</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <h3 className="font-serif text-3xl font-medium mb-4 text-primary">
                    {value.title}
                  </h3>
                  <div className="w-12 h-px bg-primary mx-auto mb-6" />
                  <p className="text-sm text-primary-foreground/70 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Design */}
        <section className="section-luxury bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6 lg:order-1"
              >
                <div>
                  <p className="text-caption text-primary mb-2">Design Philosophy</p>
                  <h2 className="text-headline">Architecture of Dreams</h2>
                </div>

                <div className="divider-gold !mx-0" />

                <p className="text-body text-muted-foreground">
                  Our design philosophy draws from the surrealist tradition—where the 
                  familiar becomes extraordinary through subtle shifts in perception. 
                  Luminous whites and soft contrasts create spaces that feel both 
                  grounded and ethereal.
                </p>

                <p className="text-body text-muted-foreground">
                  Every element, from the flow of natural light to the placement of 
                  each piece of furniture, has been considered to create an atmosphere 
                  of seductive restraint. The result is spaces that reveal just enough 
                  to intrigue—inviting you deeper into the dream.
                </p>
              </motion.div>

              {/* Images Grid */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-2 gap-4 lg:order-2"
              >
                <div className="image-container aspect-[3/4]">
                  <img src={roomSuite} alt="Suite interior" className="image-luxury" loading="lazy" />
                </div>
                <div className="image-container aspect-[3/4] mt-8">
                  <img src={rooftopBar} alt="Rooftop design" className="image-luxury" loading="lazy" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
