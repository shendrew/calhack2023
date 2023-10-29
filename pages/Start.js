import React from 'react';
import '../App.css';

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    setTextInput(e.target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`You entered: ${textInput}`);
  }

  render() {
    return (
      <>
      <form onSubmit = {handleSubmit}>
        <div className='form-control'>
          <label>Set gaming time: </label>
          <input type="text" value={textInput} onChange={handleChange}/>
          <br/>
          <br/>
          <input className="setGamingTimeButton" type='button' onClick={() => window.open("/searchlist", "_self")} value="Submit" />
        </div>
      </form>
      </>
    )
  }
};

export default Start;