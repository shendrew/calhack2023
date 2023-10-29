import { useEffect, useState } from 'react'
import axios from 'axios';
import Linegraph from "./line"
// import Spider from "./spider"

export default function Frame() {

    const [emotions, setEmotions] = useState()
    const [intervalTime, setIntervalTime] = useState(10000)
    const [lineData, setLineData] = useState([])
    const [size, setSize] = useState([])

    var weights = new Map();
    weights.set('Admiration',1);
    weights.set('Adoration',1);
    weights.set('Aesthetic Appreciation',1);
    weights.set("Amusement",1);
    weights.set("Anger",-1);
    weights.set("Anxiety",-1);
    weights.set("Awe",1);
    weights.set("Awkwardness",-1);
    weights.set("Boredom",0);
    weights.set("Calmness",0);
    weights.set("Concentration",0);
    weights.set("Confusion",0);
    weights.set("Contemplation",0);
    weights.set("Contentment",1);
    weights.set("Craving",0);
    weights.set("Desire",0);
    weights.set("Determination",0);
    weights.set("Disappointment",-1);
    weights.set("Disgust",-1);
    weights.set("Distress",-1);
    weights.set("Doubt",-1);
    weights.set("Embarrassment",-1);
    weights.set("Empathic Pain",0);
    weights.set("Entrancement",1);
    weights.set("Envy",-1);
    weights.set("Excitement",1);
    weights.set("Fear",-1);
    weights.set("Guilt",-1);
    weights.set("Horror",-1);
    weights.set("Interest",1);
    weights.set("Joy",1);
    weights.set("Love",1);
    weights.set("Nostalgia",1);
    weights.set("Pain",-1);
    weights.set("Pride",1);
    weights.set("Realization",1);
    weights.set("Relief",1);
    weights.set("Romance",1);
    weights.set("Sadness",-1);
    weights.set("Satisfaction",1);
    weights.set("Shame",-1);
    weights.set("Surprise (negative)",-1);
    weights.set("Surprise (positive)",1);
    weights.set("Sympathy",1);
    weights.set("Tiredness",-1);
    weights.set("Triumph",1);

    function getData() {
        axios({
            method: "GET",
            url:"/request",
        })
        .then((response) => {
            const res = response.data
            setEmotions({
                emotionsf : res.emotionsf,
                emotionsp : res.emotionsp,
                // emotionsb : res.emotionsb,
            })

            const pt = weights[res.emotionsf.emotionsf[0].name]*res.emotionsf.emotionsf[0].score+
                weights[res.emotionsp.emotionsp[0].name]*res.emotionsp.emotionsp[0].score
            setLineData((p)=>[...lineData, pt])

            
            (lineData.size > 1 && setSize({size : [...size, 1]}));
        }).catch((error) => {
            if (error.response) {
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
            }
        })
        console.log(lineData)
    }
    //end of new line 

    useEffect(() => {
        const interval = setInterval(getData, intervalTime)
        return () => clearInterval(interval)
    }, []);

    return (
        <div className="App">

            <div className="App">
                <button onClick={() => setIntervalTime(10000)}>Start recording (10s)</button>
                <button onClick={() => setIntervalTime(null)}>Stop interval</button>
            </div>
    
            {/* new line start*/}
            <p>Face data details: </p>
            {emotions && emotions.emotionsf &&
                <div>
                  <p>: {emotions.emotionsf[0].name}</p>
                  <p>: {emotions.emotionsf[0].score}</p>
                </div>
            }

            {/* new line start*/}
            <p>Prosody data details: </p>
            {emotions && emotions.emotionsp &&
                <div>
                  <p>: {emotions.emotionsp[0].name}</p>
                  <p>: {emotions.emotionsp[0].score}</p>
                </div>
            }
    
            <Linegraph amountentries="lineData"/>
        </div>
    );
}