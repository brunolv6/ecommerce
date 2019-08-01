import React from 'react';

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

    onSubmit = () => {
        this.setState({email: '', password: ''})
    }

    render(){   
        return (
            <div className='signin'>
                <div className='title'>If you already have an account</div>
                <div className='subtitle'>Sign In with your email and password</div>
                <form onSubmit={this.onSubmit}>
                    <input autofocus='true' name='email' type='email' value={this.state.email} onChange={this.handleChange}/>
                    <label name='email' >Email</label>
                    <input name='password' type='password' value={this.state.password} onChange={this.handleChange}/>
                    <label name='password'>Password</label>
                    <button type='submit'>Sign In</button>
                </form>
            </div>
        );
    }
};

export default SignIn;