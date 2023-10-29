import { useEffect, useRef} from 'react'

const Spider = ({ radii }) => {
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

    for (let r = 1; r<=5; r++) {

        context.beginPath();
        context.moveTo(
        centerX + canvas.width/2/5*r * Math.cos(0),
        centerY + canvas.width/2/5*r * Math.sin(0)
        );

        for (let i = 1; i < 6; i++) {
            context.lineTo(
                centerX + canvas.width/2/5*r * Math.cos(i * angle),
                centerY + canvas.width/2/5*r * Math.sin(i * angle)
            );
        }
        
        context.closePath();
        context.strokeStyle = 'gray';
        context.lineWidth = (r===5)? 2 : 0.5;
        context.fillStyle = 'rgba(255, 0, 0, 0.1)'; // SWAP TO CSS VARIABLE
        context.globalAlpha = 1;
        context.stroke();
    }


    context.moveTo(
        centerX,
        centerY
    )
    for (let i = 1; i<=sides; i++) {
        context.lineTo(
            centerX+canvas.width/2*Math.cos(i*angle),
            centerY+canvas.width/2*Math.sin(i*angle)
        )
        context.moveTo(
            centerX,
            centerY
        )
    }
    context.closePath();
    context.strokeStyle = 'gray';
    context.lineWidth = 1;
    context.fillStyle = 'rgba(255, 0, 0, 0.1)'; // SWAP TO CSS VARIABLE
    context.globalAlpha = 1;
    context.stroke();

    context.beginPath();
    context.moveTo(
    centerX + canvas.width/1.5*radii[0] * Math.cos(0),
    centerY + canvas.width/1.5*radii[0] * Math.sin(0)
    );

    for (let i = 1; i < 6; i++) {
    context.lineTo(
        centerX + canvas.width/1.5*radii[i % sides] * Math.cos(i * angle),
        centerY + canvas.width/1.5*radii[i % sides] * Math.sin(i * angle)
    );
    }

    context.closePath();
    context.strokeStyle = 'white';
    context.lineWidth = 4;
    context.fillStyle = 'rgba(255, 0, 0, 0.1)'; // SWAP TO CSS VARIABLE
    context.globalAlpha = 1;
    context.stroke();

}, [radii]);

return <canvas ref={canvasRef} />;
};

export default Spider;