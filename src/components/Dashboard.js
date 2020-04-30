import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'

import { handleActiveTab } from '../actions/shared'
import PollNavbar from './Navbar'
import PollList from './PollList';

class Dashboard extends Component {

    componentDidMount(){
        this.props.dispatch(handleActiveTab('unanswered'))
      }
    render() {
        return (
            <div>
               <PollNavbar/>
                <Container>
                <PollList/> 
                </Container>
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, users }) {
    return {
      loading: authedUser === null,
      authedUser,
      users
    }
  }

export default connect(mapStateToProps)(Dashboard)
