import * as _DATA from '../_DATA'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { setActiveTab } from '../actions/activeTab' 


export function handleUsers () {
  return (dispatch) => {
    return _DATA._getUsers()
      .then((resp) => {
        let users = resp;
        dispatch(receiveUsers(users))
      })
  }
}

export function handleInitialQuestions () {
    return (dispatch) => {
      return _DATA._getQuestions()
        .then((resp) => {
         let questions = resp;
          dispatch(receiveQuestions(questions))
        })
    }
  }

export function handleActiveTab (id) {
  return (dispatch) => {
        dispatch(setActiveTab(id))
      }
}

export function handleAuthUser (id) {
  return (dispatch) => {
    dispatch(setAuthedUser(id))
      }
}