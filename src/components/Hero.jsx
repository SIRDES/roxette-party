
import { motion } from "framer-motion";
import hero from "../assets/hero.jpeg";

export default function Hero() {
  return (
    <div style={{
      height: "100vh",
      background: `url(${hero}) center/cover`,
      position: "relative"
    }}>
      <div style={{
        background: "rgba(0,0,0,0.7)",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ textAlign: "center" }}
        >
          <h1 style={{
            fontSize: "2.5rem",
            color: "gold"
          }}>
            Easter Friday Vibes
          </h1>

          <p>Afrobeats x Amapiano • 8PM</p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="btn glow"
          >
            Reserve Table
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}