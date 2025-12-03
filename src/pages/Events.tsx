import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Users, Sparkles, Briefcase } from "lucide-react";
import heroLobby from "@/assets/hero-lobby.jpg";
import restaurant from "@/assets/restaurant.jpg";

const eventTypes = [
  { icon: Briefcase, title: "Corporate Events", description: "Board meetings, conferences, and executive retreats" },
  { icon: Sparkles, title: "Social Celebrations", description: "Weddings, anniversaries, and milestone moments" },
  { icon: Users, title: "Private Parties", description: "Intimate gatherings and exclusive experiences" },
];

export default function Events() {
  return (
    <>
      <Helmet>
        <title>Events | The Valorian West Hollywood</title>
        <meta name="description" content="Host your next event at The Valorian. From corporate meetings to elegant celebrations, our venues offer unforgettable settings." />
      </Helmet>
      <Layout>
        <section className="pt-32 pb-20 lg:pt-40">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <h1 className="text-display mb-6">Events & Gatherings</h1>
              <p className="text-body-large text-muted-foreground">Create unforgettable moments in extraordinary settings.</p>
            </motion.div>
          </div>
        </section>
        <section className="section-luxury bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="image-container aspect-[4/3]">
                <img src={heroLobby} alt="Event space" className="image-luxury" />
              </motion.div>
              <div className="space-y-8">
                {eventTypes.map((type, i) => (
                  <motion.div key={type.title} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4">
                    <type.icon className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">{type.title}</h3>
                      <p className="text-sm text-muted-foreground">{type.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="section-luxury bg-charcoal text-primary-foreground text-center">
          <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
            <h2 className="text-headline mb-6">Plan Your Event</h2>
            <p className="text-body-large opacity-80 mb-10">Our events team is ready to bring your vision to life.</p>
            <Button variant="luxury" size="xl" asChild className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
              <a href="mailto:events@thevalorianhotel.com">Inquire Now</a>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
}
