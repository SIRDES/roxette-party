import React, { useState } from "react";
import Hero from "./components/Hero";
import Reservation from "./components/Reservation";
import Tables from "./components/Tables";
import Gallery from "./components/Gallery";
import ParticlesBackground from "./components/ParticlesBackground";
import "./styles.css";

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState("");

  return (
    <>
      <ParticlesBackground />
      <div className="ambient-glow"></div>
      <Hero />
      <Reservation selectedPackage={selectedPackage} />
      <Tables onSelectPackage={setSelectedPackage} />
      <Gallery />
    </>
  );
}