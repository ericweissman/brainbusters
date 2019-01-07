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
          <h1><span>Brain</span><i className="fas fa-brain" /><span>Busters</span></h1>
          <div className="user-controls">
            <button className="toggle-instructions-btn"onClick={this.toggleInstructionsShown}>Show Instructions</button>
              <select onChange={this.props.toggle}>
                <option value="show-studylist">Study List Only</option>
                <option value="show-all">Show All Questions</option>
              </select>
          </div>
        </header>
      )
    } else {
      return (
        <header className="header">
          <h1><span>Brain</span><i className="fas fa-brain" /><span>Busters</span></h1>
            <Instructions 
              toggleInstructions={this.toggleInstructionsShown}
            />
        </header>
      )
    }
    
  }
}

export default Header;