import { CHANGE_SEARCH_STATE } from '../actions/search-actions'
import { IDLE } from '../constants/search-constants'

export default function(state = IDLE, action) {
  switch(action.type) {
    case CHANGE_SEARCH_STATE:
      return action.searchState
    default:
      return state
  }
}
