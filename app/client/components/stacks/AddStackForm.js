import React, {PropTypes} from 'react';

class AddStackForm extends React.Component {
    constructor() {
        super();

        this.state = {
            active: false,
            title: ''
        };

        this.toggleActive = this.toggleActive.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        this.setState({title: event.target.value});
    }

    onClickSave() {
        this.props.addFn(this.state.title);
        this.toggleActive();
        this.setState({title: ''});
    }

    toggleActive() {
        this.setState({active: !this.state.active});
    }

    render() {
        return this.state.active ? 
            (<div className="stack-add-form">
                <input value={this.state.title} onChange={this.onTitleChange} className="form-control" type="text" placeholder="Stack Name" /> 
                <button className="btn btn-success save-btn" onClick={this.onClickSave}>Save</button> 
                <button className="btn btn-default" onClick={this.toggleActive}>Cancel</button>
            </div>) : 
            (<div className="stack-add-form">
                <button onClick={this.toggleActive} className="btn btn-success add-stack-btn">Add stack</button>
            </div>) ;
    }
}

AddStackForm.propTypes = {
    addFn: PropTypes.func.isRequired
};

export default AddStackForm;