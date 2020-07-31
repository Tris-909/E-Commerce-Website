import React, { Component } from 'react'

//** PACKAGES */
import { auth, createUserProfileDocument } from '../../firebase/firebase';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

//** COMPONENTS */
import FormInput from '../form_input/formInput';
import CustomButton from '../custom-button/CustomButton';

//** CSS */
const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
`;

const Title = styled.h1`
  margin: 10px 0;
`;

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
          this.props.history.push('/');
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
        <SignUpContainer>
        <Title>Sign Up a new Account</Title>

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
      </SignUpContainer>
        )
    }
}

export default withRouter(SignUp);