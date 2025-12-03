import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import rooftopBar from "@/assets/rooftop-bar.jpg";

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden" aria-label="Call to action">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={rooftopBar}
          alt="The Valorian rooftop at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Content */}
      <div ref={ref} className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-caption text-primary-foreground/80 mb-6"
          >
            Begin Your Journey
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-display text-primary-foreground mb-8"
          >
            Step Through the Looking Glass
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-primary-foreground/80 mb-12 font-serif italic"
          >
            Where allure is the rule, and transcendence is always one glance away.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button
              variant="luxury"
              size="xl"
              asChild
              className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90"
            >
              <a href="#book-now">Book Your Stay</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
