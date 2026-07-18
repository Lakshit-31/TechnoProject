import React from "react";
import "./Thoughts.css";
import image1 from "../../assets/card_image1.jpg";
import image2 from "../../assets/card_image2.jpg";
import image3 from "../../assets/card_image3.jpg";
const Thoughts = () => {
  return (
    <section className="thoughts-section">
      <div className="page-container">
        <div className="thoughts-container">
          <h5 className="thoughts-text">THOUGHTS</h5>
          <h2 className="thoughts-heading">From the blog</h2>

          <div className="thoughts-card">
            <div className="thoughts-card-first">
              <div className="thoughts-image">
                <img src={image1} alt="" />
              </div>
              <div className="thoughts-content">
                <h3>Why i ditched heavy CSS frameworks for TailWind</h3>
                <p>
                  After years of fighting specificity wars, here's what finally
                  convinced me to make the switch.
                </p>
              </div>
            </div>

            <div className="thoughts-card-second">
              <div className="thoughts-image">
                <img src={image2} alt="" />
              </div>
              <div className="thoughts-content">
                <h3>Building a design system from scratch in a weekend</h3>
                <p>
                  Tokens, components, docs — the process I follow to spin up a
                  coherent system in 48 hours.
                </p>
              </div>
            </div>

            <div className="thoughts-card-third">
              <div className="thoughts-image">
                <img src={image3} alt="" />
              </div>
              <div className="thoughts-content">
                <h3>5 lessons from my first year of full-time freelancing</h3>
                <p>
                  Contracts, pricing, scope creep — the things nobody tells you
                  before you go solo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Thoughts;
