import React, { Component, PropTypes } from 'react'
import { IDLE, ACTIVE } from '../constants/search-constants'

import '../styles/search.scss'

class Search extends Component {
  static propTypes = {
    onChangeState: PropTypes.func.isRequired,
    onChangeTerm: PropTypes.func.isRequired
  }

  static defaultProps = {
    state: IDLE
  }

  constructor(...props) {
    super(...props)
    this._handleFocus = this._handleFocus.bind(this)
    this._handleBlur = this._handleBlur.bind(this)
    this._handleChange = this._handleChange.bind(this)
  }

  _handleFocus(e) {
    this.props.onChangeState(ACTIVE)
  }

  _handleBlur(e) {
    this.props.onChangeState(IDLE)
  }

  _handleChange(e) {
    const term = this.refs.searchInput.value
    this.props.onChangeTerm(term)
  }

  render() {
    return (
      <div>
        <input
          className="search--input"
          type="text"
          ref="searchInput"
          placeholder="Zoeken naar..."
          onFocus={this._handleFocus}
          onBlur={this._handleBlur}
          onChange={this._handleChange}
        />
      </div>
    )
  }
}

export default Search
