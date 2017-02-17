import React, {PropTypes} from 'react';

class QuestionRow extends React.Component {

    constructor() {
        super();

        this.state = {
            title: ''
        };

        this.editClick = this.editClick.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.removeClick = this.removeClick.bind(this);
        this.resetClick = this.resetClick.bind(this);
    }

    componentWillMount() {
        this.setState({
            title: this.props.data.title
        });
    }

    editClick() {
        this.props.editModeFn(this.props.data._id);
    }

    removeClick() {
        this.props.removeFn(this.props.data._id);
    }

    handleBlur(event) {
        this.props.updateFn(this.props.data._id, { title: event.target.value });
    }

    handleEdit(event) {
        this.setState({title: event.target.value});
    }

    resetClick() {
        this.props.updateFn(this.props.data._id, { progress: 0 });
    }

    completeBadge(progress) {
        return progress >= 5 ? <i className="fa fa-check complete-badge"/> : '';
    }

    render() {
        return (
            <tr>
                <td>{this.completeBadge(this.props.data.progress)}</td>
                <td>{this.props.editMode ? <input type="text" onChange={this.handleEdit} onBlur={this.handleBlur} value={this.state.title} /> : this.state.title}</td>
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