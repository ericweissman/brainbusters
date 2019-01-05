import React, { Component } from 'react'
import './styles/Main.scss'

class Header extends Component {

  render() {
    return (
      <header className="header">
        
        <h1><i className="fas fa-brain"/>Brainbusters</h1>
        <nav>
          <button>Instructions</button>
          <div>
            <select>
              <option value="show-all">Show All Questions</option>
              <option value="show-studylist">Study List Only</option>
            </select>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;