import React from 'react';

import SignIn from '../../components/sign_in/signIn';
import SignUp from '../../components/sign_up/signUp';
import './signIn.scss';

export default function signInContainer() {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn /> 
            <SignUp />
        </div>
    )
}
