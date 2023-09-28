import './employee-list.css';

const employeeList = [
  {
    name: 'Charlotte Levi',
    address: 'Design, Australia',
    socialLinks: ['/facebook.png', '/twitter.png'],
    imgPath: '/levi.jpg',
  },

  {
    name: 'Nattasha Julie',
    address: 'Design, Australia',
    socialLinks: ['/facebook.png', '/twitter.png', '/linkedin.png'],
    imgPath: '/juliee.jpg',
  },
  {
    name: 'John Smith',
    address: 'Design, Australia',
    socialLinks: ['/facebook.png', '/twitter.png'],
    imgPath: '/smith.png',
  },
  {
    name: 'Nora Owen',
    address: 'Design, Australia',
    socialLinks: ['/facebook.png', '/twitter.png'],
    imgPath: '/queen.jpg',
  },
];

const moreEmployeeList = [
  {
    name: 'Charlotte Levi',
    address: 'Design, Australia',
    socialLinks: ['/facebook.png', '/twitter.png'],
    imgPath: '/levi.jpg',
  },

  {
    name: 'Nattasha Julie',
    address: 'Design, Australia',
    socialLinks: ['/facebook.png', '/twitter.png', '/linkedin.png'],
    imgPath: '/juliee.jpg',
  },
  {
    name: 'John Smith',
    address: 'Design, Australia',
    socialLinks: ['/facebook.png', '/twitter.png'],
    imgPath: '/smith.png',
  },
  {
    name: 'Nora Owen',
    address: 'Design, Australia',
    socialLinks: ['/facebook.png', '/twitter.png'],
    imgPath: '/queen.jpg',
  },
];

function EmployeeList(props) {
  return (
    <div className="employees">
      {employeeList.map((employee) => (
        <EmployeeCard employeeObj={employee} />
      ))}

      {props.fromMainPage === 'true' &&
        moreEmployeeList.map((employee) => (
          <div className="m-t-50">
            <EmployeeCard employeeObj={employee} />
          </div>
        ))}
    </div>
  );
}

function EmployeeCard({ employeeObj }) {
  return (
    <div className="employee-card">
      <div className="employee-img">
        <img src={employeeObj.imgPath} alt="" />
      </div>
      <div className="employee-content m-t-10">
        <h3> {employeeObj.name} </h3>
        <div className="small-paragraph">{employeeObj.address}</div>
        <div className="m-t-20">
          <div className="social-links-container">
            {employeeObj.socialLinks.map((socialLink) => (
              <img src={socialLink} alt="" className="social-img" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;
