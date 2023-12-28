import React from 'react'
import './Registration.css';
import gg_profile from '../images/gg_profile.png'
import icons8 from '../images/icons8-email-50.png' 
import carbon_password from '../images/carbon_password.png'



class Registration extends React.Component {
    state = {
        username: "",
        email: "",
        password: "",
        signupResponse: ""
    };
    signup = async (e) => {
        e.preventDefault();
        if (this.state.username === "" && this.state.email === "" && this.state.password === "") {
            alert("All fields are mandatory!");
            return;                
        }
            console.log(this.state);
           

        try {
            const signUpUrl = 'http://localhost:3000/BetMe/registerPlayer';
            const signupRequest = {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            };

            const response = await fetch(signUpUrl, {
                method: "POST",
                body: JSON.stringify(signupRequest),
                headers: {
                    'Content-Type': 'application/json, charset=UTF-8'
                }
            });
            const responseObject = await response.json();
            console.log(responseObject);
            if(typeof responseObject.data !== 'string'){
                this.setState({signupResponse: "Sign up successful"});
                localStorage.setItem('Username', this.state.username)
            } else {
                this.setState({signupResponse: responseObject.data});
            }    
        } catch(error) {
            console.log('Error:', error);
        }
    };

   

    render() {
        return (
            <div className='container'>
                <div className="header">
                    <div className="text">Sign Up</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <form className='field' onSubmit={this.signup} id='register-part'>
                        <h3 id='signup-response'>{this.state.signupResponse}</h3>
                        <div className="input">
                            <img src={gg_profile} alt="" />
                            <input 
                            type="text" 
                            placeholder='Username'
                            value={this.state.username}
                            onChange={ (e) => this.setState({username: e.target.value})}
                            />
                        </div>
                        <div className="input">
                            <img src={icons8} alt="" />
                            <input 
                            type="email"
                            placeholder='Email' 
                            value={this.state.email}
                            onChange={ (e) => this.setState({email: e.target.value})}
                            />
                        </div>
                        <div className="input">
                            <img src={carbon_password} alt="" />
                            <input 
                            type="password" 
                            placeholder='Password'
                            value={this.state.password}
                            onChange={ (e) => this.setState({password: e.target.value})}
                            />
                        </div>
                        <div className="submit-container">
                            <button className='sign-button'>Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        ); 
    }
}


export default Registration
