import React, { useState, useEffect } from 'react';

function NumberDisplay() {
  const [number, setNumber] = useState(getRandomNumber());

  useEffect(() => {
    const updateNumber = () => {
      setNumber(getRandomNumber());
    };

    const intervalId = setInterval(updateNumber, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function getRandomNumber() {
    const randomValue = Math.floor(Math.random() * (15)) + 100;
    if (randomValue > 150) {
      return "High heart rate, take a break";
    }
    return randomValue;
  }

  return (
    <div>
      <h1>{number}</h1>
    </div>
  );
}

export default NumberDisplay;