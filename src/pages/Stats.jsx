import React from 'react';
import '../public/App.css';

const Stats = () => {
  return (
    <div className="stats-container">
      <div className="stat-item">
        <h4>Average Fluctuation</h4>
        <p>5%</p>
      </div>
      <div className="stat-item">
        <h4>Start Time</h4>
        <p>9 AM</p>
      </div>
      <div className="stat-item">
        <h4>End Time</h4>
        <p>4 AM</p>
      </div>
      <div className="stat-item">
        <h4>Average Time</h4>
        <p>8 HR</p>
      </div>
      <div className="stat-item">
        <h4>Average Heart Rate</h4>
        <p>129 BPM</p>
      </div>
    </div>
  );
};

export default Stats;
