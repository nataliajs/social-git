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

export function getUser() {
  return dispatch => {
    dispatch(getUserLoading())
    queries.getUser()
      .then(response => {
        console.log("getUser", response);
        if(response.data.user.name){
          dispatch(getUserNotFound(false))
          dispatch(getUserSuccess(response.data.user))       
        }else{
          dispatch(getUserNotFound(true))
        }

        return response.data.user;
      })
      .catch(error => {
        console.error(error)
        dispatch(getUserError(error))
      })
  }
}
