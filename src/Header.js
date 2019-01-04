import React, { Component } from 'react'
import './styles/Main.scss'

class Header extends Component {

  render() {
    return (
      <div className="header">
        <i className="fas fa-brain" />
        <h1>Brainbusters</h1>
        <div>
          <button>Instructions</button>
          <div>
            <button>All Questions</button>
            <button>Study List</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;