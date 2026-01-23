import { motion } from "framer-motion";
import { fadeUp } from "../animations";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="page">
      <motion.div
        className="contact-card"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
      >
        <h2 className="section-title">Contact</h2>

        <h4 >Mobile: 6305627782</h4>

        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:sripadamprasannakumar@gmail.com">
            sripadamprasannakumar@gmail.com
          </a>
        </p>

        <h3>Address</h3>
        <p>
          2-198/1, Sapavaram,<br />
          Kakinada, Andhra Pradesh
        </p>

        <p className="map-link">
          <FaMapMarkerAlt />{" "}
          <a
            href="https://maps.app.goo.gl/jH4fbYPk8FRUvwun9"
            target="_blank"
            rel="noreferrer"
          >
            View on Google Maps
          </a>
        </p>

        <div className="map-container">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Sapavaram,Kakinada&output=embed"
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
}
