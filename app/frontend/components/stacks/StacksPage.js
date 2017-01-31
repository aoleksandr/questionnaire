import React from 'react';
import StackCard from './StackCard';
import ApiProvider from '../../api/ApiProvider';

class StacksPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        ApiProvider.fetchStacks().then(data => {
            this.setState({stacks: data});
        });

        this.state = {
            stacks: []
        };
    }

    render() { 
        return (
            <div>
                <a href="" className="btn btn-success add-stack-btn">Add stack</a>
                <div className="row">
                    { this.state.stacks.map(stack => <StackCard key={stack._id} data={stack} />) }
                </div>
            </div>
        );
    }
}

export default StacksPage;