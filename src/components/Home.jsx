import React from "react";
import Section1b from "./section1b/Section1b";
import Section1c from "./section1c/Section1c";
import Section1d from "./section1d/Section1d";

const Home = () => {
  return (
    <div className="home">
      <Section1b />
      <main>
        <Section1c />
        <Section1d />
      </main>
    </div>
  );
};

export default Home;
