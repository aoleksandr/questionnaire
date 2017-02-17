import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as stackActions from '../../actions/stackActions';
import StackCard from './StackCard';
import AddStackForm from './AddStackForm';
import './stacks.scss';

class StacksPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.removeStack = this.removeStack.bind(this);
        this.addStack = this.addStack.bind(this);
        this.stackCard = this.stackCard.bind(this);
    }

    removeStack(id) {
        this.props.actions.removeStack(id);
    }

    addStack(title) {
        this.props.actions.createStack(title);
    }

    stackCard(stack) {
        let questionsCount = this.props.questions.filter(question => question.stack === stack._id).length;
        return <StackCard key={stack._id} data={stack} questionsCount={questionsCount} removeFn={this.removeStack} />;
    }

    render() { 
        return (
            <div>
                <AddStackForm addFn={this.addStack} />
                <div className="row">
                    {this.props.stacks.map(this.stackCard)}
                </div>
            </div>
        );
    }
}

StacksPage.propTypes = {
    stacks: PropTypes.array.isRequired,
    questions: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        stacks: state.stacks,
        questions: state.questions
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(stackActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StacksPage);