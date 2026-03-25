
import { motion } from "framer-motion";
import p1 from "../assets/party1.jpeg";
import p2 from "../assets/party2.jpeg";
import p3 from "../assets/party3.jpeg";
import p4 from "../assets/party4.jpeg";

export default function Gallery() {
  const images = [p1, p2, p3, p4];

  return (
    <section className="section" style={{ padding: "100px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h2 className="section-title block-font">
          <span>&rarr;</span> Previous Events <span>&larr;</span>
        </h2>
        <p className="subtitle">
          Check out the lit vibes from our past events. Don't miss out this year!
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "20px",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            style={{ position: "relative", overflow: "hidden", borderRadius: "12px" }}
          >
            <img
              src={img}
              alt={`Event ${i + 1}`}
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
                display: "block"
              }}
            />
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(to bottom, transparent 60%, rgba(5,5,16,0.8))",
              pointerEvents: "none"
            }}></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}