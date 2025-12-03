import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Clock, Users, Utensils } from "lucide-react";
import restaurant from "@/assets/restaurant.jpg";
import rooftopBar from "@/assets/rooftop-bar.jpg";
import heroLobby from "@/assets/hero-lobby.jpg";

const signatureCocktails = [
  { name: "The White Rabbit", description: "Elderflower, gin, champagne, white peach" },
  { name: "Sunset Mirage", description: "Mezcal, blood orange, agave, charred rosemary" },
  { name: "Velvet Hour", description: "Bourbon, honey, lavender, lemon" },
  { name: "Looking Glass", description: "Vodka, cucumber, mint, sparkling water" },
];

export default function Dining() {
  const { ref: restaurantRef, isVisible: restaurantVisible } = useScrollAnimation();
  const { ref: rooftopRef, isVisible: rooftopVisible } = useScrollAnimation();
  const { ref: barRef, isVisible: barVisible } = useScrollAnimation();

  return (
    <>
      <Helmet>
        <title>Dining & Bars | The Valorian West Hollywood</title>
        <meta
          name="description"
          content="Experience exceptional dining at The Valorian. From California cuisine at our restaurant to craft cocktails at our rooftop bar with stunning LA views."
        />
        <link rel="canonical" href="https://thevalorianhotel.com/dining" />
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
                <span className="text-foreground">Dining & Bars</span>
              </nav>
              <h1 className="text-display mb-6">Dining & Nightlife</h1>
              <p className="text-body-large text-muted-foreground">
                From intimate dinners to rooftop revelry, every culinary experience 
                at The Valorian is designed to captivate the senses.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Restaurant Section */}
        <section id="restaurant" className="section-luxury bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div ref={restaurantRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={restaurantVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6"
              >
                <div>
                  <p className="text-caption text-primary mb-2">The Restaurant</p>
                  <h2 className="text-headline">Reflection</h2>
                </div>

                <div className="divider-gold !mx-0" />

                <p className="text-body-large text-muted-foreground">
                  At Reflection, California's finest ingredients meet global inspiration. 
                  Our kitchen celebrates the region's bounty with dishes that are both 
                  familiar and surprising.
                </p>

                <p className="text-body text-muted-foreground">
                  Executive Chef creates seasonal menus that honor local farmers and 
                  artisans while drawing on techniques from around the world. The result 
                  is cuisine that feels both rooted and adventurous.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Hours</p>
                      <p className="text-xs text-muted-foreground">6:30am - 10:30pm</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Utensils className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Cuisine</p>
                      <p className="text-xs text-muted-foreground">California Modern</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button variant="luxury" asChild>
                    <a href="#book-now">Reserve a Table</a>
                  </Button>
                  <Button variant="luxury-outline" asChild>
                    <a href="#menu">View Menu</a>
                  </Button>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={restaurantVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="image-container aspect-[4/5]">
                  <img
                    src={restaurant}
                    alt="Reflection restaurant interior with elegant white decor"
                    className="image-luxury"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Rooftop Bar Section */}
        <section id="rooftop" className="relative min-h-[80vh] flex items-center">
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src={rooftopBar}
              alt="The Valorian rooftop bar at sunset"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/50" />
          </div>

          <div className="relative z-10 container mx-auto px-6 lg:px-12">
            <div ref={rooftopRef} className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={rooftopVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="bg-background/95 backdrop-blur-sm p-10 lg:p-14 space-y-6"
              >
                <div>
                  <p className="text-caption text-primary mb-2">Rooftop Bar</p>
                  <h2 className="text-headline">The Veil</h2>
                </div>

                <div className="divider-gold !mx-0" />

                <p className="text-body text-muted-foreground">
                  Perched above the Sunset Strip, The Veil offers craft cocktails and 
                  panoramic views that stretch from downtown to the Pacific. As day 
                  turns to night, the city transforms into a sea of lights below.
                </p>

                <div className="space-y-3">
                  <h4 className="text-caption text-primary">Signature Cocktails</h4>
                  <ul className="space-y-2">
                    {signatureCocktails.map((cocktail) => (
                      <li key={cocktail.name} className="text-sm">
                        <span className="font-medium">{cocktail.name}</span>
                        <span className="text-muted-foreground"> — {cocktail.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-6 pt-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>5pm - 2am</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-primary" />
                    <span>Smart Casual</span>
                  </div>
                </div>

                <Button variant="luxury" asChild>
                  <a href="#book-now">Reserve a Table</a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bar Interior Section */}
        <section className="section-luxury bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div ref={barRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={barVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="image-container aspect-[4/3]">
                  <img
                    src={heroLobby}
                    alt="The Valorian lobby bar interior"
                    className="image-luxury"
                    loading="lazy"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={barVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6"
              >
                <div>
                  <p className="text-caption text-primary mb-2">Lobby Bar</p>
                  <h2 className="text-headline">The Looking Glass</h2>
                </div>

                <div className="divider-gold !mx-0" />

                <p className="text-body text-muted-foreground">
                  Just off the lobby, The Looking Glass offers an intimate setting 
                  for afternoon tea, evening aperitifs, and everything in between. 
                  The space features custom artwork and a carefully curated selection 
                  of rare spirits.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div>
                    <p className="text-caption text-muted-foreground mb-1">Hours</p>
                    <p className="text-sm">11am - 12am</p>
                  </div>
                  <div>
                    <p className="text-caption text-muted-foreground mb-1">Dress Code</p>
                    <p className="text-sm">Refined Casual</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
