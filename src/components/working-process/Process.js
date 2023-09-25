import './process.css';
import { Link } from 'react-router-dom';

const workProcessList1 = [
  {
    title: 'Project Plan',
  },
  {
    title: 'Interior Work',
  },
  {
    title: 'Realization',
  },
];

const workProcessList2 = [
  {
    title: '2d/3d Art Work',
  },
  {
    title: 'Interior Work',
  },
  {
    title: 'Decoration Work',
  },
];

function Process(props) {
  return (
    <div className="work-process-container">
      {workProcessList1.map((ele) => (
        <CardLayout processObj={ele} />
      ))}
      {props.fromHomePage === 'false' &&
        workProcessList2.map((ele) => <CardLayout processObj={ele} />)}
    </div>
  );
}

function CardLayout({ processObj }) {
  return (
    <div>
      <h3> {processObj.title} </h3>
      <p className="large-paragraph m-t-20">
        There are many variations of the <br /> passages of lorem Ipsum from{' '}
        <br />
        available, majority.
      </p>
      <div className="btn-container m-t-52 small-paragraph">
        <Link to="/services-single" className="read-more">
          Read More
        </Link>
        <img src="/Vector.svg" alt="right-arrow" className="right-arrow" />
      </div>
    </div>
  );
}

export default Process;
