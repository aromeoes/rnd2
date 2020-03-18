import {RECEIVE_POLLS, ADD_QUESTION, ADD_VOTE} from '../actions/polls'

export default function polls (state={}, action){
	switch(action.type){
		case RECEIVE_POLLS:
			return{
				...state,
				...action.polls
			}
		case ADD_QUESTION:
			console.log(action.question,'aca')
			return{
				...state,
				...action.question.questions,
			}
		case ADD_VOTE:
			return{
				...state,
				...action.vote.questions,
			}
		default:
		return state
	}

}