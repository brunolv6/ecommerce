import React from 'react';
import SignIn from "../../components/sign-in/sign-in.components";
import SignUp from "../../components/sign-up/sign-up.components";

import './sign-in-sign-up.style.scss';

const SignInSignUp = () => (
    <div className='sign-in-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
);

export default SignInSignUp;
