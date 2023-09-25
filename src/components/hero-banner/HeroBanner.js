import './hero-banner.css';

function HeroBanner(props) {
  return (
    <div className="hero-banner">
      <img src={props.imgPath} alt="main banner" />
      <div className="white-box">
        <h1 className="text-align-center"> {props.title} </h1>
        <p className="large-paragraph text-align-center">{props.subTitle}</p>
      </div>
    </div>
  );
}

export default HeroBanner;
