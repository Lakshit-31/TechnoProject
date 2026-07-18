import React from "react";
import bg_image1 from "../../assets/bg_image1.jpg";
import "./Contact.css";
const Signup = () => {
  return (
    <section class="contact-section">
      <div className="page-container">
        <div class="contact-card">
          <div class="left">
            <span class="tag">GET IN TOUCH</span>

            <h1>
              Let's work
              <br />
              together
            </h1>

            <p>
              I'm open to UI/UX and frontend missions, short or long-term.
              Landing page, full product redesign, or just a second pair of eyes
              — let's talk.
            </p>

            <div class="info">
              <div class="item">
                <i class="fa-regular fa-envelope"></i>
                <span>hello@eliott.dev</span>
              </div>

              <div class="item">
                <i class="fa-brands fa-linkedin-in"></i>
                <span>linkedin.com/in/eliott-dev</span>
              </div>

              <div class="item">
                <i class="fa-brands fa-github"></i>
                <span>github.com/eliott-dev</span>
              </div>
            </div>
          </div>

          <div class="right">
            <div class="row">
              <div class="input-box">
                <label>Name *</label>
                <input type="text" placeholder="Jane Smith" />
              </div>

              <div class="input-box">
                <label>Email *</label>
                <input type="email" placeholder="jane@company.com" />
              </div>
            </div>

            <div class="input-box">
              <label>Subject</label>
              <input type="text" placeholder="Project inquiry" />
            </div>

            <div class="input-box">
              <label>Message *</label>
              <textarea placeholder="Tell me about your project..."></textarea>
            </div>

            <button>Send message →</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
