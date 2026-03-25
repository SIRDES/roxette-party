
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
        <div style={{ marginBottom: "-30px" }}>
          <span className="script-font" style={{ fontSize: "6rem", color: "var(--primary-gold)", display: "block" }}>Roxette</span>
        </div>
        
        <h1 className="block-font" style={{ 
          fontSize: "5.5rem", 
          lineHeight: "0.9",
          margin: "0",
          background: "linear-gradient(to bottom, #fff, #bbb)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 0 30px rgba(255,255,255,0.2)"
        }}>
          Easter Friday
        </h1>
        
        <div style={{ marginTop: "-20px" }}>
          <span className="script-font" style={{ fontSize: "5rem", color: "var(--primary-gold)" }}>Vibes</span>
        </div>

        <p className="block-font" style={{ 
          fontSize: "1.5rem", 
          marginTop: "20px", 
          letterSpacing: "4px",
          color: "rgba(255,255,255,0.9)"
        }}>
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