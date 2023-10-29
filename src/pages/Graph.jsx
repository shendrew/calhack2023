import React from 'react';
import '../public/App.css';

class Graph extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            data: [],
        }
    }

    getData() {
        fetch('http://127.0.0.1:5000/request')
            .then(response => {
                if (!response.ok) {
                    throw new error('response error');
                }
            })
            .then(response => response.json())
            .then(data => console.log(data))
    }

    render() {
        return (
            <div>
                {/* <p>sdf</p> */}
                {/* <button onClick={this.getData}>test</button> */}
            </div>
        )
    }
}

export default Graph;