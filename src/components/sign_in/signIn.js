import React from 'react';

//** PACKAGES */
import { auth, signInWithGoogle } from '../../firebase/firebase';
import {withRouter} from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

//** COMPONENTS */
import FormInput from '../form_input/formInput';
import { CustomButtonContainer } from '../custom-button/CustomButtonStyled';

//** CSS */
const SignInContainer = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 500px) {
      width: 300px;
    }
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
`;

//** COMPONENTS */
const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
      props.history.push('/');
    } catch(error) {
      console.log(error);
    }
  };

  const handleChangeEmail = event => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleChangePassword = event => {
    const { value } = event.target;
    setPassword(value);
  };

    return (
      <SignInContainer>
        <h1>I already have an account</h1>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={handleChangeEmail}
            value={email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={handleChangePassword}
            label='password'
            required
          />
          <Buttons>
            <CustomButtonContainer type='submit'> Sign in </CustomButtonContainer>
            <CustomButtonContainer type="button" onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButtonContainer>
          </Buttons>
        </form>
      </SignInContainer>
    );
}

export default withRouter(SignIn);
