import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import { handleUsers, handleAuthUser, handleInitialQuestions } from './actions/shared'
import NewQuestion from './components/NewQuestion';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard'
import Login from './components/Login';
import PollDetails from './components/PollDetails';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialQuestions())
    this.props.dispatch(handleUsers())
  }

  setAuthUser = (id) => {
    if (this.props.users[id]) {
      this.props.dispatch(handleAuthUser(id))
    }
    else {
      alert('Please select correct user ID');
    }
  }
  render() {
    const { authedUser } = this.props;
    return (
      <Router>
        <div className="App">
          <Route path='/would-you-rather' exact render={(props) =>
            authedUser !== null ? <Dashboard /> : <Login setAuthUser={this.setAuthUser} />} />
          <Route path='/would-you-rather/add' render={(props) =>
            authedUser !== null ? <NewQuestion history={props.history} /> : <Login setAuthUser={this.setAuthUser} />} />
          <Route path='/would-you-rather/leaderboard' render={(props) =>
            authedUser !== null ? <Leaderboard /> : <Login setAuthUser={this.setAuthUser} />} />
          <Route path='/would-you-rather/questions/:question_id' render={(props) =>
            authedUser !== null ? <PollDetails match={props.match} history={props.history} /> : <Login setAuthUser={this.setAuthUser} />} />
             <Route path='/would-you-rather/404' render={(props) =>
             <h1>404</h1> }/>
        </div>
      </Router>
    );
  }
}
function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  }
}

export default connect(mapStateToProps)(App)
