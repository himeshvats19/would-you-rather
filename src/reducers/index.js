import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './users'
import questions from './questions'
import activeTab from './activeTab'

export default combineReducers({
  authedUser,
  users,
  questions,
  activeTab
})