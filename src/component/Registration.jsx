import React, { useState } from 'react'
import './Registration.css';
import gg_profile from '../images/gg_profile.png'
import icons8 from '../images/icons8-email-50.png' 
import carbon_password from '../images/carbon_password.png'
import { useNavigate } from 'react-router-dom';



const Registration = () => {
  const navigate = useNavigate();
  const [signup, setSignUp] = useState('');
  

  const handleCancel = () => {
    navigate('/')
  }

  const [userData, setUserData] = useState({
    email: '',
    username: '',
    password: ''
  })

  const {username, email, password} = userData;
  const submitSignup = async(event) => {
    event.preventDefault();
    console.log('User Data',userData);

    const signUpRequest = {
      username: username,
      email: email,
      password: password,
    }

    await fetch('http://localhost:8080/BetMe/registerPlayer', {
      method: 'POST',
      body: JSON.stringify(signUpRequest),
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

        setSignUp(message);
      })
      .catch((error) => console.error('Error:', error));
  };
   
  
    return (
      <div className="container">
        <div className="header">
        <div className="cancel"><button id="cancel-login" onClick={handleCancel}>X</button></div>
          <div className="text">Sign Up</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <form className="field" id="register-part">
            <h3 id="signup-response">{signup}</h3>
            <div className="input">
              <img src={gg_profile} alt="" />
              <input
                type="text"
                value={userData.username}
                onChange={(e) => setUserData({...userData, username: e.target.value})}
                placeholder="Username"
                id="username"
              />
            </div>
            <div className="input">
              <img src={icons8} alt="" />
              <input
                type="email"
                value={userData.email}
                onChange={(e) => setUserData({...userData, email: e.target.value})}
                placeholder="Email"
                id="email"
              />
            </div>
            <div className="input">
              <img src={carbon_password} alt="" />
              <input
                type="password"
                value={userData.password}
                onChange={(e) => setUserData({...userData, password: e.target.value})}
                placeholder="Password"
                id="password"
              />
            </div>
            <div className="submit-container">
              <button className="sign-button" type="submit" onClick={submitSignup}>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

export default Registration;

