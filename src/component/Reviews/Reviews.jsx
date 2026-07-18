import React from "react";
import "./Reviews.css";
import image1 from "../../assets/person1.jpg";
import image2 from "../../assets/person2.jpg";
import image3 from "../../assets/person3.jpg";
const Reviews = () => {
  return (
    <section className="reviews-section">
      <div className="page-container">
        <div className="reviews-container">
          <p className="reviews-para">SOCIAL PROOF</p>
          <h2>What clients say</h2>
          <div className="reviews-card">
            <div className="reviews-first">
              <p className="reviews-first-content">
                "Eliott delivered our redesign in record time and the quality
                blew us away. Our conversion rate jumped 28% in the first month.
                Absolutely recommend."
              </p>
              <div className="reviews-name">
                <img src={image1} alt="" />
                <p>Sarah Muller</p>
                <p className="reviews-second-content">CPO,Novu</p>
              </div>
            </div>

            <div className="reviews-second">
              <p className="reviews-second-content">
                "Working with Eliott is a dream. He asks the right questions,
                moves fast, and the final result always exceeds what we
                imagined. Our best hire of 2024."
              </p>
              <div className="reviews-name">
                <img src={image2} alt="" />
                <p className="reviews-second-name">Thomas Renault</p>
                <p className="reviews-second-content">Founder,Finlo</p>
              </div>
            </div>

            <div className="reviews-third">
              <p className="reviews-third-content">
                "We had a tight deadline and a vague brief. Eliott turned both
                into a polished site in under two weeks. Clean code, zero
                hand-holding needed."
              </p>
              <div className="reviews-name">
                <img src={image3} alt="" />
                <p>Camille Durfresne</p>
                <p className="reviews-third-content">Creative Director, Orea</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
