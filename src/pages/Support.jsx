import React, { useState, useEffect } from 'react';
import '../public/App.css';

const Support = () => {
    // State to control oscillation
    const [oscillationValue, setOscillationValue] = useState(0);
  
    // State to control circle radius
    const [circleRadius, setCircleRadius] = useState(50);
  
    // State to track if the circle is increasing or decreasing in radius
    const [isIncreasing, setIsIncreasing] = useState(true);
  
    // Use effect to update the oscillation value
    useEffect(() => {
      const interval = setInterval(() => {
        setOscillationValue(prevValue => prevValue + 0.1);
      }, 50);
  
      return () => clearInterval(interval);
    }, []);
  
    // Use effect to vary the circle radius
    useEffect(() => {
      const radiusInterval = setInterval(() => {
        setCircleRadius(prevRadius => {
          if (prevRadius >= 150) {
            setIsIncreasing(false);
            return prevRadius - 1;
          } else if (prevRadius <= 50) {
            setIsIncreasing(true);
            return prevRadius + 1;
          } else {
            return isIncreasing ? prevRadius + 1 : prevRadius - 1;
          }
        });
      }, 50);
  
      return () => clearInterval(radiusInterval);
    }, [isIncreasing]);
  
    return (
      <div>
        <p>Meditation is beneficial for people with anger issues as it provides a structured practice to cultivate mindfulness and emotional regulation, leading to reduced impulsivity and a greater capacity to respond to triggers with calmness and clarity.</p>
        <p>Take a minute to breathe with us.</p>
        <svg height="1000" width="1000">
        <circle
            cx="680"
            cy="160"
            r={circleRadius}
            fill="none"
            stroke="white"
            strokeWidth="3"
        />
        </svg>
      </div>
    );
  };
  
  export default Support;