
import { motion } from "framer-motion";

const tables = [
  { 
    name: "Bronze Table", 
    price: "800", 
    perks: ["1 Bottles (Local Spirit)", "Mixers", "Reserved Seating (4 people)"] 
  },
  { 
    name: "Silver Table", 
    price: "1500", 
    perks: ["2 Bottles (Premium)", "Mixers", "1 Shisha Pot seating (6 people)"] 
  },
  { 
    name: "Gold Table", 
    price: "2500", 
    perks: ["3 Bottles (Premium)", "Mixers", "2 Shisha Pots", "VIP Seating (8 people)"] 
  },
  { 
    name: "VIP Table", 
    price: "4000", 
    perks: ["4 Bottles (Top Shelf)", "Unlimited Mixers", "3 Shisha Pots", "Dedicated Waiter"] 
  },
];

export default function Tables({ onSelectPackage }) {
  const handleReserve = (pkgName, price) => {
    onSelectPackage(`${pkgName} - GHS ${price}`);
    const reservationSection = document.getElementById("reservation");
    if (reservationSection) {
      reservationSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section" style={{ padding: "100px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h2 className="section-title block-font">
          <span>&rarr;</span> Table Packages <span>&larr;</span>
        </h2>
        <p className="subtitle">
          Reserve your table and enjoy the best Easter Friday party in town! Select your table package below and let's make it a night to remember.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "25px",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        {tables.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className="card-glass"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px"
            }}
          >
            <div style={{ textAlign: "center" }}>
              <h3 className="block-font" style={{ fontSize: "1.5rem", marginBottom: "5px" }}>{t.name}</h3>
              <p style={{ color: "var(--primary-gold)", fontSize: "1.4rem", fontWeight: "bold" }}>GHS {t.price}</p>
            </div>

            <div style={{ flex: 1 }}>
              {t.perks.map((p, j) => (
                <p key={j} style={{ 
                  fontSize: "0.85rem", 
                  color: "rgba(255,255,255,0.8)", 
                  marginBottom: "8px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px"
                }}>
                  <span style={{ color: "var(--primary-gold)" }}>✔</span> {p}
                </p>
              ))}
            </div>

            <button 
              className="btn-gold" 
              style={{ width: "100%", fontSize: "0.9rem" }}
              onClick={() => handleReserve(t.name, t.price)}
            >
              Reserve Now
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}