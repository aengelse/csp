import React, { Component, PropTypes } from 'react'
import { IDLE, ACTIVE } from '../constants/search-constants'

import '../styles/search-results.scss'

class SearchResults extends Component {
  constructor(...props) {
    super(...props)
  }

  render() {
    const { state } = this.props
    return (
      <div className="search-results--container">
        <div className="search-results">
          Yoo
        </div>
      </div>
    )
  }
}

SearchResults.propTypes = {
  state: PropTypes.string.isRequired,
  onChangeState: PropTypes.func.isRequired
}

export default SearchResults
