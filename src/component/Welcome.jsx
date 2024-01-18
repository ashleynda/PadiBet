import React from 'react'
import './Welcome.css'
import { useNavigate } from 'react-router-dom'
import betpic from '../images/betpic.jpeg'

const Welcome = () => {
  const navigate = useNavigate();

  const handleLogin = ()=> {
    navigate('/signin')
  }

  const handleRegis = () => {
    navigate('/registration');
  }

  return (
    <div className='Welcome'>
      <div className="first-time">
        <h1 className='logo'>Padi<span>BET</span></h1>
        <h2 className='welcome'>Welcome to your Betting App</h2>
      </div>

      <img className='welcome-pic' src={betpic} alt=''/>

        <div className='buttons'>
            <button className='login' onClick={handleLogin}>Log into account</button>
            <button className="create" onClick={handleRegis}>Create an Account</button>
        </div>
      
    </div>
  )
}

export default Welcome;
