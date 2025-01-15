import React from "react";
import homepage from "../imgs/homepage.jpg";
const HomePage = () => {
  return (
    <div>
      <main>
        <h1>HOME</h1>
        <p>
          Welcome to my blog - stick around and check out some of my findings...
        </p>
      </main>
      <img src={homepage} alt="Home Page Landing image" className="hp-img" />
    </div>
  );
};

export default HomePage;
