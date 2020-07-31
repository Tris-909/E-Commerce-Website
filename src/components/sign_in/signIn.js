import React from 'react';

//** PACKAGES */
import { auth, signInWithGoogle } from '../../firebase/firebase';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

//** COMPONENTS */
import FormInput from '../form_input/formInput';
import { CustomButtonContainer } from '../custom-button/CustomButtonStyled';

//** CSS */
const SignInContainer = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
`;

//** COMPONENTS */
class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: ''
      });
      this.props.history.push('/');
    } catch(error) {

    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInContainer>
        <h1>I already have an account</h1>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
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
}

export default withRouter(SignIn);
