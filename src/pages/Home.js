import './home.css';
import Header from '../components/Header/Header';
import ClientBrand from '../components/client-brands/ClientBrand';
import Process from '../components/working-process/Process';
import ProjectCard from '../components/project-card/ProjectCard';
import InternoStats from '../components/interno-stats/InternoStats';
import ArticleNews from '../components/article-news/ArticleNews';
import ContactUs from '../components/contact-us/ContactUs';
import Footer from '../components/footer/Footer';

const peopleList = [
  {
    name: 'Nattasha Mith',
    imgPath: '/nathasha.png',
    address: 'Sydney, USA',
  },
  {
    name: 'Raymond Galario',
    imgPath: '/raymond.jpg',
    address: 'Sydney, Australia',
  },
  {
    name: 'Benny Roll',
    imgPath: '/benny.jpg',
    address: 'Sydney, New York',
  },
];

const projectList = [
  {
    title: 'Modern Kitchen',
    subTitle: 'Decor / Artchitecture',
    cssClass: 'top-right-border-radius',
    imgPath: '/project-1.png',
  },
  {
    title: 'Modern Kitchen',
    subTitle: 'Decor / Artchitecture',
    cssClass: 'top-left-border-radius',
    imgPath: '/project-2.png',
  },
  {
    title: 'Modern Kitchen',
    subTitle: 'Decor / Artchitecture',
    cssClass: 'bottom-right-border-radius',
    imgPath: '/project-3.png',
  },
  {
    title: 'Modern Kitchen',
    subTitle: 'Decor / Artchitecture',
    cssClass: 'bottom-left-border-radius',
    imgPath: '/project-4.png',
  },
];

function Home() {
  return (
    <div>
      <Header />
      <div className="hero-img">
        <img src="/hero-img.png" alt="" />
        <div className="hero-text-container">
          <div className="display-01">
            Let Your Home <br /> Be Unique
          </div>
          <p className="large-paragraph m-t-20">
            There are many variations of the passages of <br />
            lorem Ipsum fromavailable, majority.
          </p>
          <div className="">
            <button className="btn-default m-t-20">
              Get Started
              <img
                src="/Vector.svg"
                alt="right-arrow"
                className="right-arrow"
              />
            </button>
          </div>
        </div>
      </div>
      <Process fromHomePage="true" />
      <div className="stylish-section">
        <div className="text-content">
          <h1>
            We Create The Art <br /> Of Stylish Living <br /> Stylishly
          </h1>
          <p className="large-paragraph m-t-10">
            It is a long established fact that a reader will be <br />{' '}
            distracted by the of readable content of a page <br /> when lookings
            at its layouts the points of using <br /> that it has a more-or-less
            normal.
          </p>

          <div className="call-container m-t-15">
            <div className="call-img">
              <img src="/call-icon.svg" alt="call icon" />
            </div>
            <div className="call-text">
              <div className="phone-no">012345678</div>
              <div>
                <p className="large-paragraph font-size-17">Call Us Anytime</p>
              </div>
            </div>
          </div>

          <button className="btn-default m-t-15">
            Get Free Estimate
            <img src="/Vector.svg" alt="right-arrow" className="right-arrow" />
          </button>
        </div>
        <div className="img-content">
          <img src="/art-of-living.jpg" alt="stylish img" />
        </div>
      </div>
      <div className="people-think-about-us">
        <h1 className="testimonial-title">
          What the People Thinks <br /> About Us
        </h1>

        <div className="testimony-list">
          {peopleList.map((people) => (
            <PeopleCard peopleObj={people} />
          ))}
        </div>
      </div>
      <ClientBrand />
      <div className="our-projects">
        <h1 className="project-title"> Follow Our Projects </h1>
        <p className="small-paragraph project-content">
          It is a long established fact that a reader will be distracted by the
          of readable <br /> content of page lookings at its layouts points.
        </p>
        <div className="project-list">
          {projectList.map((project) => (
            <ProjectCard projectObj={project} />
          ))}
        </div>
      </div>
      <InternoStats />
      <ArticleNews titleAlignment="center" showContent="true" />
      <ContactUs />
      <Footer />
    </div>
  );
}

function PeopleCard({ peopleObj }) {
  return (
    <div className="card">
      <div className="card-title">
        <div className="avatar">
          <img src={peopleObj.imgPath} alt="" />
        </div>
        <div className="title">
          <h3> {peopleObj.name} </h3>
          <p className="small-paragraph"> {peopleObj.address} </p>
        </div>
      </div>
      <div className="card-content m-t-20">
        <p className="medium-paragraph">
          Lorem Ipsum is simply dummy <br /> text of the typesetting industry.{' '}
          <br />
          Ipsum has been.
        </p>
      </div>
    </div>
  );
}

export default Home;
