import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { RoomsPreview } from "@/components/home/RoomsPreview";
import { ExperiencesCarousel } from "@/components/home/ExperiencesCarousel";
import { LocationSection } from "@/components/home/LocationSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>The Valorian | Luxury Hotel on Sunset Strip, West Hollywood</title>
        <meta
          name="description"
          content="Experience ethereal luxury at The Valorian, a 5-star hotel on the Sunset Strip in West Hollywood. Where elegance flirts with temptation. Book your stay today."
        />
        <meta property="og:title" content="The Valorian | Luxury Hotel West Hollywood" />
        <meta
          property="og:description"
          content="A fever dream in white — where elegance flirts with temptation on the Sunset Strip."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://thevalorianhotel.com" />
      </Helmet>

      <Layout>
        <HeroSection />
        <IntroSection />
        <RoomsPreview />
        <ExperiencesCarousel />
        <LocationSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
