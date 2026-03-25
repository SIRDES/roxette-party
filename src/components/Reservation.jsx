
import { motion } from "framer-motion";

export default function Reservation() {
  return (
    <section className="section" style={{ padding: "100px 20px", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px", alignItems: "start" }}>
        
        {/* Left: Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="block-font" style={{ fontSize: "2.5rem", marginBottom: "15px", textAlign: "left" }}>
            Reserve Your Table
          </h2>
          <p className="subtitle" style={{ textAlign: "left", marginBottom: "30px", fontSize: "0.9rem" }}>
            Reserve your table and enjoy the best Easter Friday party in town! Select your table package below and let's make it a night to remember.
          </p>

          <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
              <input type="text" placeholder="Full Name" style={inputStyle} />
              <input type="text" placeholder="Phone Number" style={inputStyle} />
            </div>
            
            <select style={inputStyle}>
              <option>Select Table Package</option>
              <option>Bronze Table - GHS 800</option>
              <option>Silver Table - GHS 1500</option>
              <option>Gold Table - GHS 2500</option>
              <option>VIP Table - GHS 4000</option>
            </select>

            <textarea placeholder="Special requests..." style={{ ...inputStyle, minHeight: "100px" }}></textarea>

            <button type="submit" className="btn-gold" style={{ width: "100%", marginTop: "10px" }}>
              Reserve Now
            </button>
          </form>
        </motion.div>

        {/* Right: Contact */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: "20px" }}
        >
          <div className="card-glass" style={{ textAlign: "center", padding: "40px 20px" }}>
             <p className="block-font" style={{ fontSize: "1.8rem", color: "var(--primary-gold)", marginBottom: "10px" }}>
               +233 548 705 628
             </p>
             <a href="https://wa.me/233548705628" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.474.875 3.129 1.334 4.854 1.335h.001c5.455 0 9.894-4.439 9.897-9.896.002-2.644-1.026-5.128-2.896-6.998s-4.354-2.899-6.998-2.899c-5.456 0-9.894 4.44-9.897 9.897-.001 1.769.469 3.498 1.359 5.011l-1.02 3.723 3.821-1.001zm11.232-7.514c-.308-.154-1.821-.898-2.103-.999-.281-.102-.486-.154-.69.154s-.791.999-.969 1.179c-.178.18-.357.205-.665.051-.308-.154-1.301-.48-2.479-1.532-.916-.817-1.535-1.826-1.714-2.133-.18-.308-.019-.474.135-.627.139-.138.308-.359.462-.538.154-.18.206-.308.308-.513.102-.205.051-.385-.026-.538-.077-.154-.69-1.666-.945-2.28-.248-.599-.5-.517-.69-.527l-.589-.009c-.205 0-.538.077-.82.385-.282.308-1.077 1.051-1.077 2.564s1.102 2.974 1.256 3.179c.154.205 2.167 3.31 5.248 4.64.733.318 1.305.507 1.75.649.736.233 1.406.2 1.936.12.59-.089 1.821-.744 2.077-1.462.256-.718.256-1.334.179-1.462-.077-.128-.282-.205-.59-.359z"/></svg>
               <span>Chat on WhatsApp</span>
             </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

const inputStyle = {
  background: "rgba(255, 255, 255, 0.05)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  padding: "15px",
  borderRadius: "8px",
  color: "white",
  fontSize: "1rem",
  outline: "none",
  transition: "0.3s"
};