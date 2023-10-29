import { useEffect, useState } from 'react'
import axios from 'axios';
import Linegraph from "./line"
import Spider from "./spider"

export default function Frame() {
        // new line start
    const [emotions, setEmotions] = useState()
    const [intervalTime, setIntervalTime] = useState(2000)

    // const weights = {
    //     'Admiration':1,
    //     'Adoration':1,
    //     "Aesthetic Appreciation":1,
    //     "Amusement":1,
    //     "Anger":-1,
    //     "Anxiety":-1,
    //     "Awe":1,
    //     "Awkwardness":-1,
    //     "Boredom":0,
    //     "Calmness":0,
    //     "Concentration":0,
    //     "Confusion":0,
    //     "Contemplation":0,
    //     "Contentment":1,
    //     "Craving":0,
    //     "Desire":0,
    //     "Determination":0,
    //     "Disappointment":-1,
    //     "Disgust":-1,
    //     "Distress":-1,
    //     "Doubt":-1,
    //     "Embarrassment":-1,
    //     "Empathic Pain":0,
    //     "Entrancement":1,
    //     "Envy":-1,
    //     "Excitement":1,
    //     "Fear":-1,
    //     "Guilt":-1,
    //     "Horror":-1,
    //     "Interest":1,
    //     "Joy":1,
    //     "Love":1,
    //     "Nostalgia":1,
    //     "Pain":-1,
    //     "Pride":1,
    //     "Realization":1,
    //     "Relief":1,
    //     "Romance":1,
    //     "Sadness":-1,
    //     "Satisfaction":1,
    //     "Shame":-1,
    //     "Surprise (negative)":-1,
    //     "Surprise (positive)":1,
    //     "Sympathy":1,
    //     "Tiredness":-1,
    //     "Triumph":1,
    // }

    function getData() {
        axios({
            method: "GET",
            url:"/request",
        })
        .then((response) => {
            const res = response.data
            console.log(res)
            setEmotions({
                emotions : res,
            })
        }).catch((error) => {
            if (error.response) {
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
            }
        })
    }
    //end of new line 

    useEffect(() => {
        const interval = setInterval({getData}, intervalTime)
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

            {/* new line start*/}
            <p>Burst data details: </p>
            {emotions && emotions.emotionsb &&
                <div>
                  <p>: {emotions.emotionsb[0].name}</p>
                  <p>: {emotions.emotionsb[0].score}</p>
                </div>
            }

            {/* <linegraph /> */}
        </div>
    );
}