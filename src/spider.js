import { useState } from 'react';
import axios from "axios";
/*function getSix() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      // Make the Axios request to your API endpoint
      axios.get('https://api.example.com/data') // Replace with your API endpoint
        .then(response => {
          // Assuming the response contains an array of 6 float variables
          setData(response.data);
        })
        .catch(error => {
          console.error('An error occurred:', error);
        });
    }, []); // The empty dependency array ensures the request is made once when the component mounts
  
    return setData;

  export default getSix;*/


const VariableHexagon = ({ radii }) => {
const canvasRef = useRef(null);

useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set the canvas size
    canvas.width = 400;
    canvas.height = 400;

    // Calculate the center of the canvas
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Define the number of sides for the hexagon
    const sides = 6;

    // Calculate the angle between each side
    const angle = (2 * Math.PI) / sides;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.moveTo(
    centerX + radii[0] * Math.cos(0),
    centerY + radii[0] * Math.sin(0)
    );

    for (let i = 1; i <= sides; i++) {
    context.lineTo(
        centerX + radii[i % sides] * Math.cos(i * angle),
        centerY + radii[i % sides] * Math.sin(i * angle)
    );
    }

    context.closePath();
    context.strokeStyle = 'white';
    context.lineWidth = 3;
    context.fillStyle = 'rgba(255, 0, 0, 0.1)'; // SWAP TO CSS VARIABLE
    context.globalAlpha = 1;
    context.stroke();
}, [radii]);

return <canvas ref={canvasRef} />;
};

export default VariableHexagon;