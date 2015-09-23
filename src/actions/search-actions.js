export const CHANGE_SEARCH_STATE = 'CHANGE_SEARCH_STATE'
export function changeSearchState(newState) {
  return {
    type: CHANGE_SEARCH_STATE,
    searchState: newState
  }
}
