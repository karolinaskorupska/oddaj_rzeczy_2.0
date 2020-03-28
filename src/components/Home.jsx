import React from "react";
import Section1b from "./section1b/Section1b";
import Section1c from "./section1c/Section1c";
import Section1d from "./section1d/Section1d";
import Section1e from "./section1e/Section1e";
// import Section1f from "./section1f/Section1f";
import Section1g from "./section1g/Section1g";
import Section1f2 from "./section1f/section1f2";


const Home = () => {
  return (
    <div className="home">
      <Section1b />
      <main>
        <Section1c />
        <Section1d />
        <Section1e />
        <Section1f2 />
        <Section1g />
      </main>
    </div>
  );
};

export default Home;
