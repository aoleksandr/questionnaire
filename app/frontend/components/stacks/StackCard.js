import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class StackCard extends React.Component {
    render() {
        return (
            <div className="col-md-4">
                <div className="stack-card">
                    <h4 className="stack-card-title">Card title</h4>
                    <p className="stack-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link className="btn btn-primary btn-sm" to={`/stack/${this.props.id}`}>Go To Stack</Link>
                </div>  
            </div>
        );
    }
}

StackCard.propTypes = {
    id: PropTypes.number.isRequired
};

export default StackCard;