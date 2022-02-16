import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

import PollForm from './PollForm'
import PollResult from './PollResult'
import PollNavbar from './Navbar'

class PollDetails extends Component {
    render() {
        const { questions, users, activeTab, authedUser, match } = this.props;
        const { question_id } = match.params

        const question = questions[question_id];

        if (question === undefined) {
            return <Redirect to='/would-you-rather/404' />
        }
        const author = users[question.author]
        return (
            <div>
                <PollNavbar />
                <Container>
                    {activeTab === 'unanswered' ? <PollForm
                        question={question}
                        author={author}
                        authedUser={authedUser}
                    /> : <PollResult
                            question={question}
                            author={author}
                            authedUser={authedUser}
                        />
                    }
                </Container>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions, activeTab }) {
    return {
        questions,
        users,
        authedUser,
        activeTab
    }
}

export default connect(mapStateToProps)(PollDetails)