import React, { Component } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

import { handleUsers } from '../actions/shared'

import PollNavbar from './Navbar'

class Leaderboard extends Component {
    componentDidMount(){
        this.props.dispatch(handleUsers())
    }
    render() {
        const { users } = this.props
        const leaderBoard = this._getLeaderBoardFromUsers(users)
        return (
            <React.Fragment>
            <PollNavbar/>
            { leaderBoard.map(leader => (
            <Card key={leader.id} className="leaderboard">
                <Card.Body>
                    <Row>
                        <Col xs lg="4"> 
                            <div className="user-avatar">
                                <img src={leader ? leader.avatarURL : ''} alt="user-icon"></img>
                            </div>
                        </Col>
                        <Col xs lg="4">
                            <Card.Title>{leader.name}</Card.Title>
            <p>Answered Questions: {leader.answered}</p>
            <p>Created Questions: {leader.questions}</p>
                        </Col>
                        <Col xs lg="4">
                            <Card.Title>Score</Card.Title>
                           <h3>{leader.answered + leader.questions}</h3>
                        </Col>
                    </Row>
            </Card.Body>
        </Card>
            )) }
        </React.Fragment>
            )
    }

    _getLeaderBoardFromUsers(users){
            let leaderBoard = []
            for(let user in users){
                let usersMapFlatten = {}
                usersMapFlatten.id = users[user].id
                usersMapFlatten.name = users[user].name
                usersMapFlatten.avatarURL = users[user].avatarURL
                usersMapFlatten.answered = Object.keys(users[user].answers).length
                usersMapFlatten.questions = users[user].questions.length
                leaderBoard.push(usersMapFlatten)
            }

            return leaderBoard.sort((a, b) => {
                return (b.answered + b.questions) -  (a.answered + a.questions)
            }) 
        
    }
}

function mapStateToProps ({ authedUser, users }) {
    return {
      authedUser,
      users,
    }
  }

  export default connect(mapStateToProps)(Leaderboard)
