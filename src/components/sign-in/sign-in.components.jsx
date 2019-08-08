import React from 'react';
import CustomInput from '../custom-input/custom-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signInWithGoogle } from '../../firebase/firebase.utils' 

import './sign-in.style.scss';

class SignIn extends React.Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        // event.target refere-se ao input todo, seu name, type, placeholder
        //.. e também o valor inserido
        const { value, name } = event.target;

        this.setState({[name]: value});
    }

    onSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    render(){   
        return (
            <div className='signin'>
                <h2>If you already have an account</h2>
                <span>Sign In with your email and password</span>
                <form className='form' onSubmit={this.onSubmit}>
                    <CustomInput 
                        type='email'
                        name='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                    />
                    <CustomInput
                        type='password'
                        name='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                    />
                    <div className="buttons">
                        <CustomButton
                            value='Sign In'
                        >Sign In</CustomButton>
                        <CustomButton
                            value='Sign In with Google'
                            onClick={signInWithGoogle}
                        >Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
};

export default SignIn;