export const CHANGE_SEARCH_STATE = 'CHANGE_SEARCH_STATE'
export function changeSearchState(state) {
  return {
    type: CHANGE_SEARCH_STATE,
    state
  }
}

export const CHANGE_SEARCH_TERM = 'CHANGE_SEARCH_TERM'
export function changeSearchTerm(term) {
  return {
    type: CHANGE_SEARCH_TERM,
    term
  }
}
