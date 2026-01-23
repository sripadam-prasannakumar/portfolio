import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations";

export default function Projects() {
  return (
    <section className="page">
      {/* TITLE */}
      <motion.h2
        className="section-title"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      {/* PROJECT LIST */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* PROJECT 1 */}
        <motion.div
          className="card"
          variants={fadeUp}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <h3 className="section-subtitle">
            Real-Time Chat Application using React & Firebase
          </h3>

          <ul className="project-points">
            <li>Secure user authentication using Firebase.</li>
            <li>Real-time one-to-one messaging with instant updates.</li>
            <li>Left–right chat layout for better readability.</li>
            <li>Live online/offline user status.</li>
            <li>Reply, edit (time-limited), and delete messages.</li>
            <li>WhatsApp-style emoji reactions with quick reactions.</li>
            <li>Full emoji picker support.</li>
            <li>Automatic scroll to latest message.</li>
            <li>Fully responsive on desktop and mobile.</li>
            <li>All data securely stored and synced with Firebase.</li>
          </ul>

          <p className="tech-stack">
            <strong>Technologies Used:</strong> ReactJS, Firebase, JavaScript,
            HTML5, CSS3, Git, GitHub
          </p>
        </motion.div>

        {/* PROJECT 2 */}
        <motion.div
          className="card"
          variants={fadeUp}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <h3 className="section-subtitle">Task Management Portal</h3>

          <ul className="project-points">
            <li>User authentication with secure login.</li>
            <li>Create, update, and delete tasks.</li>
            <li>Task completion tracking with status updates.</li>
            <li>Clean and intuitive UI.</li>
            <li>Efficient task organization.</li>
            <li>Secure backend validation.</li>
            <li>Relational database for task storage.</li>
            <li>Fully responsive across devices.</li>
          </ul>

          <p className="tech-stack">
            <strong>Technologies Used:</strong> ReactJS, Python, Django, MySQL,
            JavaScript (ES6), HTML5, CSS3, Git, GitHub
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
