import React from "react";
import Section1b from "./section1b/Section1b";
import Section1c from "./section1c/Section1c";
import Section1d from "./section1d/Section1d";
import Section1e from "./section1e/Section1e";
import Section1f from "./section1f/Section1f";
import Section1g from "./section1g/Section1g";

const Home = () => {
  return (
    <div className="home">
      <Section1b />
      <main>
        <Section1c />
        <Section1d />
        <Section1e />
        <Section1f />
        <Section1g />
      </main>
    </div>
  );
};

export default Home;
