export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB'

export function setActiveTab (id) {
  return {
    type: SET_ACTIVE_TAB,
    id,
  }
}