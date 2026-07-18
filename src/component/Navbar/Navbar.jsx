import "./Navbar.css";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <p>
              eli<span className="navbar-text">ott</span>
            </p>
          </div>
          <ul className="navbar-menu">
            <li className="navbar-items">
              <Link to="content" smooth={true} duration={100}>
                Home
              </Link>
            </li>
            <li className="navbar-items">
              <Link to="services" smooth={true} duration={100}>
                Services
              </Link>
            </li>

            <li className="navbar-items">
              <Link to="reviews" smooth={true} duration={100}>
                Reviews
              </Link>
            </li>
            <li className="navbar-items">
              <Link to="about" smooth={true} duration={100}>
                About
              </Link>
            </li>

            <li className="navbar-items">
              <Link to="contact" smooth={true} duration={100}>
                Contact
              </Link>
            </li>
          </ul>
          <button className="navbar-btn">Hire me!!</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
