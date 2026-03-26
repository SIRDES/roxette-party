
import { motion } from "framer-motion";

const tables = [
     { 
    name: "Table for 10 (Platimium)", 
    price: "1000", 
    perks: ["A Table", "10 seater", "10 Bottled Water", "2 bottles of Palm Wine (1ltr) / 2 bottles of Coke (1.5Ltr)", "2 bottled wine", "Club 1 Crate (12 Bottles)"] 
  },
      { 
    name: "Table for 10 (Gold)", 
    price: "400", 
    perks: ["A Table", "10 seater", "10 Bottled Water", "2 bottles of Palm Wine (1ltr) / 2 bottles of Coke (1.5Ltr)"] 
  },
    { 
    name: "Table for 5 (Silver)", 
    price: "550", 
    perks: ["A Table", "5 seater", "5 Bottled Water", "Palm Wine (1ltr) / Coke (1.5Ltr)", "Club (6 Bottles)", "Bottled Wine"] 
  },

  { 
    name: "Table for 5 (Bronze)", 
    price: "250", 
    perks: ["A Table", "5 seater", "5 Bottled Water", "Palm Wine (1ltr) / Coke (1.5Ltr)"] 
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