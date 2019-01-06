import React, { Component } from 'react';
import Instructions from './Instructions'
import './styles/Main.scss'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInstructions: false
    }
  }

  toggleInstructionsShown = () => {
    this.setState({
      showInstructions: !this.state.showInstructions
    })
  }

  showStudyList = (event) => {
    console.log(event.target.value)
    if (event.target.value === 'show-studylist') {
      return this.props.toggle
    }
  }

  render() {
    if (this.state.showInstructions === false) {
      return (
        <header className="header">
          <h1><span>Brain</span><i className="fas fa-brain" /><span>Buster</span></h1>
          <div className="user-controls">
            <button className="toggle-instructions-btn"onClick={this.toggleInstructionsShown}>Show Instructions</button>
              <select onChange={this.showStudyList}>
                <option value="show-all">Show All Questions</option>
                <option value="show-studylist">Study List Only</option>
              </select>
          </div>
        </header>
      )
    } else {
      return (
        <header className="header">
          <h1><i className="fas fa-brain" />Brainbusters</h1>
          <div className="instructions-shown">
            <Instructions />
            <button className="toggle-instructions-btn" onClick={this.toggleInstructionsShown}>Got it!</button>
          </div>
        </header>
      )
    }
    
  }
}

export default Header;