import * as types from "./action-types"
import * as queries from "../api/queries"

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

function getUserNotFound(userNotFound) {
  return {
    type: types.GET_USER_NOT_FOUND,
    userNotFound
  }
}

export function getUser(user) {
  return dispatch => {
    dispatch(getUserLoading())
    queries.getUser(user)
      .then(response => {
        if(response.data.user && response.data.user.id){
          dispatch(getUserNotFound(false))
          dispatch(getUserSuccess(response.data.user))
        }else{
          dispatch(getUserNotFound(true))
        }
        return response.data.user
      })
      .catch(error => {
        console.error(error)
        dispatch(getUserError(error))
      })
  }
}
