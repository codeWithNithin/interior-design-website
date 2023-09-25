import Header from '../../components/Header/Header';
import Footer from '../../components/footer/Footer';
import HeroBanner from '../../components/hero-banner/HeroBanner';
import './page.css';

function Page() {
  return (
    <div>
      <Header />
      <HeroBanner
        imgPath="/restricted-page.jpg"
        title="Restricted Page"
        subTitle="Home / Restricted Page"
      />

      <div className="password-section">
        <div className="password-field text-align-center">
          <h1> Password Protected </h1>
          <p className="large-paragraph text-align-center m-t-20">
            This page is password protected. If you are the website admin, or
            have <br /> access to this page, please type your password below.
          </p>

          <button className="btn-default m-t-60 margin-0-auto">
            Submit Now
            <img src="/Vector.svg" alt="right-arrow" className="right-arrow" />
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Page;
