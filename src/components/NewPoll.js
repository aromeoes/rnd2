import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/polls'
import { Redirect } from 'react-router-dom'

class NewPoll extends Component{
	state = {
		text: '',
		text2:'',
		toHome:false,
	}
	handleChange = (e) =>{
		let text=this.state.text
		let text2=this.state.text2
		if (e.target.id==1){
			text=e.target.value
		}else{
			text2=e.target.value
		}

		this.setState(() => ({
			text,
			text2
		}))
	}
	handleSubmit = (e) => {
		e.preventDefault()
		console.log(this.state)
		const text = this.state.text
		const text2 = this.state.text2
		const { dispatch } = this.props
		dispatch(handleAddQuestion(text,text2))
		this.setState(()=>({
			text:'',
			text2:'',
			toHome:true,
		}))
	}
	render(){
		const {text, text2, toHome} = this.state
		if (toHome){
			return <Redirect to='/'/>
		}

		return(
			<div>
				<h2>Create Poll </h2>
				<p>Complete the question</p>
				<h3>Would you rather...</h3>
				<form onSubmit={this.handleSubmit} onChange={this.handleChange}>
					<textarea
					id='1'
					placeholder="First option"
					value={text}
					/>
					<h3>OR</h3>
					<textarea
					id='2'
					placeholder="First option"
					value={text2}
					/>
					<button
					type='submit'
					disabled={text === ''}>
						submit
					</button>
				</form>
			</div>
			)
	}
}

export default connect()(NewPoll)