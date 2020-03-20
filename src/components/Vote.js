import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import VoteAnswered from './VoteAnswered'
import VoteUnAnswered from './VoteUnAnswered'

class Vote extends Component{
	render(){
		let show;
		if (this.props.answered){
			show = <VoteAnswered 
			fullName={this.props.fullName} 
			vars={this.props.vars}
			poll={this.props.poll}
			/>
		}else{
			show = <VoteUnAnswered
			fullName={this.props.fullName} 
			poll={this.props.poll}
			pid={this.props.pid}
			/>
		}
		return(
			<div>
				{show}
			</div>
			)
	}
}

function mapStateToProps({authedUser,users,polls},ownProps){
	console.log(polls[ownProps.match.params.question_id])
	const poll = polls[ownProps.match.params.question_id]
	const resp = Object.keys(users[authedUser].answers)
	const pid = ownProps.match.params.question_id
	const fullName = users[polls[ownProps.match.params.question_id].author].name
	let vars = {}
	let answered = false
	if (resp.indexOf(pid)>=0){
		answered = true
		console.log('contesto')
		vars.total = (poll.optionOne.votes.length + poll.optionTwo.votes.length)
		vars.countOne = poll.optionOne.votes.length
		vars.countTwo = poll.optionTwo.votes.length
		vars.percentageOne = vars.countOne/vars.total*100
		vars.percentageTwo = vars.countTwo/vars.total*100
		vars.mOne = (poll.optionOne.votes.indexOf(authedUser)>=0) ? '<- This is your answer!':''
		vars.mTwo = (poll.optionTwo.votes.indexOf(authedUser)>=0) ? '<- This is your answer!':''
	}else{
		answered = false
	}
	return{
		poll,
		fullName,
		vars,
		answered,
		pid,
	}
}

export default withRouter(connect(mapStateToProps)(Vote))