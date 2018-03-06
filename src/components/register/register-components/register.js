import React,{ Component } from 'react';
import { connect } from 'react-redux';

import InputText from './input-text';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            errors: ' '
        };

        this.handleChange = this.handleChange.bind(this);
        this.userFormIsValid = this.userFormIsValid.bind(this);
    }
    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    userFormIsValid(){
        var formIsValid = true;
        this.state.errors = { };

        if(this.state.firstName.length < 3){
            this.state.errors.firstName = 'First name must be at least 3 char';
            formIsValid = false;
        }
        if(this.state.lastName.length < 3){
            this.state.errors.lastName = 'Last name must be at least 3 char';
            formIsValid = false;
        }
        this.setState({errors: this.state.errors});
        return formIsValid;
    }
    pushAdd(){
        if(this.userFormIsValid()) {
            this.props.itemStored.push({
                firstName: this.state.firstName,
                lastName: this.state.lastName
            });
        }
        return;
    }
    render(){
        return(
            <form type="POST">
                <h2>PERSONAL INFO </h2>
                <InputText
                    name="firstName"
                    label="FirstName"
                    value = { this.props.firstName }
                    placeholder = 'Insert first name'
                    onChange = { this.handleChange }
                    error = { this.state.errors.firstName }
                />
                <InputText
                    name="lastName"
                    label="LastName"
                    value = { this.props.lastName }
                    placeholder = 'Insert last name'
                    onChange = { this.handleChange }
                    error = { this.state.errors.lastName }
                />
                <input type="button" value='ADD'  onClick={ () => { this.pushAdd() } } />
            </form>

        )
    }
}

export default Register;