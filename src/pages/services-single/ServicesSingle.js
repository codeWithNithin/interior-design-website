import Header from '../../components/Header/Header';
import ClientBrand from '../../components/client-brands/ClientBrand';
import Footer from '../../components/footer/Footer';
import HeroBanner from '../../components/hero-banner/HeroBanner';
import InternoStats from '../../components/interno-stats/InternoStats';

import './services-single.css';

function ServicesSingle() {
  return (
    <div>
      <Header />
      <HeroBanner
        imgPath="/services-single.jpg"
        title="Service Single"
        subTitle="Home / Services Single"
      />

      <div className="living-services">
        <div className="title">
          <h1 className="text-align-left">
            We set the trends of <br /> modern living <br /> Services.
          </h1>
        </div>
        <div className="content">
          <p className="large-paragraph clr-brown">
            It is a long established fact that a reader will be distracted{' '}
            <br /> by the of readable content of a page
          </p>

          <p className="medium-paragraph m-t-20">
            when lookings at its layouts the points spriof using that it has a
            more <br /> less normal.A wonderful serenity has taken pgossession
            of my entire <br /> soul, like thesce sweet morndsings of sphring
            which I enjoy with my <br /> forwhole heart. I am alone, and feel
            the charm of excgistence in this <br /> spot, which was created for
            the bliss of souls like mine.
          </p>

          <p className="medium-paragraph m-t-20">
            when lookings at its layouts the points spriof using that it has a
            more <br /> less normal.A wonderful serenity has taken pgossession
            of my entire <br /> soul, like thesce sweet morndsings of sphring
            which I enjoy with my <br /> forwhole heart. I am alone, and feel
            the charm of excgistence in this <br /> spot, which was created for
            the bliss of souls like mine.
          </p>
        </div>
      </div>

      <ClientBrand />

      <div className="service-video">
        <img src="services-video.jpg" alt="" className="video-img" />
        <div className="play-btn">
          <img src="/play-btn.svg" alt="" width="132" height="132" />
        </div>
      </div>

      <div className="two-lists-container">
        <div className="left">
          <h1> Use of Interior </h1>
          <div className="interior-list">
            <p className="large-paragraph">
              <span className="clr-brown font-size-20">1</span>
              We provide high quality design services.
            </p>
            <p className="large-paragraph">
              <span className="clr-brown font-size-20">2</span>
              Project on time and Latest Design.
            </p>
            <p className="large-paragraph">
              <span className="clr-brown font-size-20">3</span>
              Scientific Skills For getting a better result.
            </p>
            <p className="large-paragraph">
              <span className="clr-brown font-size-20">4</span> Renovations
              Benefit of Service
            </p>
            <p className="large-paragraph">
              <span className="clr-brown font-size-20">5</span>
              We are confident about our projects.
            </p>
          </div>
        </div>
        <div className="right">
          <h1> Make An Art </h1>
          <div className="interior-list">
            <p className="large-paragraph">
              <span className="clr-brown font-size-20">1</span>
              We provide high quality design services.
            </p>
            <p className="large-paragraph">
              <span className="clr-brown font-size-20">2</span>
              Project on time and Latest Design.
            </p>
            <p className="large-paragraph">
              <span className="clr-brown font-size-20">3</span>
              Scientific Skills For getting a better result.
            </p>
            <p className="large-paragraph">
              <span className="clr-brown font-size-20">4</span> Renovations
              Benefit of Service
            </p>
            <p className="large-paragraph">
              <span className="clr-brown font-size-20">5</span>
              We are confident about our projects.
            </p>
          </div>
        </div>
      </div>

      <div className="portfolio-container">
        <div className="image">
          <img src="/portfolio-img.jpg" alt="" />
        </div>
        <div className="port-content">
          <h1> We love design.That's how we got here. </h1>
          <p className="small-paragraph m-t-10">
            It is a long established fact that a reader will be distracted by
            the of readable content .
          </p>
          <button className="btn-default m-t-20">
            Our Portfolio
            <img src="/Vector.svg" alt="right-arrow" className="right-arrow" />
          </button>
        </div>
      </div>

      <InternoStats />
      <Footer />
    </div>
  );
}

export default ServicesSingle;
