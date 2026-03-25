
import { motion } from "framer-motion";

const tables = [
  { name: "Bronze", price: "800", perks: ["1 Bottle", "Mixers"] },
  { name: "Silver", price: "1500", perks: ["2 Bottles", "Shisha"] },
  { name: "Gold", price: "2500", perks: ["VIP", "2 Shisha"] },
  { name: "VIP", price: "4000", perks: ["Top Shelf", "Waiter"] },
];

export default function Tables() {
  return (
    <section className="section">
      <h2>Table Packages</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
        gap: "20px"
      }}>
        {tables.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08 }}
            className="glow"
            style={{
              padding: "20px",
              borderRadius: "10px",
              background: "#111"
            }}
          >
            <h3>{t.name}</h3>
            <p style={{ color: "gold" }}>GHS {t.price}</p>

            {t.perks.map((p, i) => (
              <p key={i}>✔ {p}</p>
            ))}

            <button className="btn">Reserve</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}