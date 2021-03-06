import React from 'react';
import CustomInput from '../custom-input/custom-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils' 

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

    onSubmit = async event => {
        event.preventDefault();
    
        const { email, password } = this.state;
    
        try {
          await auth.signInWithEmailAndPassword(email, password);
          this.setState({ email: '', password: '' });
        } catch (error) {
          console.log(error);
          this.setState({ password: '' });
        }
      };
    
      handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
      };

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
                            google='true'
                            value='Sign In with Google'
                            onClick={signInWithGoogle}
                        >Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
};

export default SignIn;