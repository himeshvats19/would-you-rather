import { SET_ACTIVE_TAB } from '../actions/activeTab'

export default function authedUser (state = null, action) {
  switch (action.type) {
    case SET_ACTIVE_TAB :
      return action.id
    default :
      return state
  }
}