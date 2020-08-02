import React, { useState } from 'react'

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

const SignUp = (props) => {
    const [userCredentials, setCredentials] = useState({displayName: '', email: '', password: '', confirmPassword: '' })
    
    const validation = () => {
        if (userCredentials.password !== userCredentials.confirmPassword) {
            return false;
        } else {
            return true;
        }
    }

    const handleSubmit = async event => {
        event.preventDefault();
    
        const { displayName, email, password, confirmPassword } = userCredentials;
    
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
    
          setCredentials({
            ...userCredentials,
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
          });
          props.history.push('/');
        } catch (error) {
          console.error(error);
        }
      };

    const handleChange = event => {
        const { value, name } = event.target;
    
        setCredentials({ ...userCredentials ,[name]: value });
    };


        const {displayName, email, password, confirmPassword} = userCredentials;

        return (
        <SignUpContainer>
        <Title>Sign Up a new Account</Title>

        <form className="sign-up-form"  onSubmit={handleSubmit}>
          <FormInput
            name='displayName'
            type='text'
            handleChange={handleChange}
            value={displayName}
            label='Your UserName'
            required
          />
          <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={email}
            label='Email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={handleChange}
            label='Your Password'
            required
          />
          <FormInput
            name='confirmPassword'
            type='password'
            handleChange={handleChange}
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

export default withRouter(SignUp);