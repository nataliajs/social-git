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
  console.log("getUser", user);
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

// actions to manage pagination for following users
function getFollowingUsersPaginationSuccess(user) {
  return {
    type: types.GET_FOLLOWING_USERS_PAGINATION_SUCCESS,
    user
  }
}

function getFollowingUsersPaginationError(error) {
  return {
    type: types.GET_FOLLOWING_USERS_PAGINATION_ERROR,
    error
  }
}

function getFollowingUsersPaginationLoading() {
  return {
    type: types.GET_FOLLOWING_USERS_PAGINATION_LOADING,
  }
}

export function getFollowingUsersPagination( user, lastCursor ) {
  return dispatch => {
    dispatch(getFollowingUsersPaginationLoading())
    queries.getUser(user, lastCursor)
      .then(response => {        
        dispatch(getFollowingUsersPaginationSuccess(response.data.user))
      })
      .catch(error => {
        console.error(error)
        dispatch(getFollowingUsersPaginationError(error))
      })
  }
}
