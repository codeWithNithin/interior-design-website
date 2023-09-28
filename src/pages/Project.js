import Header from '../components/Header/Header';
import Footer from '../components/footer/Footer';
import HeroBanner from '../components/hero-banner/HeroBanner';
import './project.css';
import ProjectCard from '../components/project-card/ProjectCard';

const leftSideList = [
  {
    title: 'Minimal Bedroom',
    subTitle: 'Decor / Artchitecture',
    imgPath: '/pro-1.png',
    cssClass: 'size-pro1',
  },
  {
    title: 'Classic Minimal Bedroom',
    subTitle: 'Decor / Artchitecture',
    imgPath: '/pro-2.png',
    cssClass: 'size-pro1',
  },
  {
    title: 'Minimal Bedroom table',
    subTitle: 'Decor / Artchitecture',
    imgPath: '/pro-3.png',
    cssClass: 'size-pro1',
  },
  {
    title: 'Modern Medroom',
    subTitle: 'Decor / Artchitecture',
    imgPath: '/pro-4.png',
    cssClass: 'size-pro1',
  },
];

const rightSideList = [
  {
    title: 'Minimal Bedroom',
    subTitle: 'Decor / Artchitecture',
    imgPath: '/pro-5.png',
    cssClass: 'size-pro1',
  },
  {
    title: 'Modern Bedroom',
    subTitle: 'Decor / Artchitecture',
    imgPath: '/pro-6.png',
    cssClass: 'size-pro1',
  },
  {
    title: 'System Table',
    subTitle: 'Decor / Artchitecture',
    imgPath: '/pro-7.png',
    cssClass: 'size-pro1',
  },
  {
    title: 'Modern Bedroom',
    subTitle: 'Decor / Artchitecture',
    imgPath: '/pro-8.png',
    cssClass: 'size-pro1',
  },
];

function Project() {
  return (
    <div>
      <Header />
      <HeroBanner
        imgPath="/our-project.jpg"
        title="Our Project"
        subTitle="Home / Project"
      />

      <div className="tab-list">
        <div className="tab">Bathroom</div>
        <div className="tab active">Bed Room</div>
        <div className="tab">kitchen</div>
        <div className="tab">Living Area</div>
      </div>

      <div className="project-list m-t-20">
        <div className="left">
          {leftSideList.map((project) => (
            <ProjectCard projectObj={project} />
          ))}
        </div>
        <div className="right">
          {rightSideList.map((project) => (
            <ProjectCard projectObj={project} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Project;
