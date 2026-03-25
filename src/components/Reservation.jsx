
import { motion } from "framer-motion";

export default function Reservation() {
  return (
    <section className="section">
      <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}}>
        Reserve Your Table
      </motion.h2>

      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "300px",
          margin: "auto"
        }}
      >
        <input placeholder="Full Name" />
        <input placeholder="Phone Number" />

        <select>
          <option>Select Package</option>
          <option>VIP</option>
        </select>

        <textarea placeholder="Special request"></textarea>

        <button className="btn">Reserve</button>
      </motion.form>
    </section>
  );
}