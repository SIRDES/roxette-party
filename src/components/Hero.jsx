
import { motion } from "framer-motion";
import hero from "../assets/hero.jpeg";

export default function Hero() {
  return (
    <div style={{
      height: "100vh",
      background: `linear-gradient(to bottom, rgba(5, 5, 16, 0.4), rgba(5, 5, 16, 0.9)), url(${hero}) center/cover`,
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px"
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        style={{ textAlign: "center", maxWidth: "800px" }}
      >
        <div>
          <span className="script-font hero-title-accent">Roxette</span>
        </div>
        
        <h1 className="block-font hero-title-main">
          Easter Friday
        </h1>
        
        <div>
          <span className="script-font hero-title-bottom">Vibes</span>
        </div>
        
        <p className="block-font hero-subtitle">
          Afrobeats x Amapiano Party
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-gold"
          style={{ marginTop: "40px" }}
          onClick={() => {
            const reservationSection = document.getElementById("reservation");
            if (reservationSection) {
              reservationSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Reserve Your Table
        </motion.button>
      </motion.div>
    </div>
  );
}