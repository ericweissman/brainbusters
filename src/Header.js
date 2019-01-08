import React, { Component } from 'react';
import Instructions from './Instructions';
import Controls from './Controls';
import './styles/Main.scss'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInstructions: false,
    }
  }

  toggleInstructionsShown = () => {
    this.setState({
      showInstructions: !this.state.showInstructions
    })
  }

  render() {
    let { toggle, resetQuiz, studyList, showAllQuestions} = this.props
    if (!this.state.showInstructions) {
      return (
        <header className="header">
          <h1><span>Brain</span><i className="fas fa-brain" /><span>Busters</span></h1>
          <Controls
            studyList={studyList}
            showAllQuestions={showAllQuestions}
            toggleInstructionsShown={this.toggleInstructionsShown}
            resetQuiz={resetQuiz}
            toggle={toggle}
          />
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