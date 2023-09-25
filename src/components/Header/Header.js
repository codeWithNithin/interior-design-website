import './header.css';

function Header() {
  return (
    <header className="main-header">
      <div className="logo">
        <div>
          <img src="/logo.svg" alt="iterno logo" />
        </div>
        <div className="logo-name">Interno</div>
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <a href="#"> Home </a>
          </li>
          <li>
            <a href="#"> Pages </a>
          </li>
          <li>
            <a href="#"> Services </a>
          </li>
          <li>
            <a href="#"> Project </a>
          </li>
          <li>
            <a href="#"> Blog </a>
          </li>
          <li>
            <a href="#"> Contact </a>
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
