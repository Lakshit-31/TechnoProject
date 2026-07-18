import React from "react";
import { Link } from "react-router-dom";
import bg_image1 from "../assets/bg_image1.jpg";
function Signup() {
  return (
    <div className="signup-page">
      <div className="container">
        <div className="img">
          <img src={bg_image1} alt="" />
        </div>

        <div className="content">
          <h1>Create an account</h1>

          <p>
            Already have an account?
            <Link to={"/login"}>Log in</Link>
          </p>

          <div className="name">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Enter your password" />

          <div className="terms">
            <input type="checkbox" />I agree to the
            <a href="#"> Terms & Conditions</a>
          </div>

          <button className="create-acc">Create account</button>

          <div className="link">
            <button>Google</button>
            <button>Apple</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
