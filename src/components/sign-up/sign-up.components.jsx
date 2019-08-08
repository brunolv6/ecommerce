import React from 'react';
import CustomInput from '../custom-input/custom-input.component'
import CustomButton from '../custom-button/custom-button.component'

import './sign-up.style.scss';

class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            name: '',
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
                <h2>If you do not have an account</h2>
                <span>Sign Up below</span>
                <form className='form' onSubmit={this.onSubmit}>
                    <CustomInput 
                        type='text'
                        name='name'
                        value={this.state.name}
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