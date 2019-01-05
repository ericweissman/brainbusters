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

  render() {
    if (this.state.showInstructions === false) {
      return (
        <header className="header">
          <h1><i className="fas fa-brain" />Brainbusters</h1>
          <div>
            <button className="toggle-instructions-btn"onClick={this.toggleInstructionsShown}>Show Instructions</button>
            <div>
              <select>
                <option value="show-all">Show All Questions</option>
                <option value="show-studylist">Study List Only</option>
              </select>
            </div>
          </div>
        </header>
      )
    } else {
      return (
        <header className="header">
          <h1><i className="fas fa-brain" />Brainbusters</h1>
          <div>
            <Instructions />
            <button className="toggle-instructions-btn" onClick={this.toggleInstructionsShown}>Got it!</button>
          </div>
        </header>
      )
    }
    
  }
}

export default Header;