import React from 'react';
import '../public/App.css';

class Profile extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            hours: 0,
            countdown: 0
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.startCountdown = this.startCountdown.bind(this);
    }

    handleInputChange(event) {
        this.setState({ hours: event.target.value });
    }

    handleButtonClick(event) {
        // Start the countdown
        this.startCountdown();
    }

    startCountdown() {
        const { hours } = this.state;
        let totalSeconds = hours * 60 * 60;

        // Update the countdown every second
        const countdownInterval = setInterval(() => {
            if (totalSeconds > 0) {
                totalSeconds--;
                this.setState({ countdown: totalSeconds });
            } else {
                clearInterval(countdownInterval);
            }
        }, 1000);
    }

    render() {
        const { countdown } = this.state;

        return (
        <>
        <form onSubmit={this.handleSubmit}>
            <div className='form-control'>
                <div className="label-input-container">
                    <label>Set gaming time (hours): </label>
                    <input
                        type="number"
                        value={this.state.hours}
                        onChange={this.handleInputChange}
                    />
                    <br/>
                    <br/>
                </div>
                <button
                    className="setGamingTimeButton"
                    type='button'
                    onClick={this.handleButtonClick}
                >
                    Set
                </button>
            </div>
        </form>

        {countdown > 0 && (
            <div>
                <br></br>
                <br></br>
                <p>Time left to game: </p>
                <br></br>
                <div className="countdown">
                    <p>{Math.floor(countdown / 3600)} h : {Math.floor((countdown % 3600) / 60)} m : {countdown % 60} s</p>
                </div>
            </div>
        )}
        </>
        )
    }
};

export default Profile;