import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

const faqs = [
  { q: "What time is check-in and check-out?", a: "Check-in is at 3:00 PM and check-out is at 12:00 PM." },
  { q: "Is parking available?", a: "Complimentary valet parking is available for all hotel guests." },
  { q: "Do you allow pets?", a: "We welcome dogs under 25 lbs with a $75 per night fee." },
  { q: "Is there a dress code?", a: "Smart casual attire is requested in our restaurant and rooftop bar." },
];

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | The Valorian West Hollywood</title>
        <meta name="description" content="Contact The Valorian luxury hotel on West Hollywood's Sunset Strip. Reach us by phone, email, or visit us." />
      </Helmet>
      <Layout>
        <section className="relative pt-32 pb-20 lg:pt-40">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-display mb-16">Contact Us</motion.h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Form */}
              <motion.form initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" className="w-full px-4 py-3 bg-secondary border border-border focus:border-primary outline-none transition-colors" />
                  <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-secondary border border-border focus:border-primary outline-none transition-colors" />
                </div>
                <input type="tel" placeholder="Phone" className="w-full px-4 py-3 bg-secondary border border-border focus:border-primary outline-none transition-colors" />
                <textarea rows={5} placeholder="Message" className="w-full px-4 py-3 bg-secondary border border-border focus:border-primary outline-none transition-colors resize-none" />
                <Button variant="luxury" size="lg" type="submit">Send Message</Button>
              </motion.form>
              {/* Info */}
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="space-y-8">
                <div className="space-y-4">
                  <a href="https://maps.google.com" className="flex items-start gap-4 group"><MapPin className="w-5 h-5 text-primary mt-1" /><span className="group-hover:text-primary transition-colors">8440 Sunset Boulevard<br />West Hollywood, CA 90069</span></a>
                  <a href="tel:+13108080000" className="flex items-center gap-4 group"><Phone className="w-5 h-5 text-primary" /><span className="group-hover:text-primary transition-colors">+1 (310) 808-0000</span></a>
                  <a href="mailto:hello@thevalorianhotel.com" className="flex items-center gap-4 group"><Mail className="w-5 h-5 text-primary" /><span className="group-hover:text-primary transition-colors">hello@thevalorianhotel.com</span></a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* FAQ */}
        <section className="section-luxury bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
            <h2 className="text-headline text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="pb-6 border-b border-border">
                  <h4 className="font-medium mb-2">{faq.q}</h4>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
