import React, { Component } from 'react'
import FormInput from '../form_input/formInput';
import CustomButton from '../custom-button/CustomButton';

import './signIn.scss';

export class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    
    handlerSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted')
    }

    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form autoComplete="off" onSubmit={this.handlerSubmit}>
                    <FormInput handleChange={this.onChangeHandler} value={this.state.email} label="Email" name="email" type="email" required/>
                    <FormInput handleChange={this.onChangeHandler} value={this.state.password} label="Password" name="password" type="password" required/>
                    <CustomButton text="Submit" />
                </form>
            </div>
        )
    }
}

export default SignIn
