import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_VOTE = 'ADD_VOTE'

export function receivePolls(polls){
	return {type: RECEIVE_POLLS, polls}
}

function addQuestion(question){
	return {type: ADD_QUESTION, question}
}

function addVote(vote){
	console.log('b',vote)
	return {type: ADD_VOTE, vote}
}

export function handleAddQuestion(text,text2){
	console.log(text,text2)
	return (dispatch,getState) => {
		const {authedUser} = getState()

		dispatch(showLoading())
		return saveQuestion({
			author: authedUser,
			optionOneText:text,
			optionTwoText:text2,
		})
		.then((question) => dispatch(addQuestion(question)))
		.then(dispatch(hideLoading()))
	}
}

export function handleAddVote(vote){
	return (dispatch,getState) => {
		const {authedUser} = getState()
		console.log(vote.option)
		dispatch(showLoading())
		return saveQuestionAnswer({
			authedUser,
			qid:vote.pid,
			answer:vote.option,
		})
		.then((newVote) => dispatch(addVote(newVote)))
		.then(dispatch(hideLoading()))
		.then(console.log('termino'))
	}
}