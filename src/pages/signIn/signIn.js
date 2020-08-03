import React from 'react';

//** PACKAGES */
import styled from 'styled-components';

//** COMPONENTS */
import SignIn from '../../components/sign_in/signIn';
import SignUp from '../../components/sign_up/signUp';

//** CSS */
const SignInAndSignUpContainer = styled.div`
    display: flex;
    justify-content: space-evenly;

    @media screen and (max-width: 800px) {
        display: flex;
        row-gap: 20px;
        flex-direction: column;
    }
`;

//** COMPONENTS */
export default function SignInContainer() {
    return (
        <SignInAndSignUpContainer>
            <SignIn /> 
            <SignUp />
        </SignInAndSignUpContainer>
    )
}
