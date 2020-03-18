import {RECEIVE_USERS} from '../actions/users'
import {ADD_VOTE, ADD_QUESTION} from '../actions/polls'

export default function users (state={}, action){
	switch(action.type){
		case RECEIVE_USERS:
		return{
			...state,
			...action.users
		}
		case ADD_QUESTION:
			return{
				...state,
				...action.question.users,
			}
		case ADD_VOTE:
		return{
			...state,
			...action.vote.users,
		}
		default:
		return state
	}

}