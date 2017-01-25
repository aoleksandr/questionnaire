import React, {PropTypes} from 'react';

class QuestionsPage extends React.Component {
    render() {
        return (
            <div>
                <h3>Stack Nr. {this.props.params.stackId}</h3>
            </div>
        );
    }
}

QuestionsPage.propTypes = {
    params: PropTypes.object.isRequired
};

export default QuestionsPage;