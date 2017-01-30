import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import ApiProvider from '../../api/ApiProvider';

import './quiz.scss';

class QuizPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        ApiProvider.fetchStack(this.props.params.stackId).then(res => {
            this.setState({stack: res});
        });



        this.state = {
            stack: {},
            activeQuestion: {
                title: 'Big Question',
                id: 3
            }
        };
    }



    render() {
        return (
            <div id="quiz-page">
                <h3>{this.state.stack.title}</h3>
                <h2 className="quiz-question">{this.state.activeQuestion.title}</h2>
                <div className="row answer-buttons">
                    <div className="col-md-4"><Link className="btn btn-lg btn-danger">-1</Link></div>
                    <div className="col-md-4"><Link className="btn btn-lg btn-default">~</Link></div>
                    <div className="col-md-4"><Link className="btn btn-lg btn-success">+1</Link></div>
                </div>
            </div>
        );
    }
}

QuizPage.propTypes = {
    params: PropTypes.object.isRequired
};

export default QuizPage;