import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import QuestionRow from './QuestionRow';
import ApiProvider from '../../api/ApiProvider';

import './questions.scss';

class QuestionsPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        ApiProvider.fetchStack(this.props.params.stackId).then(res => {
            this.setState({stack: res});
        });

        this.state = {
            stack: {},
            editQuestionId: null
        };

        this.editClick = this.editClick.bind(this);
        this.addQuestion = this.addQuestion.bind(this);
        this.updateQuestion = this.updateQuestion.bind(this);
        this.questionsList = this.questionsList.bind(this);
        this.removeQuestion = this.removeQuestion.bind(this);

    }

    addQuestion() {
        ApiProvider.addQuestion(this.props.params.stackId).then(res => {
            let stack = Object.assign([], this.state.stack);
            stack.questions.push(res.data);
            this.setState({
                stack,
                editQuestionId: res.data._id
            });
        });
    }

    updateQuestion(questionId, title, updateApi = false) {
        let stack = Object.assign({}, this.state.stack);
        stack.questions = stack.questions.map(question => {
            if(question._id === questionId) {
                question.title = title;
            }
            return question;
        });

        this.setState({stack});

        if(updateApi) {
            this.editClick(null);
            ApiProvider.updateQuestion(questionId, {title: title}).then(res => {
                console.log('question updated ', res.status);
            }, err => {
                console.warn(err);
            });
        }
    }

    removeQuestion(id) {
        ApiProvider.removeQuestion(id).then(res => {
            let stack = Object.assign({}, this.state.stack);
            stack.questions = stack.questions.filter(q => q._id !== id);
            this.setState({stack});
        });
    }

    editClick(id) {
        this.setState({editQuestionId: id});
    }

    questionsList() {
        if(this.state.stack.questions) {
            return this.state.stack.questions.map(q => 
                <QuestionRow data={q} key={q._id} 
                    editMode={this.state.editQuestionId === q._id} 
                    editModeFn={this.editClick} 
                    updateFn={this.updateQuestion}
                    removeFn={this.removeQuestion} />
            );
        }                    
    }

    render() {
        return (
            <div id="questions-page">
                <Link to={'/'}>&larr; Back</Link>
                <h3>{this.state.stack.title}</h3>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Question</th>
                            <th className="progress-row">Progress</th>
                            <th className="actions-row">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.questionsList()}
                    </tbody>
                </table>
                <Link className="add-question-btn btn btn-default" onClick={this.addQuestion}>Add Question</Link>
                <Link className="add-question-btn btn btn-success pull-right" to={`/quiz/${this.props.params.stackId}`}><i className="fa fa-play"/> Start Quiz</Link>
            </div>
        );
    }
}

QuestionsPage.propTypes = {
    params: PropTypes.object.isRequired
};

export default QuestionsPage;