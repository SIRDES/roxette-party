
import Hero from "./components/Hero";
import Reservation from "./components/Reservation";
import Tables from "./components/Tables";
import Gallery from "./components/Gallery";
import "./styles.css";

export default function App() {
  return (
    <>
      <div className="ambient-glow"></div>
      <Hero />
      <Reservation />
      <Tables />
      <Gallery />
    </>
  );
}