import Header from '../components/Header/Header';
import ContactUs from '../components/contact-us/ContactUs';
import Footer from '../components/footer/Footer';
import Process from '../components/working-process/Process';
function Services() {
  return (
    <div>
      <Header />
      <Process fromHomePage="false" />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Services;
