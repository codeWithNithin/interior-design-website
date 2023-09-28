import Header from '../components/Header/Header';
import Footer from '../components/footer/Footer';
import HeroBanner from '../components/hero-banner/HeroBanner';
import './contact.css';

function Contact() {
  return (
    <div>
      <Header />
      <HeroBanner
        imgPath="/contact-us.jpg"
        title="Contact Us"
        subTitle="Home / Contact Us"
      />

      <div className="main-section">
        <h1 className="main-title">
          We love meeting new people <br /> and helping them.
        </h1>
        <div className="flex-container">
          <div className="contact-details">
            <div className="contact-container">
              <div className="email-section">
                <img src="/brown-email.svg" alt="" />
                <p className="small-paragraph">info@yourdomain.com</p>
              </div>
              <div className="mob-section m-t-20">
                <img src="/brown-mob.svg" alt="" />
                <p className="small-paragraph">+1 (378) 400-1234</p>
              </div>
              <div className="globe-section m-t-20">
                <img src="/brown-globe.svg" alt="" />
                <p className="small-paragraph">www.yourdomain.com</p>
              </div>
            </div>
          </div>
          <div className="form-container">
            <div className="margin-0-auto p-t-30 entire-form">
              <form>
                <div className="form-row">
                  <div className="field">
                    <p> Name </p>
                    <input type="text" placeholder="" />
                  </div>
                  <div className="field">
                    <p> Email </p>
                    <input type="text" />
                  </div>
                </div>
                <div className="form-row m-t-20">
                  <div className="field">
                    <p> Subject </p>
                    <input type="text" placeholder="" />
                  </div>
                  <div className="field">
                    <p> Phone </p>
                    <input type="text" />
                  </div>
                </div>
                <div className=" m-t-30">
                  <div>
                    <textarea
                      type="text"
                      placeholder="Hello Iam Intrested in.."
                    />
                  </div>
                </div>
              </form>

              <button className="btn-default margin-left-auto m-t-30">
                Send Now
                <img
                  src="/Vector.svg"
                  alt="right-arrow"
                  className="right-arrow"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="navigation">
        <img src="/navigation.png" className="navigation-img" alt="" />
        <div className="tracker">
          <img src="/tracker.svg" alt="" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
