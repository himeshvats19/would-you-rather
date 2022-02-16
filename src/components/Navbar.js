import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { connect } from 'react-redux'

import { handleAuthUser } from '../actions/shared'
class PollNavbar extends Component {
    logOut = () => {
        this.props.dispatch(handleAuthUser(null))
    }
    render() {
        const user = this.props.users[this.props.authedUser]
        return (
            <Navbar bg="light" expand="lg">
                <Link to={{
                    pathname: '/would-you-rather',
                }}>  <Navbar.Brand>WOULD YOU RATHER?</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to={{
                            pathname: '/would-you-rather',
                        }}>  Home
                    </Link>
                        <Link to={{
                            pathname: '/add',
                        }}>  New Question
                    </Link>
                        <Link to={{
                            pathname: '/leaderboard',
                        }}>  Leaderboard
                    </Link>
                    </Nav>
                    <h5>{user.name}</h5>
                    <div className="user-icon">
                        <img src={user ? user.avatarURL : ''} alt="user-icon"></img>
                    </div>
                    <Button variant="outline-success" onClick={this.logOut}>Logout</Button>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

function mapStateToProps({ authedUser, users }) {
    return {
        authedUser,
        users
    }
}
export default connect(mapStateToProps)(PollNavbar)