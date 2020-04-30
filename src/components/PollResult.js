import React, { Component } from 'react'
import { Card, Row, Col, ProgressBar, Badge } from 'react-bootstrap'

export default class PollResult extends Component {
    render() {
        const { question, author, authedUser } = this.props
        const { optionOne, optionTwo } = question
        const totalVotes = optionOne.votes.length + optionTwo.votes.length;
        const optionOnePercentage = optionOne.votes.length / totalVotes * 100;
        const optionTwoPercentage = (optionTwo.votes.length / totalVotes) * 100;

        return (
            <Card>
                <Card.Header>Asked By : {author ? author.name : ''}</Card.Header>
                <Card.Body>
                    <Row>
                        <Col xs lg="2">
                            <div className="user-avatar">
                                <img src={author ? author.avatarURL : ''} alt="user-icon"></img>
                            </div>
                        </Col>
                        <Col>
                            <h3>Results: </h3>
                            <Card className="poll-result-container">
                                <Card.Body>
                                    {question.optionOne.votes.includes(authedUser) ? <Badge variant="secondary">Your Vote</Badge> : ''}
                                    <Card.Text>
                                        {optionOne.text}
                                    </Card.Text>
                                    <ProgressBar now={optionOnePercentage} label={`${optionOnePercentage.toFixed(2)}%`} />
                                    <Card.Text><strong>{optionOne.votes.length} out of {totalVotes} votes</strong></Card.Text>
                                </Card.Body>
                            </Card>
                            <Card.Text>OR</Card.Text>

                            <Card className="poll-result-container">
                                <Card.Body>
                                    {question.optionTwo.votes.includes(authedUser) ? <Badge variant="secondary">Your Vote</Badge> : ''}
                                    <Card.Text>
                                        {optionTwo.text}
                                    </Card.Text>
                                    <ProgressBar now={optionTwoPercentage} label={`${optionTwoPercentage.toFixed(2)}%`} />
                                    <Card.Text><strong>{optionTwo.votes.length} out of {totalVotes} votes</strong></Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}
