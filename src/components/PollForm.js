import React, { Component } from 'react'
import { Form, Row, Col, Button, Card } from 'react-bootstrap'
import * as _DATA from '../_DATA';
import { connect } from 'react-redux'
import { handleUsers, handleInitialQuestions, handleActiveTab } from '../actions/shared'

class PollForm extends Component {
  saveAnswer = (e) => {
    e.preventDefault();
    const { question, authedUser } = this.props;
    const qid = question.id;
    const answer = e.target.elements['formHorizontalRadios'].value;
    _DATA._saveQuestionAnswer({ authedUser, qid, answer }).then(
      () => {
        this.props.dispatch(handleUsers())
        this.props.dispatch(handleInitialQuestions())
        this.props.dispatch(handleActiveTab('answered'))
      }
    )
  }
  render() {
    const { question, author } = this.props
    const { optionOne, optionTwo } = question
    return (
      <Card>
        <Card.Header>{author ? author.name : ''} asks: </Card.Header>
        <Card.Body>
          <Row>
            <Col xs lg="2">
              <div className="user-avatar">
                <img src={author ? author.avatarURL : ''} alt="user-icon"></img>
              </div>
            </Col>
            <Col>
              <Card.Title>Would You Rather?</Card.Title>
              <Form onSubmit={this.saveAnswer}>
                <fieldset>
                  <Form.Group>
                    <Form.Check
                      type="radio"
                      label={optionOne.text}
                      name="formHorizontalRadios"
                      value='optionOne'
                      defaultChecked
                    />
                    <Form.Check
                      type="radio"
                      label={optionTwo.text}
                      name="formHorizontalRadios"
                      value='optionTwo'
                    />
                    <Button type="submit" variant="primary">Submit</Button>
                  </Form.Group>
                </fieldset>
              </Form>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    )
  }
}

export default connect()(PollForm)
