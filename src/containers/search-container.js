import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeSearchState } from '../actions/search-actions'
import Search from '../components/search'

@connect((state) => state)
class SearchContainer extends Component {
  constructor(...props) {
    super(...props)
    this._handleChangeSearchState = this._handleChangeSearchState.bind(this)
  }

  _handleChangeSearchState(newState) {
    const { dispatch, searchState } = this.props

    if(searchState !== newState) {
      dispatch(changeSearchState(newState))
    }
  }

  render() {
    const { searchState } = this.props

    return (
      <Search state={searchState} onChangeState={this._handleChangeSearchState}/>
    )
  }
}

export default SearchContainer
