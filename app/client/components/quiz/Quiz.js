import React, {PropTypes} from 'react';

class Quiz extends React.Component {
    constructor(props, context) {
        super(props, context);
        
        this.state = {
            questionsQueue: Object.keys(this.props.questions),
            activeQuestion: null
        };

        this.nextQuestion = this.nextQuestion.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
        this.handlePlus = this.handlePlus.bind(this);
    }

    componentWillMount() {
        this.nextQuestion();
    }

    nextQuestion() {
        if(this.state.questionsQueue.length === 0) {
            this.setState({
                activeQuestion: null
            });
            return;
        }

        let nextIndex = this.state.questionsQueue[Math.floor(Math.random() * this.state.questionsQueue.length)];

        this.setState({
            activeQuestion: Object.assign({}, this.props.questions[nextIndex]),
            questionsQueue: this.state.questionsQueue.filter(index => index != nextIndex)
        });
    }

    handleMinus() {
        if(this.state.activeQuestion.progress > 0) {
            this.props.updateProgressFn(this.state.activeQuestion._id, this.state.activeQuestion.progress - 1);
        }
        this.nextQuestion();
    }

    handlePlus() {
        this.props.updateProgressFn(this.state.activeQuestion._id, this.state.activeQuestion.progress + 1);
        this.nextQuestion();
    }

    render() {
        if(this.props.questions.length === 0) {
            return <h3 className="text-center">No questions to learn here</h3>;
        }
        if(!this.state.activeQuestion) {
            return <h3 className="text-center">Stack Complete</h3>;
        }

        return (
            <div>
                <h2 className="quiz-question">{this.state.activeQuestion.title}</h2>
                <div className="row answer-buttons">
                    <div className="col-md-4"><button onClick={this.handleMinus} className="btn btn-lg btn-danger">-1</button></div>
                    <div className="col-md-4"><button onClick={this.nextQuestion} className="btn btn-lg btn-default">~</button></div>
                    <div className="col-md-4"><button onClick={this.handlePlus} className="btn btn-lg btn-success">+1</button></div>
                </div>
            </div>
        );
    }
}

Quiz.propTypes = {
    questions: PropTypes.array.isRequired,
    updateProgressFn: PropTypes.func.isRequired
};

export default Quiz;