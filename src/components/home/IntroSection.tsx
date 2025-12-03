import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import rooftopImage from "@/assets/rooftop-bar.jpg";

export function IntroSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="introduction" className="section-luxury bg-background" aria-labelledby="intro-heading">
      <div className="container mx-auto px-6 lg:px-12">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-caption text-primary">Where Dreams Take Form</p>
              <h2 id="intro-heading" className="text-headline">
                Step Through the Looking Glass
              </h2>
            </div>
            
            <div className="divider-gold !mx-0" />
            
            <p className="text-body-large text-muted-foreground">
              Rising above the Sunset Strip, The Valorian is a seductive collision of fantasy and fame. 
              Within its luminous walls, glamour hides danger and pleasure flirts with consequence.
            </p>
            
            <p className="text-body text-muted-foreground">
              Cross the threshold and time seems to slow, as if you've followed a White Rabbit into 
              a world where rules dissolve and beauty bends. Refined yet untamed, The Valorian invites 
              guests to drift beyond reality, where every reflection hints at another world.
            </p>
            
            <motion.blockquote 
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="border-l-2 border-primary pl-6 italic font-serif text-xl text-foreground/80"
            >
              "Where elegance flirts with temptation."
            </motion.blockquote>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="image-container aspect-[4/5] lg:aspect-[3/4]"
          >
            <img
              src={rooftopImage}
              alt="The Valorian rooftop terrace with panoramic Los Angeles views at sunset"
              className="image-luxury"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
