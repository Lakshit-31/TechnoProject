import React from "react";
import image from "../../assets/image2.jpg";
import "./Content.css";
const Content = () => {
  return (
    <section className="content-section">
      <div className="page-container">
        <div className="content-container">
          <div className="content-left">
            <h4 className="content-text">AVAILABLE FOR WORK</h4>
            <h1>
              Hi, I'm <span>Lakshit</span>
            </h1>
            <p>
              Freelance UI/UX Designer & Frontend Developer. I design and build
              digital products that people love to use — fast, clean, and
              accessible.
            </p>
            <div className="btn-content">
              <button className="first">View my work</button>
              <button className="second">Get in touch</button>
            </div>
          </div>

          <div className="content-right">
            <img src={image} alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
