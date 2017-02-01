import React, {PropTypes} from 'react';

class QuestionRow extends React.Component {

    constructor() {
        super();

        this.editClick = this.editClick.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.removeClick = this.removeClick.bind(this);
        this.resetClick = this.resetClick.bind(this);
        this.completeBadge = this.completeBadge.bind(this);
    }

    editClick() {
        this.props.editModeFn(this.props.data._id);
    }

    removeClick() {
        this.props.removeFn(this.props.data._id);
    }

    handleBlur(event) {
        this.props.updateFn(this.props.data._id, { title: event.target.value }, true);
    }

    handleEdit(event) {
        this.props.updateFn(this.props.data._id, { title: event.target.value });
    }

    resetClick() {
        this.props.updateFn(this.props.data._id, { progress: 0 }, true);
    }

    completeBadge() {
        return this.props.data.progress === 5 ? <i className="fa fa-check complete-badge"/> : '';
    }

    render() {
        return (
            <tr>
                <td>{this.completeBadge()}</td>
                <td>{this.props.editMode ? <input type="text" onChange={this.handleEdit} onBlur={this.handleBlur} value={this.props.data.title} /> : this.props.data.title}</td>
                <td>{this.props.data.progress || 0}/5</td>
                <td>
                    <i className="fa fa-pencil" onClick={this.editClick}/> <i className="fa fa-undo" onClick={this.resetClick}/> <i className="fa fa-trash" onClick={this.removeClick}/>
                </td>
            </tr>
        );
    }
}

QuestionRow.propTypes = {
    data: PropTypes.object.isRequired,
    editMode: PropTypes.bool,
    editModeFn: PropTypes.func.isRequired,
    updateFn: PropTypes.func.isRequired,
    removeFn: PropTypes.func.isRequired
};

export default QuestionRow;