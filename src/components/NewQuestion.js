import React, { Component } from 'react'
import { Card, Row, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import * as _DATA from '../_DATA';
import { handleInitialQuestions } from '../actions/shared'

import PollNavbar from './Navbar'

class NewQuestion extends Component {

    constructor() {
        super()
        this.state = {
            optionOne: '',
            optionTwo: '',
            buttonDisabled: true,
        }
    }


    handleForm = (event) => {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: event.target.value
        });
    }

    submitQuestion = (e) => {
        e.preventDefault();
        const optionOneText = e.target.optionOne.value.trim();
        const optionTwoText = e.target.optionTwo.value.trim();
        const author = this.props.authedUser;
        _DATA._saveQuestion({ optionOneText, optionTwoText, author }).then(resp => {
            this.props.history.push('/would-you-rather')
            this.props.dispatch(handleInitialQuestions())
        })


    }

    render() {
        return (
            <div className="newquestion">
                <PollNavbar />
                <Card>
                    <Card.Body>
                        <Row>
                            <Form onSubmit={this.submitQuestion}>
                                <Form.Group>
                                    <h4>Would You Rather?</h4>
                                    <Form.Control size="lg" name="optionOne" value={this.state.optionOne} type="text" placeholder="Enter Option One Here" onChange={this.handleForm} />
                                    <br />
                                    <p>OR</p>
                                    <Form.Control size="lg" name="optionTwo" value={this.state.optionTwo} type="text" placeholder="Enter Option Two Here" onChange={this.handleForm} />
                                    <hr />
                                    <Button type="submit" variant="primary" disabled={this.state.optionOne === '' || this.state.optionTwo === ''}>Submit</Button>
                                </Form.Group>
                            </Form>
                        </Row>
                    </Card.Body>
                </Card>
            </div>

        )
    }
}
function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion)