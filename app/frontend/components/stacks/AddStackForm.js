import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class AddStackForm extends React.Component {
    constructor() {
        super();

        this.state = {
            active: false,
            title: ''
        };

        this.toggleMode = this.toggleMode.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange(event) {
        this.setState({title: event.target.value});
    }

    submit() {
        this.props.addFn(this.state.title);
        this.toggleMode();
        this.setState({title: ''});
    }

    toggleMode() {
        this.setState({active: !this.state.active});
    }

    render() {
        return this.state.active ? 
            (<div className="stack-add-form">
                <input value={this.state.title} onChange={this.handleChange} className="form-control" type="text" placeholder="Stack Name" /> 
                <Link className="btn btn-success" onClick={this.submit}>Save</Link> 
                <Link className="btn btn-default" onClick={this.toggleMode}>Cancel</Link>
            </div>) : 
            (<div className="stack-add-form">
                <Link onClick={this.toggleMode} className="btn btn-success add-stack-btn">Add stack</Link>
            </div>) ;
    }
}

AddStackForm.propTypes = {
    addFn: PropTypes.func.isRequired
};

export default AddStackForm;