import { useState } from 'react'
import axios from 'axios';

export default function Frame() {
        // new line start
    const [emotions, setEmotions] = useState()

    function getData() {
        axios({
            method: "GET",
            url:"/request-frame",
        })
        .then((response) => {
            const res = response.data
            setEmotions({
                emotions:res.emotions
            })
        }).catch((error) => {
            if (error.response) {
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
            }
        })

        // setEmotions(emotions: )
    }
    //end of new line 

    return (
        <div className="App">
          <header className="App-header">
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
    
            {/* new line start*/}
            <p>Face data details: </p>
            <button onClick={getData}>Click me</button>
            {emotions &&
                <div>
                  <p>: {emotions.emotions[0].name}</p>
                  <p>: {emotions.emotions[0].score}</p>
                </div>
            }
            </header>
        </div>
    );
}