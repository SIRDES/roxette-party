
import { motion } from "framer-motion";
import p1 from "../assets/hero.jpeg";
import p2 from "../assets/hero.jpeg";
import p3 from "../assets/hero.jpeg";
import p4 from "../assets/hero.jpeg";

export default function Gallery() {
  const images = [p1, p2, p3, p4];

  return (
    <section className="section">
      <h2>Previous Events</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
        gap: "10px"
      }}>
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            whileHover={{ scale: 1.05 }}
            style={{
              width: "100%",
              borderRadius: "10px"
            }}
          />
        ))}
      </div>
    </section>
  );
}