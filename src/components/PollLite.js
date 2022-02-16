import React, { Component } from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



class PollLite extends Component {
    render() {
        const { question, author } = this.props;
        const id = question.id
        return (
            <div className="card-custom">
                <Card>
                    <Card.Header>Question From : {author ? author.name : ''}</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col xs lg="2">
                                <div className="user-avatar">
                                    <img src={author ? author.avatarURL : ''} alt="user-icon"></img>
                                </div>
                            </Col>
                            <Col>
                                <Card.Title>Would You Rather?</Card.Title>
                                <p className="lt-ans-snippet">{question.optionOne.text}</p>
                                <Link to={`/would-you-rather/questions/${id}`}>
                                    <Button variant="primary">View</Button>
                                </Link>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
function mapStateToProps({ users, questions, activeTab }, { id }) {
    const question = questions[id];
    const author = users[question.author]
    return {
        question,
        author
    }
}
export default connect(mapStateToProps)(PollLite)
