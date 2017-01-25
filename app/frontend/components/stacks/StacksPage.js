import React from 'react';
import StackCard from './StackCard';

class StacksPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            stacks: [1,5,6]
        };
    }

    render() { 
        return (
            <div>
                <a href="" className="btn btn-success add-stack-btn">Add stack</a>
                <div className="row">
                    { this.state.stacks.map(i => (<StackCard key={i} id={i} />)) }
                </div>
            </div>
        );
    }
}

export default StacksPage;