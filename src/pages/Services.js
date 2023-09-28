import Header from '../components/Header/Header';
import ContactUs from '../components/contact-us/ContactUs';
import Footer from '../components/footer/Footer';
import Process from '../components/working-process/Process';
import HeroBanner from '../components/hero-banner/HeroBanner';
import './services.css';
function Services() {
  return (
    <div>
      <Header />
      <HeroBanner
        imgPath="/services.jpg"
        title="Services"
        subTitle="Home / Services"
      />
      <Process fromHomePage="false" />
      <div className="how-we-wrk">
        <div className="work-main">
          <h1> How We Work </h1>
          <p className="medium-paragraph">
            It is a long established fact will be distracted.Lorem Ipsum is
            simply dummy text of <br /> the printing and typesetting industry.
          </p>
        </div>
        <div className="main-flex-section">
          <div className="display-flex">
            <div className="display-img">
              <img src="/concept1-img.jpg" alt="" className="one-img" />
            </div>
            <div className="display-content">
              <div className="one-flex">
                <div className="icon">
                  <img src="/concept-1-icon.svg" alt="" width="86" />
                </div>
                <div className="num"> 01 </div>
              </div>
              <div className="one-content">
                <h2> Concept & Details </h2>
                <p className="medium-paragraph">
                  It is a long established fact will be distracted. <br /> Lorem
                  Ipsum is simply dummy from text of the <br /> and typesetting
                  indufstry.
                </p>
              </div>
            </div>
          </div>

          <div className="display-flex m-t-70">
            <div className="display-content">
              <div className="one-flex">
                <div className="icon">
                  <img src="/concept-2-icon.svg" alt="" width="86" />
                </div>
                <div className="num"> 02 </div>
              </div>
              <div className="one-content">
                <h2> Idea for Work </h2>
                <p className="medium-paragraph">
                  It is a long established fact will be distracted. <br /> Lorem
                  Ipsum is simply dummy from text of the <br /> and typesetting
                  indufstry.
                </p>
              </div>
            </div>
            <div className="display-img">
              <img src="/concept-2-img.jpg" alt="" className="one-img" />
            </div>
          </div>

          <div className="display-flex m-t-70">
            <div className="display-img">
              <img src="/concept-3-img.jpg" alt="" className="one-img" />
            </div>
            <div className="display-content">
              <div className="one-flex">
                <div className="icon">
                  <img src="/concept-3-icon.svg" alt="" width="86" />
                </div>
                <div className="num"> 03 </div>
              </div>
              <div className="one-content">
                <h2> Design </h2>
                <p className="medium-paragraph">
                  It is a long established fact will be distracted. <br /> Lorem
                  Ipsum is simply dummy from text of the <br /> and typesetting
                  indufstry.
                </p>
              </div>
            </div>
          </div>

          <div className="display-flex m-t-70">
            <div className="display-content">
              <div className="one-flex">
                <div className="icon">
                  <img src="/concept-4-icon.svg" alt="" width="86" />
                </div>
                <div className="num"> 04 </div>
              </div>
              <div className="one-content">
                <h2> Perfection </h2>
                <p className="medium-paragraph">
                  It is a long established fact will be distracted. <br /> Lorem
                  Ipsum is simply dummy from text of the <br /> and typesetting
                  indufstry.
                </p>
              </div>
            </div>
            <div className="display-img">
              <img src="/concept-4-img.jpg" alt="" className="one-img" />
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Services;
