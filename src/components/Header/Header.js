import './header.css';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  function handleClick(event) {
    navigate('/');
  }

  return (
    <header className="main-header">
      <div className="logo" onClick={handleClick}>
        <div>
          <img src="/logo.svg" alt="iterno logo" />
        </div>
        <div className="logo-name">Interno</div>
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/pages"> Pages </Link>
          </li>
          <li>
            <Link to="/services"> Services </Link>
          </li>
          <li>
            <Link to="/project"> Project </Link>
          </li>
          <li>
            <Link to="/blog"> Blog </Link>
          </li>
          <li>
            <Link to="/contact"> Contact </Link>
          </li>
          <li>
            <img src="/Search.svg" alt="Search icon" className="search-icon" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
