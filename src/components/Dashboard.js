import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from '../components/Poll'
//import Button from '@material-ui/core/Button';

function mapStateToProps( {polls, users, authedUser} ){
  if (authedUser==''){
  	return{
  		pollsIds: Object.keys(polls),
  		fullName: 'User not logged'
  	}
  }
  return { 
  	pollsIds: Object.keys(polls),
  	fullName: users[authedUser].name
  	 };
}

class Dashboard extends Component {
	handleAnswered(e){
		e.preventDefault();
		this.setState(state => ({
	      isAnswered: true
		    }))
	}
	handleUnAnswered(e){
		e.preventDefault();
		this.setState(state => ({
	      isAnswered: false
		    }))
	}

	constructor(props) {
	    super(props);
	    this.state = {
	      isAnswered: false,
	    };
	    // This binding is necessary to make `this` work in the callback
    	this.handleAnswered = this.handleAnswered.bind(this);
    	this.handleUnAnswered = this.handleUnAnswered.bind(this);
	  }
	render(){
		const prueba = this.state.isAnswered
		return(
			<div>
				<h1>Welcome {this.props.fullName}</h1>
				<div> selector answered/not answered</div>
				<div> list of polls </div>
				<button onClick={this.handleUnAnswered}> See unanswered </button> <button onClick={this.handleAnswered}> See Anwered </button>
				<ul>
				{this.props.pollsIds.map( pid => 
					<li key={pid}><Poll isAnswered={prueba} pid={pid} /></li> 
					
				)}
				</ul>
			</div>
		)
	}
}

export default connect(mapStateToProps)(Dashboard)