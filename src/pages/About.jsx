import { AboutPreview } from "../components/about-preview/AboutPreview";
import { GenericHero } from "../components/hero/generic-hero/GenericHero";
import { WhyChooseUs } from "../components/why-choose-us/WhyChooseUs";
import { Services } from "../components/services/Services";
import { Stats } from "../components/stats/Stats";
import { ExplorePremiumBrands } from "../components/premium-brands/PremiumBrands";

export const About = () => {
  return (
    <>
      <GenericHero header="About Us" title="Our History" />
      <AboutPreview />
      <WhyChooseUs />
      <Services />
      <Stats />
      <ExplorePremiumBrands type="generic" />
    </>
  );
};
