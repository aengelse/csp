import React, { Component, PropTypes } from 'react'

import '../styles/search-results.scss'

class SearchResults extends Component {
  static propTypes = {
    term: PropTypes.string.isRequired,
    results: PropTypes.array.isRequired
  }

  constructor(...props) {
    super(...props)
  }

  render() {
    const { term, results } = this.props
    let content = <i>Suggesties..</i>

    if(term && results.length > 0) {
      content = results.map(result => (
        <span key={result}>
          {result}<br/>
        </span>
      ))
    }
    else if(term) {
      content = <span>
          <p>Geen resultaten gevonden voor <strong>{term}</strong></p>
          Misschien deze producten?<br/>
          {content}
        </span>
    }


    return (
      <div className="search-results--container">
        <div className="search-results">
          {content}
        </div>
      </div>
    )
  }
}

export default SearchResults
