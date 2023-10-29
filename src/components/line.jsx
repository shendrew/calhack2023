import { useEffect, useRef } from 'react'

const Linegraph = ({ amountentries, timeentries }) => { //amount entries should be in the format float 0-1
    const canvasRef = useRef(null); //time entries is in format of seconds
    console.log("yes");
    const bruh = () => {
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
        for(let i=0; i<=400; i+=10){
            context.moveTo(0,i)
            context.lineTo(canvas.width,i)
        }
        for(let i=0; i<=400 ;i+=10){
            context.moveTo(i, 0)
            context.lineTo(i, canvas.height)
        
        }
        context.strokeStyle = 'gray';
        context.lineWidth = 0.5;
        context.fillStyle = 'rgba(255, 0, 0, 0.1)'; // SWAP TO CSS VARIABLE
        context.globalAlpha = 1;
        context.stroke();

        context.beginPath();
        context.moveTo(0,0)
        context.lineTo(0,canvas.height)
        context.lineTo(canvas.height,canvas.width)
        context.moveTo(
        0, //x = 0
        canvas.height - (amountentries[0]*canvas.height)

        );
    

        var totaltime = 0;
        for (let i = 1; i < amountentries.length; ++i) { //repeat 1 less times than amount of entries
            totaltime += timeentries[i-1];
        context.lineTo(
            canvas.width * (totaltime/3600),
            canvas.height - (amountentries[i]*canvas.height)
        );
        }
        // context.lineTo(
        //     300,
        //     300
        // );

        context.strokeStyle = 'white';
        context.lineWidth = 2;
        context.fillStyle = 'rgba(255, 0, 0, 0.1)'; // SWAP TO CSS VARIABLE
        context.globalAlpha = 1;
        context.stroke();
    };
    useEffect(bruh, []);
    useEffect(bruh, [amountentries]);
    
    return <canvas ref={canvasRef} />;
    };
    
    export default Linegraph;