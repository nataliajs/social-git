import * as types from "./action-types"
import * as queries from "../queries"

// actions to get a list of user
function getUserSuccess(user) {
  return {
    type: types.GET_USER_SUCCESS,
    user
  }
}

function getUserError(error) {
  return {
    type: types.GET_USER_ERROR,
    error
  }
}

function getUserLoading() {
  return {
    type: types.GET_USER_LOADING,
  }
}
/*
export function getUser() {
  return dispatch => {
    dispatch(getUserLoading())
    queries.getUser()
      .then(response => {
        dispatch(getUserSuccess(response.data.user))
      })
      .catch(error => {
        console.error(error)
        dispatch(getUserError(error))
      })
  }
}
*/