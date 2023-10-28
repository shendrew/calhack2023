import { useState } from 'react';
const linegraph = ({ amountentries, timeentries }) => { //amount entries should be in the format float 0-1
    const canvasRef = useRef(null); //time entries is in format of seconds
    
    useEffect(() => {
        const listlength = amountentries.length;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
    
        // Set the canvas size
        canvas.width = 400;
        canvas.height = 400;
    
        // // Calculate the center of the canvas
        // const centerX = canvas.width / 2;
        // const centerY = canvas.height / 2;
    
        // // Calculate the angle between each side
    
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.moveTo(
        0, //x = 0
        canvas.height - (amountentries[0]*canvas.height)

        );
    

        totaltime = 0;
        for (let i = 1; i < amountentries; ++i) { //repeat 1 less times than amount of entries
            totaltime += amountentries[i-1];
        context.lineTo(
            canvas.width * (totaltime/3600),
            canvas.height - (amountentries[i]*canvas.height)
        );
        }
    
        context.closePath();
        context.strokeStyle = 'white';
        context.lineWidth = 3;
        context.fillStyle = 'rgba(255, 0, 0, 0.1)'; // SWAP TO CSS VARIABLE
        context.globalAlpha = 1;
        context.stroke();
    }, [amountentries]);
    
    return <canvas ref={canvasRef} />;
    };
    
    export default linegraph;