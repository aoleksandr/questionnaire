import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as stackActions from '../../actions/stackActions';
import StackCard from './StackCard';
import ApiProvider from '../../api/ApiProvider';
import AddStackForm from './AddStackForm';
import './stacks.scss';

class StacksPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        ApiProvider.fetchStacks().then(data => {
            this.setState({stacks: data});
        });

        this.state = {
            stacks: []
        };

        this.removeStack = this.removeStack.bind(this);
        this.addStack = this.addStack.bind(this);
    }

    removeStack(id) {
        ApiProvider.removeStack(id).then(() => {
            this.setState({stacks: this.state.stacks.filter(stack => stack._id !== id)});
        });
    }

    addStack(title) {
        this.props.actions.createStack({
            _id: 1,
            title: title,
            questions: []
        });
        // ApiProvider.addStack(title).then(res => {
        //     this.setState({stacks: [...this.state.stacks, res.data]});
        // });
    }

    render() { 
        return (
            <div>
                <AddStackForm addFn={this.addStack} />
                <div className="row">
                    { this.props.stacks.map(stack => <StackCard key={stack._id} data={stack} removeFn={this.removeStack} />) }
                </div>
            </div>
        );
    }
}

StacksPage.propTypes = {
    stacks: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        stacks: state.stacks
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(stackActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StacksPage);