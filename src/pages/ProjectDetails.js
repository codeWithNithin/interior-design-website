import Header from '../components/Header/Header';
import Footer from '../components/footer/Footer';
import HeroBanner from '../components/hero-banner/HeroBanner';
import './project-details.css';

function ProjectDetails() {
  return (
    <div className="project-detail">
      <Header />
      <HeroBanner imgPath="/project-details.jpg" title="" subtitle="" />

      <div className="main-content-sec">
        <div className="project-detail">
          <div className="box-container">
            <div className="flex-box">
              <h4> Client </h4>
              <p className="small-paragraph"> Your client name </p>
            </div>
            <div className="flex-box">
              <h4> Category </h4>
              <p className="small-paragraph"> Interiors </p>
            </div>
            <div className="flex-box">
              <h4> Tags </h4>
              <p className="small-paragraph"> interior, Home </p>
            </div>
            <div className="flex-box">
              <h4> Date </h4>
              <p className="small-paragraph"> Date 23,02, 2022 </p>
            </div>
            <div className="flex-box">
              <h4> Link </h4>
              <p className="small-paragraph"> Link example.com </p>
            </div>
          </div>
        </div>
        <div className="content">
          <h1> Minimal Look Bedrooms </h1>
          <p className="small-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem{' '}
            <br />
            vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa,
            vbel <br /> maximus purus posuere in. Dojrices gravida dignissim.
            Praesent at <br /> nibh in mi fringilla mattis. Phasellus ut dolor
            odio. Aenean in the <br /> ipsum vel lectus bibendum commodo.
          </p>
          <p className="small-paragraph m-t-30">
            In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet
            tellus <br /> lectus. Vivamus ipsum nunc, mattis quis nibh id,
            pellentesque arcu. <br /> Donec a pellentesque Cras erat enim,
            gravida non ante vitae,elequis <br /> convallis elit, in viverra
            felis. Donec ultrices tellus vitae iaculisvd <br /> porta. Proin
            tincidunt ligula id purus porttitor.
          </p>
        </div>
      </div>

      <div className="project-detail-img">
        <img src="/project-detail.png" alt="" className="project-img" />
        <div className="zoom-icon">
          <img src="/zoom-icon.svg" className="zoom-icon" alt="" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProjectDetails;
