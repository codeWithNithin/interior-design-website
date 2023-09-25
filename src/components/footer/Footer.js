import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="logo-container">
          <div className="logo">
            <div>
              <img src="/logo.svg" alt="iterno logo" />
            </div>
            <div className="logo-name">Interno</div>
          </div>
          <p className="medium-paragraph m-t-20">
            It is a long established fact that a reader <br /> will be
            distracted lookings.
          </p>
        </div>
        <div className="pages">
          <h4> Pages </h4>
          <ul className="nav-links">
            <li>
              <Link to="/about">About Us </Link>
            </li>
            <li>
              <Link to="/"> Our Projects </Link>
            </li>
            <li>
              <Link to="/"> Our Team </Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/services"> Services </Link>
            </li>
          </ul>
        </div>
        <div className="services">
          <h4> Services </h4>
          <ul className="nav-links">
            <li>
              <Link to="/services"> Kitchen </Link>
            </li>
            <li>
              <Link to="/services"> Living Area </Link>
            </li>
            <li>
              <Link to="/services"> Bathroom </Link>
            </li>
            <li>
              <Link to="/services"> Dining Hall </Link>
            </li>
            <li>
              <Link to="/services"> Bedroom </Link>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h4> Contact </h4>
          <div className="address small-paragraph">
            55 East Birchwood Ave. <br /> Brooklyn, New York 11201
          </div>
          <div className="email small-paragraph">contact@interno.com</div>
          <div className="tel-no small-paragraph">(123) 456 - 7890</div>
        </div>
      </footer>

      <div className="border-b"></div>

      <p className="small-paragraph width-1200 text-align-center">
        Copyright © Interno | Designed by Victorflow Templates - Powered by
        Webflow
      </p>
    </>
  );
}

export default Footer;
