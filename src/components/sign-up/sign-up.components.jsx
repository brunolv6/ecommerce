import React from 'react';
import CustomInput from '../custom-input/custom-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.style.scss';

class SignUp extends React.Component {
    constructor() {
        super();
    
        this.state = {
          displayName: '',
          email: '',
          password: '',
          confirmPassword: ''
        };
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
        const { name, value } = event.target;
    
        this.setState({ [name]: value });
      };

    render(){   
        return (
            <div className='signin'>
                <h2>If you do not have an account</h2>
                <span>Sign Up below</span>
                <form className='form' onSubmit={this.handleSubmit}>
                    <CustomInput 
                        type='text'
                        name='displayName'
                        value={this.state.displayName}
                        handleChange={this.handleChange}
                    />
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
                    <CustomInput
                        type='password'
                        name='confirmPassword'
                        value={this.state.confirmPassword}
                        handleChange={this.handleChange}
                    />
                    <CustomButton
                        value='Sign Up'
                    >
                        Sign Up
                    </CustomButton>
                </form>
            </div>
        );
    }
};

export default SignUp;