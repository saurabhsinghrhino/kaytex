import React from "react";
import Hero from "../components/Hero";
import Statistics from "../components/Statistics";
import Categories from "../components/Categories";
import BrandStatement from "../components/BrandStatement";
import GlobalReach from "../components/GlobalReach";
import FinalCTA from "../components/FinalCTA";
import About from "../components/About";
import Capabilities from "../components/Capabilities";

export const Home = () => {
  return (
    <>
      <Hero />
      <Statistics />
      <About />
      <Capabilities />
      <Categories />
      <BrandStatement />
      <GlobalReach />
      <FinalCTA />
    </>
  );
};

export default Home;
