import React, { Component } from 'react'
import { connect } from 'react-redux'


class Leaderboard extends Component {
	render(){
		
		return(
			<div>
				<h1>Leaderboard</h1>
				{this.props.leaderList.map((person)=>{
					return (
						<div key={person.name}>
							<h2>{person.name}</h2>
							<p>
							Total Score: {person.total}<br/>
							Questions Asked: {person.questions}<br/>
							Answers given: {person.answers}
							</p>
						</div>
						)
				})}
			</div>
		)
	}
}

function mapStateToProps({users}){
	var leaderList = []
	Object.keys(users).map((key) => 
		leaderList.push({
			name:users[key].name,
			answers:Object.keys(users[key].answers).length,
			questions:Object.keys(users[key].questions).length,
			total:Object.keys(users[key].answers).length+Object.keys(users[key].questions).length,
		})
		)
	leaderList.sort(function(first, second) {
	 return second.total - first.total;
	});
	return{
		leaderList,
	}
}

export default connect(mapStateToProps)(Leaderboard)