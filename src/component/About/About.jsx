import React from "react";
import image from "../../assets/image2.jpg";
import "./About.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section className="about-section">
      <div className="page-container">
        <div className="about-container">
          <div className="about-left">
            <img src={image} alt="" />
          </div>
          <div className="about-right">
            <p className="about-head">ABOUT ME</p>
            <h2 className="about-title">
              A bit about
              <br />
              who i am
            </h2>
            <p className="about-content">
              I'm Lakshit, a freelance designer and frontend developer based in
              Paris with 5 years of experience shipping digital products for
              startups, agencies, and scale-ups across Europe. I thrive at the
              intersection of great design and clean code.
            </p>
            <br />
            <p className="about-content">
              I believe great interfaces are invisible — they get out of the
              user's way. My work is fast, accessible and built to last. When
              I'm not coding, you'll find me hiking or hunting for a good
              espresso.
            </p>
            <br />
            <p className="about-stack">Stack & Tools</p>

            <div className="about-btn">
              <button>Tailwind CSS</button>
              <button>Alphine.js</button>
              <button>Figma</button>
              <button>HTML/CSS</button>
              <button>Webflow</button>
              <button>Symfony</button>
              <button>Framer</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
