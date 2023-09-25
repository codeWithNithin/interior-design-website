import './process.css';

const workProcessList = [
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

function Process() {
  return (
    <div className="work-process-container">
      {workProcessList.map((ele) => (
        <CardLayout processObj={ele} />
      ))}
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
        Read More
        <img src="/Vector.svg" alt="right-arrow" className="right-arrow" />
      </div>
    </div>
  );
}

export default Process;
