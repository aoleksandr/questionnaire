import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Quiz from './Quiz';
import * as questionActions from '../../actions/questionActions';

import './quiz.scss';

class QuizPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.quiz = this.quiz.bind(this);
        this.updateProgress = this.updateProgress.bind(this);
    }

    updateProgress(questionId, progress) {
        this.props.actions.updateQuestion(questionId, {
            progress: progress
        });
    }

    quiz() {
        if(this.props.loading) {
            return <h3 className="text-center">Loading</h3>;
        } else {
            return (
                <div>
                    <h3>{this.props.stack.title}</h3>
                    <Quiz questions={this.props.questions} updateProgressFn={this.updateProgress} />
                </div>
            );
        }
        
    }

    render() {
        return (
            <div id="quiz-page">
                <Link to={`/stack/${this.props.params.stackId}`}>&larr; Back</Link>
                {this.quiz()}
            </div>
        );
    }
}

QuizPage.propTypes = {
    actions: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
    questions: PropTypes.array.isRequired,
    stack: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        stack: state.stacks.find(stack => stack._id === ownProps.params.stackId) || {},
        questions: state.questions.filter(question => question.stack === ownProps.params.stackId && question.progress < 5),
        loading: state.ajaxCalls > 0
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(questionActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizPage);