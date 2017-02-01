import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class StackCard extends React.Component {

    constructor() {
        super();

        this.removeHandler = this.removeHandler.bind(this);
    }

    removeHandler() {
        if(confirm('Really Remove?')) {
            this.props.removeFn(this.props.data._id);
        }
    }

    render() {
        return (
            <div className="col-md-4">
                <div className="stack-card">
                    <h4 className="stack-card-title">{this.props.data.title}</h4>
                    <p className="stack-card-text">Questions: {this.props.data.questions.length}</p>
                    <Link className="btn btn-primary btn-sm" to={`/stack/${this.props.data._id}`}>Go To Stack</Link>
                    <Link className="btn btn-danger btn-sm pull-right" onClick={this.removeHandler}><i className="fa fa-trash" /></Link>
                </div>
            </div>
        );
    }
}

StackCard.propTypes = {
    data: PropTypes.object.isRequired,
    removeFn: PropTypes.func.isRequired
};

export default StackCard;