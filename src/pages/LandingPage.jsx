import Hero from "../components/Hero";
import Content from "../components/Content";
import Share from "../components/Share";
import LandingHeader from "../components/LandingHeader";
const Home = () => {
  return (
    <>
    <LandingHeader/>
      <Hero />
      <Share />
      <Content />
    </>
  );
};

export default Home;
