import React from 'react'
import './Registration.css';

// const Registration = () => {
class Registration extends React.Component {
    state = {
        username: "",
        email: "",
        password: "",
    };
        signUp = (e) => {
            e.preventDefault();
            if (this.state.username === "" && this.state.email === "" && this.state.password === "") {
                alert("All fields are mandatory!");
                return;                
            }
            console.log(this.state);
            this.setState({ username: "", email: "", password: ""});
        };

    render() {
        return (
            <div className='container'>
                <div className="header">
                    <div className="text">Sign Up</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <form className='field' onSubmit={this.signUp}>
                        <div className="input">
                            <img src="./images/gg_profile.png" alt="" />
                            <input 
                            type="text" 
                            placeholder='Username'
                            value={this.state.username}
                            onChange={ (e) => this.setState({username: e.target.value})}
                            />
                        </div>
                        <div className="input">
                            <img src="./images/icons8-email-50.png" alt="" />
                            <input 
                            type="email"
                            placeholder='Email' 
                            value={this.state.email}
                            onChange={ (e) => this.setState({email: e.target.value})}
                            />
                        </div>
                        <div className="input">
                            <img src="./images/carbon_password.png" alt="" />
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
