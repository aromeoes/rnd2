import React, { Component } from 'react'

class VoteAnswered extends Component{
	render(){
		return(
			<div>
				<h2>Asked By: {this.props.fullName}</h2>
					<h3>Results:</h3>
					<span> Would you rather <b>{this.props.poll.optionOne.text}</b> </span>
					<span> - <i>{this.props.vars.percentageOne}%</i> {this.props.vars.countOne} of {this.props.vars.total} {this.props.vars.mOne} </span>
					<br/>
					<span> Would you rather <b>{this.props.poll.optionTwo.text}</b> </span>
					<span> - <i>{this.props.vars.percentageTwo}%</i> {this.props.vars.countTwo} of {this.props.vars.total} {this.props.vars.mTwo}</span>
			</div>
			)
	}
} 

export default VoteAnswered