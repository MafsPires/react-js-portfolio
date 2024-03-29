import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import MyPortfolio from "../MyPortfolio";
import Navbar from "../Navbar";



export default function Home () {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MySkills/>
      <AboutMe/>
      <MyPortfolio/>
    </>
  );
}
