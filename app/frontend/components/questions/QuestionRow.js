import React, {PropTypes} from 'react';

class QuestionRow extends React.Component {

    constructor() {
        super();

        this.editClick = this.editClick.bind(this);
    }

    editClick() {
        this.props.editFn(this.props.data.id);
    }

    render() {
        return (
            <tr>
                <td>{ this.props.edit ? <input type="text" value={this.props.data.title} /> : this.props.data.title }</td>
                <td>{this.props.data.progress}/10</td>
                <td><i className="fa fa-pencil" onClick={this.editClick}/> <i className="fa fa-trash"/></td>
            </tr>
        );
    }
}

QuestionRow.propTypes = {
    data: PropTypes.object.isRequired,
    edit: PropTypes.bool,
    editFn: PropTypes.func.isRequired
};

export default QuestionRow;