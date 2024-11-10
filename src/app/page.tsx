import React from "react";
// import Home from "@/components/home/Home"
import HeroSection from "@/components/home/HeroSection";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Portfolio from "@/components/portfolio/Portfolio";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

const page = () => {
  return (
    <div>
      {/* <Home /> */}
      <HeroSection />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
