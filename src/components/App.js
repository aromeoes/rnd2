import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css'
import {handleInitialData} from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import Vote from './Vote'
import NewPoll from './NewPoll'
import Nav from './Nav'
import Login from './Login'
import Leaderboard from './Leaderboard'


class App extends Component {
  componentDidMount(){
  	this.props.dispatch(handleInitialData())
  }
  render(){
  	return(
      <Router>
        <Fragment>
      		<LoadingBar/>
          <div className='container'>
          <Nav/>
      			{this.props.loading === true
              ? <div>loading</div>
              : <div>
                  <Route path='/' exact component={Dashboard}/>
                  <Route path='/poll/:id' exact component={Vote}/>
                  <Route path='/new' exact component={NewPoll}/>
                  <Route path='/login' exact component={Login}/>
                  <Route path='/Leaderboard' exact component={Leaderboard}/>
                </div>}
      		</div>
        </Fragment>
      </Router>
  		)
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null,
    authedUser,
  }
}

export default connect(mapStateToProps)(App);
