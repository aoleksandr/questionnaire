import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import QuestionRow from './QuestionRow';
import ApiProvider from '../../api/ApiProvider';
import * as stackActions from '../../actions/stackActions';
import * as questionActions from '../../actions/questionActions';

import './questions.scss';

class QuestionsPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            editQuestionId: null
        };

        this.editClick = this.editClick.bind(this);
        this.addQuestion = this.addQuestion.bind(this);
        this.updateQuestion = this.updateQuestion.bind(this);
        this.questionsList = this.questionsList.bind(this);
        this.removeQuestion = this.removeQuestion.bind(this);
    }

    addQuestion() {
        this.props.actions.createQuestion(this.props.params.stackId);
    }

    updateQuestion(questionId, data) {
        this.props.actions.updateQuestion(questionId, data);
        this.editClick(null);
    }

    removeQuestion(id) {
        ApiProvider.removeQuestion(id).then(() => {
            let stack = Object.assign({}, this.state.stack);
            stack.questions = stack.questions.filter(q => q._id !== id);
            this.setState({stack});
        });
    }

    editClick(id) {
        this.setState({editQuestionId: id});
    }

    questionsList() {
        return this.props.questions.map(q => 
            <QuestionRow data={q} key={q._id} 
                editMode={this.state.editQuestionId === q._id} 
                editModeFn={this.editClick} 
                updateFn={this.updateQuestion}
                removeFn={this.removeQuestion} />
        );                   
    }

    render() {
        return (
            <div id="questions-page">
                <Link to={'/'}>&larr; Back</Link>
                <h3>{this.props.stack.title}</h3>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th className="badge-row" />
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
    params: PropTypes.object.isRequired,
    stack: PropTypes.object.isRequired,
    questions: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    let stack = state.stacks.find(stack => stack._id === ownProps.params.stackId) || {};
    return {
        stack: stack,
        questions: state.questions.filter(question => {
            return question.stack === stack._id;
        })
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, stackActions, questionActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage);