import React from 'react'
import './Signin.css';
import Checkbox from './Checkbox.jsx'
import gg_profile from '../images/gg_profile.png'
import carbon_password from '../images/carbon_password.png'
import Vector from '../images/Vector.png'
import akar-icons_google-fill from '../images/akar-icons_google-fill.png'
import cib_facebook-f from '../images/cib_facebook-f.png' 
import bxl_apple from '../images/bxl_apple.png'

const Signin = () => {



  return (
    <div className='login-page'>
      <header className='signin'>
        <p>Login</p>
        <p>Registration</p>
      </header>

      <form className='login-form' action="">
        <div className="wrapper">
          <img className='icon' src={gg_profile} alt="" />
          <input className='username' type="text" placeholder='Username'/>
        </div>
        <div className="wrapper">
          <img className='icon' src={carbon_password} alt="" />
          <input className='password' type="password" placeholder='Password' />
          <img className='private' src={Vector} alt="" />
        </div>

        <div className="remember">
          <Checkbox />
          <div className='for'>
            <p>Remember me</p>
            <p>Forgot password ?</p>
          </div>
        </div>
      </form>

      <div>
        <button className='log-button'>Login</button>
      </div>
      {/* <div className='options'> */}
        <p className='option'>or login with</p>
        <div className="icon-link">
          <img className='link' src={akar-icons_google-fill} alt="" />
          <img className='link' src={cib_facebook-f} alt="" />
          <img className='link' src={bxl_apple} alt="" />
        </div>
        <p className='yet'>Don't have an account yet?<span className='reg'>Register</span></p>
      {/* </div> */}
    </div>
  )
}

export default Signin
