import Header from '../components/Header/Header';
import Footer from '../components/footer/Footer';
import HeroBanner from '../components/hero-banner/HeroBanner';
import './about-us.css';
function About() {
  return (
    <div>
      <Header />
      <HeroBanner
        imgPath="/about-us.png"
        title="About Us"
        subTitle="Home / About Us"
      />

      <div className="quotes-section">
        <div className="l-shape">
          <img src="/l-pattern.png" alt="" />
        </div>
        <div className="content">
          <div className="display-01 text-align-center">"</div>
          <p className="quote-content">
            I like an interior that defies labeling. I don't <br /> really want
            someone to walk into a room and <br /> know that I did it
          </p>
          <div className="quote-author">-BUNNY WILLIAMS</div>
        </div>
        <div className="j-shape">
          <img src="/j-pattern.png" alt="" />
        </div>
      </div>

      <div className="what-we-do-section">
        <div className="content">
          <h1> What We Do </h1>
          <p className="small-paragraph m-t-20">
            It is a long established fact that a reader will be <br />{' '}
            distracted by the of readable content of a page <br /> when lookings
            at its layouts the points of using <br /> that it has a more-or-less
            normal.
          </p>

          <button className="btn-default m-t-30">
            Our Concept
            <img src="/Vector.svg" alt="right-arrow" className="right-arrow" />
          </button>
        </div>
        <div className="img">
          <img src="/what-we-do.jpg" alt="" />
        </div>
      </div>

      <div className="the-end-result-section">
        <div className="img">
          <img src="/end-result.jpg" alt="" />
        </div>
        <div className="content">
          <h1> The End Result </h1>
          <p className="small-paragraph m-t-20">
            It is a long established fact that a reader will be <br />
            distracted by the of readable content of a page <br /> when lookings
            at its layouts the points of using <br /> that it has a more-or-less
            normal.
          </p>

          <button className="btn-default m-t-30">
            Our Portfolio
            <img src="/Vector.svg" alt="right-arrow" className="right-arrow" />
          </button>
        </div>
      </div>

      <div className="about-us">
        <h1 className="text-align-center">
          What the People Thinks <br /> About Us
        </h1>
        <div className="emp-card-container">
          <div className="emp-card">
            <div className="front">
              <img src="/levi.jpg" alt="" className="emp-img" />
            </div>
            {/* <div className="back">
              <h3> Nattasha Julie </h3>
              <p className="small-paragraph">Design, Australia</p>
              <div className="social-links m-t-20">
                <img src="/facebook.png" alt="" />
                <img src="/twitter.png" alt="" />
                <img src="/linkedin.png" alt="" />
              </div>
            </div> */}
          </div>
          <div className="emp-card">
            <div className="front">
              <img src="/juliee.jpg" alt="" className="emp-img" />
            </div>
            <div className="back"></div>
          </div>
          <div className="emp-card">
            <div className="front">
              <img src="/smith.png" alt="" className="emp-img" />
            </div>
            <div className="back"></div>
          </div>
          <div className="emp-card">
            <div className="front">
              <img src="/queen.jpg" alt="" className="emp-img" />
            </div>
            <div className="back"></div>
          </div>
        </div>
      </div>

      <div className="form-section">
        <h1>
          Creative project? Let's have <br /> a productive talk.
        </h1>

        <div className="margin-0-auto p-t-30 entire-form">
          <form>
            <div className="form-flex">
              <div className="field">
                <p> Name </p>
                <input type="text" placeholder="" />
              </div>
              <div className="field">
                <p> Email </p>
                <input type="text" />
              </div>
            </div>
            <div className="m-t-30">
              <div className="">
                <textarea type="text" placeholder="Hello Iam Intrested in.." />
              </div>
            </div>
          </form>
        </div>

        <button className="btn-default margin-0-auto m-t-30">
          Send Now
          <img src="/Vector.svg" alt="right-arrow" className="right-arrow" />
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default About;
