import React from 'react';
import '../public/App.css';

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Stats = () => {
  const randomFluctuation = getRandomInt(1, 10); // Generate a random fluctuation between 1 and 10 percent
  const randomStartTime = getRandomInt(1, 12) + " AM"; // Generate a random start time between 1 and 12 AM
  const randomEndTime = getRandomInt(1, 12) + " AM"; // Generate a random end time between 1 and 12 AM
  const randomAverageTime = getRandomInt(4, 12) + " HR"; // Generate a random average time between 4 and 12 hours
  const randomHeartRate = getRandomInt(60, 200) + " BPM"; // Generate a random heart rate between 60 and 200 BPM

  return (
    <div className="stats-container">
      <div className="stat-item">
        <h4>Average Fluctuation</h4>
        <p>{randomFluctuation}%</p>
        <br></br>
      </div>
      <div className="stat-item">
        <h4>Start Time</h4>
        <p>{randomStartTime}</p>
        <br></br>
      </div>
      <div className="stat-item">
        <h4>End Time</h4>
        <p>{randomEndTime}</p>
        <br></br>
      </div>
      <div className="stat-item">
        <h4>Average Time</h4>
        <p>{randomAverageTime}</p>
        <br></br>
      </div>
      <div className="stat-item">
        <h4>Average Heart Rate</h4>
        <p>{randomHeartRate}</p>
      </div>
    </div>
  );
};

export default Stats;
