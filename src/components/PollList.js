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

function _getSortedQuestionList(questions) {
    let questionsList = []
    for (let question in questions) {
        questionsList.push(questions[question])
    }
    questionsList.sort((a, b) => {
        return b.timestamp - a.timestamp
    })
    return questionsList
}

function mapStateToProps({ questions, users, authedUser, activeTab }) {
    const user = users[authedUser]
    let questionsList = _getSortedQuestionList(questions);
    const unansweredList = [];
    const answerList = questionsList.filter(question => Object.keys(user.answers).includes(question.id)).map(question => question.id);
    questionsList.forEach(question => {
        if (!answerList.includes(question.id)) {
            unansweredList.push(question.id);
        }
    });

    return {
        questionIds: activeTab === 'unanswered' ? unansweredList : answerList,
        questions,
        users,
        authedUser

    }
}

export default connect(mapStateToProps)(PollList)