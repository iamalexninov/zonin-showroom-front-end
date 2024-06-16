import { HomeHero } from "../components/hero/home-hero/HomeHero";
import { ExplorePremiumBrands } from "../components/premium-brands/PremiumBrands";
import { Services } from "../components/services/Services";
import { Stats } from "../components/stats/Stats";
import { WhyChooseUs } from "../components/why-choose-us/WhyChooseUs";
import { LatestBlogPosts } from "../components/latest-blog-posts/LatestBlogPosts";
import { AutoHub } from "../components/autohub/AutoHub";
import { Subscribe } from "../components/subscribe/Subscribe";
import { ExplorePremiumCars } from "../components/vehicles/explore-premium-cars/ExplorePremiumCars";
import { PopularMakers } from "../components/vehicles/popular-makers/PopularMakers";

export const Home = () => {
  return (
    <>
      <HomeHero />
      <ExplorePremiumBrands />
      <ExplorePremiumCars />
      <Services />
      <Stats />
      <WhyChooseUs />
      <PopularMakers />
      <LatestBlogPosts />
      <AutoHub />
      <Subscribe />
    </>
  );
};
