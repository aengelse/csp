import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeSearchState, changeSearchTerm } from '../actions/search-actions'
import Search from '../components/search'
import SearchResults from '../components/search-results'
import { IDLE } from '../constants/search-constants'

@connect((state) => state)
class SearchContainer extends Component {
  constructor(...props) {
    super(...props)
    this._handleChangeState = this._handleChangeState.bind(this)
    this._handleChangeTerm = this._handleChangeTerm.bind(this)
  }

  _handleChangeState(state) {
    const { dispatch, search } = this.props

    if(search.state !== state) {
      dispatch(changeSearchState(state))
    }
  }

  _handleChangeTerm(term) {
    const { dispatch, search } = this.props

    if(search.term !== term) {
      dispatch(changeSearchTerm(term))
    }
  }

  render() {
    const { state, term, results } = this.props.search
    let searchResults = ''

    if(state !== IDLE) {
      searchResults = <SearchResults term={term} results={results}/>
    }

    return (
      <div>
        <Search
          onChangeState={this._handleChangeState}
          onChangeTerm={this._handleChangeTerm}
        />
        {searchResults}
      </div>
    )
  }
}

export default SearchContainer
