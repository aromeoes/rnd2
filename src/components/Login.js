import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class Login extends Component{
	state = {
		user : "sarahedo",
		yoHome:false,
	}
	handleChange = (e) =>{
		console.log(e.target.value)
		const user = e.target.value
		this.setState(() => ({
			user,
		}))
		console.log(this.state)
	}
	handleSubmit = (e) => {
		e.preventDefault()
		const { dispatch } = this.props
		dispatch(setAuthedUser(this.state.user))
		this.setState(()=>({toHome:true,}))
	}
	render(){
		if (this.state.toHome){
			return <Redirect to='/'/>
		}
		return(
			
			<div>
				<h2> Welcome to would you rather app</h2>
				<h3>Choose your user</h3>
				<form onChange={this.handleChange} onSubmit={this.handleSubmit}>
				<select id="cars" name="carlist" form="carform">
				  
				
					{Object.keys(this.props.users).map((keyName, i) => (
					    <option value={this.props.users[keyName].id}>{this.props.users[keyName].name}</option>
					))}
				</select>
				<button
					type='submit'
				>
						submit
				</button>
				</form>
			</div>
		)
	}
}

function mapStateToProps({users}){
	return{
		users,
	}
}
export default connect(mapStateToProps)(Login)