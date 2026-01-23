import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations";

/* ICONS */
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiDjango,
  SiPostgresql,
  SiVscodium,
} from "react-icons/si";

export default function Skills() {
  return (
    <section className="page">
      {/* PAGE TITLE */}
      <motion.h2
        className="section-title"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      {/* SKILLS GRID */}
      <motion.div
        className="skills-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* FRONTEND */}
        <motion.div className="card" variants={fadeUp}>
          <h3>Frontend</h3>

          <div className="skill-badges">
            <span className="skill-badge html">
              <FaHtml5 /> HTML5
            </span>

            <span className="skill-badge css">
              <FaCss3Alt /> CSS3
            </span>

            <span className="skill-badge js">
              <FaJs /> JavaScript (ES6)
            </span>

            <span className="skill-badge react">
              <FaReact /> ReactJS
            </span>
          </div>
        </motion.div>

        {/* BACKEND */}
        <motion.div className="card" variants={fadeUp}>
          <h3>Backend</h3>

          <div className="skill-badges">
            <span className="skill-badge python">
              <FaPython /> Python
            </span>

            <span className="skill-badge django">
              <SiDjango /> Django
            </span>

            <span className="skill-badge postgres">
              <SiPostgresql /> PostgreSQL
            </span>
          </div>
        </motion.div>

        {/* TOOLS */}
        <motion.div className="card" variants={fadeUp}>
          <h3>Tools</h3>

          <div className="skill-badges">
            <span className="skill-badge git">
              <FaGitAlt /> Git
            </span>

            <span className="skill-badge github">
              <FaGithub /> GitHub
            </span>

            <span className="skill-badge vscode">
              <SiVscodium /> VS Code
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
