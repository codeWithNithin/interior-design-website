import './footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="logo-container">
        <div className="logo">
          <div>
            <img src="/logo.svg" alt="iterno logo" />
          </div>
          <div className="logo-name">Interno</div>
        </div>
        <p className="medium-paragraph m-t-20">
          It is a long established fact that a reader <br /> will be distracted
          lookings.
        </p>
      </div>
      <div className="pages">
        <h4> Pages </h4>
        <ul className="nav-links">
          <li>
            <a href="#">About Us </a>
          </li>
          <li>
            <a href="#"> Our Projects </a>
          </li>
          <li>
            <a href="#"> Our Team </a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#"> Services </a>
          </li>
        </ul>
      </div>
      <div className="services">
        <h4> Services </h4>
        <ul className="nav-links">
          <li>
            <a href="#"> Kitchen </a>
          </li>
          <li>
            <a href="#"> Living Area </a>
          </li>
          <li>
            <a href="#"> Bathroom </a>
          </li>
          <li>
            <a href="#"> Dining Hall </a>
          </li>
          <li>
            <a href="#"> Bedroom </a>
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
  );
}

export default Footer;
