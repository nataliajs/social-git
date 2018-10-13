import { WAITING, LOADING, ERROR, SUCCESS } from '../utils/network-states'
import * as types from '../actions/action-types'

const initialState = {
  networkState: WAITING,
  networkError: null,
  user: {}
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
    default:
      return state 
  }
}