import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import ApiProvider from '../../api/ApiProvider';

import './quiz.scss';

class QuizPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        ApiProvider.fetchStack(this.props.params.stackId).then(res => {
            res.questions = res.questions.filter(question => question.progress < 5);
            this.setState({stack: res, loading: false});
            if(res.questions.length) {
                this.pickRandomQuestion();
            }
        });
        
        this.state = {
            stack: {},
            activeQuestion: null,
            complete: false,
            loading: true
        };

        this.pickRandomQuestion = this.pickRandomQuestion.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
        this.handlePlus = this.handlePlus.bind(this);
        this.questionBody = this.questionBody.bind(this);
    }

    pickRandomQuestion() {
        if (this.state.stack.questions.length === 0) {
            this.setState({
                activeQuestion: {},
                complete: true
            });
            return;
        }

        let stack = Object.assign({}, this.state.stack);
        let index = Math.floor(Math.random() * stack.questions.length);

        let activeQuestion = Object.assign({}, stack.questions[index]);
        stack.questions.splice(index, 1);

        this.setState({
            stack,
            activeQuestion
        });
    }

    handleMinus() {
        if(this.state.activeQuestion.progress > 0) {
            ApiProvider.updateQuestion(this.state.activeQuestion._id, { progress: this.state.activeQuestion.progress - 1 });
        }
        this.pickRandomQuestion();
    }

    handlePlus() {
        if(this.state.activeQuestion.progress < 5) {
            ApiProvider.updateQuestion(this.state.activeQuestion._id, { progress: this.state.activeQuestion.progress + 1 });
        }
        this.pickRandomQuestion();
    }

    questionBody() {
        if(this.state.loading) {
            return;
        }
        if(this.state.complete) {
            return <h1>Stack Complete</h1>;
        }
        if(!this.state.activeQuestion) {
            return <h1>No questions to learn here</h1>;
        }

        return (
            <div>
                <h2 className="quiz-question">{this.state.activeQuestion.title}</h2>
                <div className="row answer-buttons">
                    <div className="col-md-4"><Link onClick={this.handleMinus} className="btn btn-lg btn-danger">-1</Link></div>
                    <div className="col-md-4"><Link onClick={this.pickRandomQuestion} className="btn btn-lg btn-default">~</Link></div>
                    <div className="col-md-4"><Link onClick={this.handlePlus} className="btn btn-lg btn-success">+1</Link></div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div id="quiz-page">
                <Link to={`/stack/${this.state.stack._id}`}>&larr; Back</Link>
                <h3>{this.state.stack.title}</h3>
                {this.questionBody()}
            </div>
        );
    }
}

QuizPage.propTypes = {
    params: PropTypes.object.isRequired
};

export default QuizPage;