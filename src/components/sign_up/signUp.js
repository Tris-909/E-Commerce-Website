import React, { Component } from 'react'


import FormInput from '../form_input/formInput';
import CustomButton from '../custom-button/CustomButton';
import {withRouter} from 'react-router-dom';
import './signUp.scss';
import { auth, createUserProfileDocument } from '../../firebase/firebase';

class SignUp extends Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    
    validation = ({ password, confirmPassword }) => {
        if (password !== confirmPassword) {
            return false;
        } else {
            return true;
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
    
        const { displayName, email, password, confirmPassword } = this.state;
    
        if (password !== confirmPassword) {
          alert("passwords don't match");
          return;
        }
    
        try {
          const { user } = await auth.createUserWithEmailAndPassword(
            email,
            password
          );
    
          await createUserProfileDocument(user, { displayName });
    
          this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
          });
        } catch (error) {
          console.error(error);
        }
      };

    handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
    };

    render() {
        const {displayName, email, password, confirmPassword} = this.state;

        return (
        <div className='sign-up'>
        <h1 className="title">Sign Up a new Account</h1>

        <form className="sign-up-form"  onSubmit={this.handleSubmit}>
          <FormInput
            name='displayName'
            type='text'
            handleChange={this.handleChange}
            value={displayName}
            label='Your UserName'
            required
          />
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={email}
            label='Email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={this.handleChange}
            label='Your Password'
            required
          />
          <FormInput
            name='confirmPassword'
            type='password'
            handleChange={this.handleChange}
            value={confirmPassword}
            label='Confirm You Password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign Up </CustomButton>
          </div>
        </form>
      </div>
        )
    }
}

export default withRouter(SignUp);