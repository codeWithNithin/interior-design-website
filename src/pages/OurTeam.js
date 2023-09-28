import Header from '../components/Header/Header';
import Footer from '../components/footer/Footer';
import EmployeeList from '../components/employees-list/EmployeeList';
import HeroBanner from '../components/hero-banner/HeroBanner';

import './our-team.css';

function OurTeam() {
  return (
    <div className="our-team">
      <Header />
      <HeroBanner
        imgPath="/our-professional.jpg"
        title="Our Professional"
        subTitle="Home / Team"
      />
      <div className="employees">
        <EmployeeList fromMainPage="true"></EmployeeList>
      </div>
      <Footer />
    </div>
  );
}

export default OurTeam;
