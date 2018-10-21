import { WAITING, LOADING, ERROR, SUCCESS } from '../utils/network-states'
import * as types from '../actions/action-types'

const initialState = {
  networkState: WAITING,
  networkError: null,
  user: {},
  userNotFound: false
};

export default function(state = initialState, action){
  switch (action.type){
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        networkState: SUCCESS,
      }

    case types.GET_USER_ERROR:
      return {
        ...state,
        networkState: ERROR,
        networkError: action.error,
      }

    case types.GET_USER_LOADING:
      return {
        ...state,
        networkState: LOADING,
        networkError: null,
      }

    case types.GET_USER_NOT_FOUND:
      return {
        ...state,
        networkState: SUCCESS,
        userNotFound: action.userNotFound,
      }

    case types.GET_FOLLOWING_USERS_PAGINATION_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          following: {
            ...state.user.following,
            edges: [
              ...state.user.following.edges,
              ...action.user.following.edges
            ]
          }
        },
        networkFollowingUsersPaginationState: SUCCESS,
      }

    case types.GET_FOLLOWING_USERS_PAGINATION_ERROR:
      return {
        ...state,
        networkFollowingUsersPaginationState: ERROR,
        networkError: action.error,
      }

    case types.GET_FOLLOWING_USERS_PAGINATION_LOADING:
      return {
        ...state,
        networkFollowingUsersPaginationState: LOADING,
        networkError: null,
      }

    default:
      return state 
  }
}