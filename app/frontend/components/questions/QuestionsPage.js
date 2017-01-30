import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import QuestionRow from './QuestionRow';
import ApiProvider from '../../api/ApiProvider';

import './questions.scss';

class QuestionsPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        ApiProvider.fetchQuestions(this.props.params.stackId).then(res => {
            this.setState({questions: res});
        });

        this.state = {
            questions: [],
            editQuestionId: null
        };

        this.editClick = this.editClick.bind(this);
        this.addQuestion = this.addQuestion.bind(this);
    }

    addQuestion() {
        let questions = Object.assign([], this.state.questions);
        questions.push({
            title: '',
            progress: 0,
            id: 8
        });
        this.setState({questions});
    }

    editClick(id) {
        this.setState({editQuestionId: id});
    }

    render() {
        return (
            <div id="questions-page">
                <Link to={'/'}>&larr; Back</Link>
                <h3>Stack Nr. {this.props.params.stackId}</h3>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Question</th>
                            <th className="progress-row">Progress</th>
                            <th className="actions-row">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.questions.map(q => <QuestionRow data={q} key={q.id} edit={this.state.editQuestionId === q.id} editFn={this.editClick}/>) }
                    </tbody>
                </table>
                <Link className="add-question-btn btn btn-success" onClick={this.addQuestion}>Add Question</Link>
            </div>
        );
    }
}

QuestionsPage.propTypes = {
    params: PropTypes.object.isRequired
};

export default QuestionsPage;