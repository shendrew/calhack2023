import React from 'react';
import Spider from '../components/spider';
import '../public/App.css';
import Linegraph from '../components/line';
import NumberDisplay from '../components/heartrate';

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Stats = () => {
  const randomFluctuation = getRandomInt(1, 10); // Generate a random fluctuation between 1 and 10 percent
  const randomStartTime = getRandomInt(1, 12) + " AM"; // Generate a random start time between 1 and 12 AM
  const randomEndTime = getRandomInt(1, 12) + " PM"; // Generate a random end time between 1 and 12 AM
  const randomAverageTime = getRandomInt(4, 12) + " HR"; // Generate a random average time between 4 and 12 hours
  // const randomHeartRate = getRandomInt(60, 200) + " BPM"; // Generate a random heart rate between 60 and 200 BPM

  const radii = [0.1, 0.2, 0.3, 0.4, 0.5];
  const ab = [0.1, 0.5, 0.3, 0.7, 0.5, 0.2, 0.3];
  const ba = [600, 600, 600, 600, 600, 600];

  // const heartrate = [111, 112, 113, 112, 115, 114, 116, 91, 105, 103, 100, 98, 99, 107, 101];

  return (
    <div className="stats-container">
      <div className="stat-item">
        <h4>Average Fluctuation</h4>
        <p>{randomFluctuation}%</p>
      </div>
      <div className="stat-item">
        <h4>Start Time</h4>
        <p>{randomStartTime}</p>
      </div>
      <div className="stat-item">
        <h4>End Time</h4>
        <p>{randomEndTime}</p>
      </div>
      <div className="stat-item">
        <h4>Average Time</h4>
        <p>{randomAverageTime}</p>
      </div>
      <div className="stat-item">
        <h4>Average Heart Rate</h4>
        <NumberDisplay />
      </div>
      <div className="mood-map">
        <h4>Mood Map</h4>
        <Spider radii={radii} />
      </div>
      <div className="line-graph">
        <h4>Line Graph</h4>
        <Linegraph amountentries ={ab} timeentries = {ba}/>
      </div>
    </div>

  );
};

export default Stats;
