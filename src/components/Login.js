import React, { Component } from 'react'
import { Card, Button, Form, Container } from 'react-bootstrap'

class Login extends Component {
    handleUserInput = (e) => {
        e.preventDefault();
        const id = e.target.elements['userId'].value.trim();
        this.props.setAuthUser(id);
    }
    render() {
        return (
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title>Welcome to Would You Rather?</Card.Title>
                        <Form onSubmit={this.handleUserInput}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Text> Sign In </Form.Text>
                                <select name='userId'>
                                    <option>Select User</option>
                                    <option>johndoe</option>
                                    <option>sarahedo</option>
                                    <option>tylermcginnis</option>
                                </select>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                    </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}

export default Login
