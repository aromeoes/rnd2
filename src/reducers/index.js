import {combineReducers} from 'redux'
import authedUser from '../reducers/authedUser'
import polls from '../reducers/polls'
import users from '../reducers/users'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
	users,
	polls,
	authedUser,
	loadingBar: loadingBarReducer})