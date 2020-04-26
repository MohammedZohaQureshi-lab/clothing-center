//Actual code thats combines all state toether
//THe reducer tht store stated of current user(,oving from app to reduces)

//reducer is a function tht stores previous state and the actions

import { combineReducers } from 'redux';
import userReducer from './user/user.reducer'

export default combineReducers({
    user: userReducer
})