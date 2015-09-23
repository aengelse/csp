import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import SearchContainer from './search-container'

class App extends Component {
  constructor(...props) {
    super(...props)
  }

  render() {
    return (
      <div>
        <header className="header">
          <img src="dist/images/coolblue-logo.svg" className="logo" alt="Coolblue"/>
          <SearchContainer/>
        </header>
      </div>
    )
  }
}

App.propTypes = {
  message: PropTypes.string.isRequired
}

export default App
