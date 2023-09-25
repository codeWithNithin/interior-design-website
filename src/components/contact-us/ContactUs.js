import './contact-us.css';

function ContactUs() {
  return (
    <div className="contact-us-container">
      <div className="contact-text">
        <h1 className="clr-white clr-white"> Wanna join the interno? </h1>
        <p className="small-paragraph m-t-10 clr-white">
          It is a long established fact will be distracted.
        </p>
        <button className="btn-default clr-white bg-brown margin-15-auto">
          Contact With Us
          <img
            src="/black-arrow.svg"
            alt="right-arrow"
            className="right-arrow"
          />
        </button>
      </div>
    </div>
  );
}

export default ContactUs;
