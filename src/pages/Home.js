import image1 from "../assets/image1.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero">
      {/* LEFT : TEXT */}
      <div className="hero-text">
        <h1>
          I’m <span>Sripadam Prasannakumar</span>
          <br />
          <strong>Python Full Stack Web Developer</strong>
        </h1>

        <p className="hero-desc">
          Passionate and detail-oriented Full Stack Developer eager to build
          scalable and user-centric web applications. Skilled in Python, Django,
          and modern frontend technologies including HTML, CSS, JavaScript, and
          React.
        </p>

        <div className="hero-actions">
          {/* CONTACT */}
          <Link to="/contact" className="btn primary">
            Contact Me
          </Link>

          {/* RESUME – VIEW ONLY */}
          <a
            href={`${process.env.PUBLIC_URL}/sripadam-prasannakumar-python-developer-resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn outline"
          >
            My Resume
          </a>
        </div>
      </div>

      {/* RIGHT : IMAGE */}
      <div className="hero-img">
        <div className="profile-ring">
          <div className="profile-ring-inner">
            <img src={image1} alt="Prasannakumar profile" />
          </div>
        </div>
      </div>
    </section>
  );
}
