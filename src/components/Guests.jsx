import React from "react";
import { motion } from "framer-motion";
import guest1 from "../assets/khemikal.jpeg";
import guest2 from "../assets/nino.jpeg";
// import guest3 from "../assets/guest3.png";

const guests = [
  {
    name: "Khemikal",
    image: guest1,
    role: "Special Appearance"
    // role: "Afrobeats Star"
  },
  {
    name: "Nino",
    image: guest2,
    role: "Special Appearance"
    // role: "International DJ"
  },
  // {
  //   name: "Influencer",
  //   image: guest3,
  //   role: "Special Appearance"
  // }
];

export default function Guests() {
  return (
    <section className="section" id="guests" style={{ padding: "100px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h2 className="section-title block-font">
          <span>&rarr;</span> Special Guests <span>&larr;</span>
        </h2>
        <p className="subtitle">
          Spotted at Roxette Nights. Experience the vibe with our exclusive guest lineup.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "30px",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        {guests.map((g, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -5 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
              transition: "all 0.3s ease"
            }}
          >
            <div style={{ position: "relative", height: "350px" }}>
              <img
                src={g.image}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                alt={g.name}
              />
              {/* Glow overlay */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)"
              }} />
            </div>

            <div style={{ padding: "20px", position: "relative", zIndex: 2 }}>
              <h4 style={{ color: "#FFD700", fontSize: "1.4rem", marginBottom: "5px", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
                {g.name}
              </h4>
              <p style={{ fontSize: "0.95rem", opacity: 0.8, color: "#fff" }}>
                {g.role}
              </p>
            </div>
            
            {/* Subtle accent border on hover - handled by style transition or CSS */}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
