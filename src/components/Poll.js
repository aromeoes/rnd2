import React, { Component } from 'react'
import { connect } from 'react-redux'
import pollHelper from '../utils/helpers'
import { Link } from 'react-router-dom'

class Poll extends Component {
	render(){
		const prueba=(this.props.display) ? "block"  : "none"
		return(
			<div style={{display:prueba}}>
				<div><p>{this.props.fullName} asks:</p></div>
				<div><p>Avatar: {this.props.avatar}</p></div>
				<div><h3>Would you rather</h3> <p>...{this.props.firstOption}...</p></div>
				<Link to={'/poll/'.concat(this.props.pid)}> View Poll {this.props.pid} </Link>
				<p> Muestro?: {this.props.display.toString()}</p>
			</div>
		)
	}

}

function mapStateToProps({users,authedUser,polls},{pid, isAnswered}){
	const poll = polls[pid]
	const {fullName,avatar,firstOption,answered,display} = pollHelper(authedUser,polls,users,poll,isAnswered)
	return {
		authedUser,
		poll,
		fullName,
		avatar,
		firstOption,
		pid,
		answered,
		display
	}
}

export default connect(mapStateToProps)(Poll)