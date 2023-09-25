import './interno-stats.css';

function InternoStats() {
  return (
    <div className="interno-stats">
      <div className="stats-container">
        <div className="stat">
          <div className="number"> 12 </div>
          <p className="small-paragraph title"> Years of experience </p>
        </div>
        <div className="border-right"></div>
        <div className="stat">
          <div className="number"> 85 </div>
          <p className="small-paragraph title"> Success Project </p>
        </div>
        <div className="border-right"></div>

        <div className="stat">
          <div className="number"> 15 </div>
          <p className="small-paragraph title"> Active Project </p>
        </div>
        <div className="border-right"></div>

        <div className="stat">
          <div className="number"> 95 </div>
          <p className="small-paragraph title"> Happy Customers </p>
        </div>
      </div>
    </div>
  );
}

export default InternoStats;
