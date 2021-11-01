import React from "react";
import InfoCard from "./components/infoCard";
import { infoDevs, infoPlayers } from "./constants";
const HowItWorks = () => {
  // TODO: Add the Squarish SVGs
  return (
    <div>
      <h1 className="hidden-heading">How</h1>
      <h2 className="heading">
        How it works
        <p className="green-border"></p>
        <br />
      </h2>
      <div className="m-2 leading-9">
        <h2 className="m-6">For Developers</h2>
        <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {infoDevs.map((card) => (
            <InfoCard details={card} />
          ))}
        </div>
        <h2 className="m-6">For Players</h2>
        <div className="grid  justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {infoPlayers.map((card) => (
            <InfoCard details={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
