import React, { useState } from 'react'
import './Signin.css';
import Checkbox from './Checkbox.jsx'
import gg_profile from '../images/gg_profile.png'
import carbon_password from '../images/carbon_password.png'
import Vector from '../images/Vector.png'
import akar from '../images/akar-icons_google-fill.png'
import cib_facebook from '../images/cib_facebook-f.png'
import bxl_apple from '../images/bxl_apple.png'
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();
  const [signin, setSignIn] = useState('');

  const handleRegister = () => {
    navigate('/registration');
  }

  const handleLogin = () => {
    navigate('/games');
  }

  const [userData, setUserData] = useState({
    username: '',
    password: ''
  })

  const {username, password} = userData;
  const submitSignin = async(event) => {
    event.preventDefault();
    console.log('User Data',userData);

    const signInRequest = {
      username: username,
      password: password
    }

    await fetch('http://localhost:8080/BetMe/LoginPlayer', {
      method: 'POST',
      body: JSON.stringify(signInRequest),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((data) => {
      const {
        username,
        message,
        playerId    
      } = data

      if(message.includes('Successful')){
        console.log('Signup Successful');
        localStorage.setItem('padiUBet', username);
        localStorage.setItem('padiPLID', playerId);
        navigate('/games');
        return;
      }

      setSignIn(message);
    })
    .catch((error) => console.error('Error:', error));
  };

  return (
    <div className='login-page'>
      <header className='signin'>
        <p>Login</p>
      </header>

      <form className='login-form' action="">
        <div className="wrapper">
          <img className='icon' src={gg_profile} alt="" />
          <input className='username'
          // value={this.state.username}
          // onChange={event => (event.target.value)}
          type="text" 
          placeholder='Username' 
          />
        </div>
        <div className="wrapper">
          <img className='icon' src={carbon_password} alt="" />
          <input className='password'
          // value={this.state.password}
          // onChange={event => (event.target.value)}
          type="password" 
          placeholder='Password' 
          />
          <img className='private' src={Vector} alt="" />
        </div>

        <div className="remember">
          <Checkbox />
          <div className='for'>
            <p>Remember me</p>
            <p>Forgot password ?</p>
          </div>
        </div>
        <div>
          <button className='log-button' onClick={handleLogin}>Login</button>
        </div>
      </form>

    
      {/* <div className='options'> */}
        <p className='option'>or login with</p>
        <div className="icon-link">
          <img className='link' src={akar} alt="" />
          <img className='link' src={cib_facebook} alt="" />
          <img className='link' src={bxl_apple} alt="" />
        </div>
        <p className='yet' onClick={handleRegister}>Don't have an account yet?<span className='reg' >Register</span></p>
      {/* </div> */}
    </div>
  )
}

export default Signin
