import React from 'react'
import './Welcome.css'

const Welcome = () => {
  return (
    <div className='Welcome'>
        <div className="first-time">
            <h1 className='logo'>Padi<span>BET</span></h1>
            <h2 className='welcome'>Welcome to your Betting App</h2>
        </div>

        <div className='buttons'>
            <button className='login' >Log into account</button>
            <button className="create">Create an Account</button>
        </div>
      
    </div>
  )
}

export default Welcome;
