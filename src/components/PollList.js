import React, { Component } from 'react'
import TabNav from './TabNav'
import PollLite from './PollLite'
import { connect } from 'react-redux'

class PollList extends Component {
    render() {
        return (
            <div>
                <TabNav />
                <ul>
                    {this.props.questionIds.length > 0 ? this.props.questionIds.map((id) => (
                        <li key={id}>
                            <PollLite id={id} />
                        </li>
                    )) : <p>There are no more Polls Here</p>}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ questions, users, authedUser, activeTab }) {
    const user = users[authedUser]
    const answered = Object.keys(user.answers);
    const unanswered = [];
    Object.keys(questions).forEach(id => {
        if (!answered.includes(id)) {
            unanswered.push(id);
        }
    });

    return {
        questionIds: activeTab === 'unanswered' ? unanswered : answered,
        questions,
        users,
        authedUser

    }
}

export default connect(mapStateToProps)(PollList)