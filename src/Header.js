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
    // event.preventDefault();
    console.log(this)

    let test = !this.state.showInstructions
    this.setState({
      showInstructions: test
    })
  }

  render() {
    if (this.state.showInstructions === false) {
      return (
        <header className="header">
          <h1><i className="fas fa-brain" />Brainbusters</h1>
          <div>
            <button onClick={this.toggleInstructionsShown}>Instructions</button>
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
            {/* <button onClick={this.showInstructions}>Instructions</button> */}
            <Instructions 
              hideInstructions={this.toggleInstructionsShown}
            />
            {/* <div>
              <select>
                <option value="show-all">Show All Questions</option>
                <option value="show-studylist">Study List Only</option>
              </select>
            </div> */}
          </div>
        </header>
      )
    }
    
  }
}

export default Header;