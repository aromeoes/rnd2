import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddVote } from '../actions/polls'

class VoteUnAnswered extends Component{
	state = {
		option: '',
	}
	handleOnSubmit = (e) =>{
		e.preventDefault()
		const option = this.state.option
		const vote = {
			pid: this.props.pid,
			option,
		}
		console.log(this.state)
		const { dispatch } = this.props
		//dispatch
		dispatch(handleAddVote(vote))
		//redirect
	}
	handleChange = (e) =>{
		const option = e.target.value
		this.setState(() => ({
			option,
		}))
	}
	render(){
		return(
			<div>
				<h2>Asked By: {this.props.fullName}</h2>
				<p>Would you rather..?</p>
					<form onSubmit={this.handleOnSubmit} onChange={this.handleChange}>
					  <input type="radio" id="optionOne" name="option" value="optionOne"/>
					  <label for="OptionOne">{this.props.poll.optionOne.text}</label><br/>
					  <input type="radio" id="optionTwo" name="option" value="optionTwo"/>
					  <label for="optionTwo">{this.props.poll.optionTwo.text}</label><br/>
					  <button
						type='submit'
						disabled={this.state.option === ''}>
						submit
					  </button>
					</form> 
			</div>
			)
	}
} 

export default connect()(VoteUnAnswered)