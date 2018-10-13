import { combineReducers } from 'redux'

import userReducer from './user'

// Combine Reducers
const reducers = combineReducers({
  userState: userReducer
})

export default reducers