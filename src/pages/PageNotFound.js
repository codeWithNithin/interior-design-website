import Header from '../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import './page-not-found.css';

function PageNotFound() {
  const navigate = useNavigate();

  function handleClick(event) {
    navigate('/');
  }

  return (
    <div className="main-container">
      <Header />

      <div className="page-container">
        <div className="content">
          <div className="status-code">404</div>
          <p className="not-found-content">
            We are sorry, but the page you <br /> requested was not found
          </p>
          <button className="btn-default m-t-30" onClick={handleClick}>
            Back To Home
            <img src="/Vector.svg" alt="right-arrow" className="right-arrow" />
          </button>
        </div>
        <div className="img">
          <img src="/404-not-found.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
