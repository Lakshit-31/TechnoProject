import React from "react";
import "./Services.css";
const Servcies = () => {
  return (
    <section className="services-section">
      <div className="page-container">
        <div className="services-container">
          <h5 className="services-text">WHAT I DO</h5>
          <h2 className="services-heading">Services</h2>

          <div className="services-card">
            <div className="services-card-first">
              <h3>UI/UX Design</h3>
              <p>
                From wireframes to polished Figma prototypes. Intuitive,
                visually compelling interfaces that convert visitors into users
                and put usability first.
              </p>
            </div>

            <div className="services-card-second">
              <h3>Frontend Dev</h3>
              <p>
                Production-grade code with Tailwind CSS and Alpine.js.
                Pixel-perfect, fully responsive, SEO-friendly and blazing fast —
                no bloat, no heavy frameworks.
              </p>
            </div>
            <div className="services-card-third">
              <h3>Landing Pages</h3>
              <p>
                High-converting pages for SaaS, apps and personal brands.
                Designed to communicate value instantly and drive action from
                the first scroll.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Servcies;
