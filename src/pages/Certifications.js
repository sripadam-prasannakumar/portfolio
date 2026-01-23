import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations";

export default function Certifications() {
  return (


    
    <section className="page">
      {/* INTERNSHIP SECTION */}
      <motion.h2
        className="section-title"
        style={{ marginTop: "70px" }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Internship
      </motion.h2>

      <motion.div
        className="card"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{ y: -6 }}
      >
        <h3 className="section-subtitle">
          <strong>Company:</strong> Krify Software Technologies
        </h3>

        <p className="cert-org">
          
          Python Full Stack Developer Intern
        </p>

        <p className="cert-org">
          <strong>Duration:</strong> September 10, 2025 – March 10, 2026 (6 Months)
        </p>

        <p style={{ marginTop: "14px", lineHeight: "1.7" }}>
          Completed a 6-month internship focused on Python Full Stack Development.
          Gained hands-on experience in building scalable web applications using
          Python, Django, React, and postgreSQL. Worked on backend API development,
          frontend integration, and responsive UI design in a professional
          software development environment.
        </p>
      </motion.div>
      
      {/* PAGE TITLE */}
      <motion.h2
        className="section-title"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Certifications
      </motion.h2>

      {/* CERTIFICATION LIST */}
      <motion.div
        className="cert-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* CERT 1 */}
        <motion.div
          className="cert-card"
          variants={fadeUp}
          whileHover={{ y: -6 }}
        >
          <h3>Python Programming</h3>
          <p className="cert-org">Infosys Springboard</p>

          <div className="cert-preview">
            <div className="overlay">
              <a
                href="/certificates/python-certificate.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Preview
              </a>
            </div>
          </div>
        </motion.div>

        {/* CERT 2 */}
        <motion.div
          className="cert-card"
          variants={fadeUp}
          whileHover={{ y: -6 }}
        >
          <h3>SQL & Database Fundamentals</h3>
          <p className="cert-org">Infosys Springboard</p>

          <div className="cert-preview">
            <div className="overlay">
              <a
                href="/certificates/sql-certificate.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Preview
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      
    </section>
  );
}
