import { CHANGE_SEARCH_STATE, CHANGE_SEARCH_TERM } from '../actions/search-actions'
import { IDLE } from '../constants/search-constants'

const initialState = {
  state: IDLE,
  term: '',
  results: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case CHANGE_SEARCH_STATE:
      return Object.assign({}, state, {
        state: action.state
      })
    case CHANGE_SEARCH_TERM:
      console.log(Object.assign({}, state, {
        term: action.term,
        results: findResults(action.term)
      }))
      return Object.assign({}, state, {
        term: action.term,
        results: findResults(action.term)
      })
    default:
      return state
  }
}

function findResults(term) {
  return terms.filter((t) => contains(t, term))
}

function contains(source, dest) {
  return source.indexOf(dest) > -1
}

const terms = [
  'iPhone',
  'iPad',
  'Apple',
  'Samsung',
  'Apple Watch',
  'Wasmachine',
  'Google',
  'Smartphone',
  'SD Kaart',
  'CD',
  'Roomba',
  'Apple iPhone 6S 32GB',
  'Iyama',
  'OnePlus One',
  'Huawei',
  'Miele',
  'Philips',
  'Sony',
  'Stofzuigers',
  'Samsung Galaxy S6',
  'Samsung Galaxy S6 Edge',
  'Samsung Galaxy S5',
  'Chromecast',
  'Thule Crossover'
]
