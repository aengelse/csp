import React, { Component, PropTypes } from 'react'
import { IDLE, ACTIVE } from '../constants/search-constants'
import SearchResults from './search-results'

import '../styles/search.scss'

class Search extends Component {
  constructor(...props) {
    super(...props)
    this._handleFocus = this._handleFocus.bind(this)
    this._handleBlur = this._handleBlur.bind(this)
  }

  _handleFocus(e) {
    this.props.onChangeState(ACTIVE)
  }

  _handleBlur(e) {
    this.props.onChangeState(IDLE)
  }

  render() {
    const { state, onChangeState } = this.props
    let searchResults = ''

    if(state === ACTIVE) {
      searchResults = <SearchResults state={state} onChangeState={onChangeState} />
    }

    return (
      <div>
        <input
          className="search--input"
          type="text"
          placeholder="Zoeken naar..."
          onFocus={this._handleFocus}
          onBlur={this._handleBlur}
        />
        {searchResults}
      </div>
    )
  }
}

Search.propTypes = {
  state: PropTypes.string.isRequired,
  onChangeState: PropTypes.func.isRequired
}

// Search.defaultProps = {
//   state: IDLE
// }

export default Search
