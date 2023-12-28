import React from 'react'
import './Games.css'
import Options from './Options'
import Vector1 from '../images/Vector1.png'
import bi_wallet from '../images/bi_wallet-fill.png'
import ant from '../images/ant-design_notification-filled.png'
import bx_football from '../images/bx_football-removebg-preview.jpg'
import  bx_basketball from '../images/bx_basketball-removebg-preview.jpg'
import icon from '../images/icon-park-solid_badminton-removebg-preview.jpg'
import fluent_sport from '../images/fluent_sport-hockey-24-filled-removebg-preview.jpg'
import park from '../images/park-solid_boxing-removebg-preview.jpg'
import ci_tennis from '../images/ci_tennis-match-removebg-preview.jpg'
import sliders from '../images/sliders-h.png'

const Games = () => {
  return (
    <div className='games-container'>
      <div className='header1'>
        <img className='hamburger' src={Vector1} alt="" />
        <div className='notify'>
          <p>$</p>
          <img src={bi_wallet} alt="" />
          <img src={ant} alt="" />
        </div>
      </div>

      <div className='sports'>
        <div className='spot'>
          <img className='spot1' src={bx_football} alt="" />
          <p>soccer</p>
        </div>
        <div className='spot'>
          <img className='spot1' src={bx_basketball} alt="" />
          <p>basketball</p>
        </div>
        <div className='spot'>
          <img className='spot1' src={icon} alt="" />
          <p>badminton</p>
        </div>
        <div className='spot'>
          <img className='spot1' src={fluent_sport} alt="" />
          <p>hockey</p>
        </div>
        <div className='spot'>
          <img className='spot1' src={park} alt="" />
          <p>boxing</p>
        </div>
        <div className='spot'>
          <img className='spot1' src={ci_tennis} alt="" />
          <p>tennis</p>
        </div>
      </div>

      <div className='time'>
        <p>Live</p>
        <p>1H</p>
        <p>2H</p>
        <p>3H</p>
        <p>All upcoming</p>
        <div className='time-pic'>
          <img src={sliders} alt="" />
        </div>
      </div>

      <Options />

      {/* <div className='choose'>
        <div className='choose1'>
          <img src='./images/icons8-news-50.png' alt='' />
          <p>News</p>
        </div>
        <div className='choose1'>
          <img src='./images/icons8-games-50.png' alt='' />
          <p>Games</p>
        </div>
        <div className='choose1'>
          <img src='./images/icons8-us-dollar-circled-50.png' alt='' />
          <p>My Bets</p>
        </div>
        <div className='choose1'>
          <img src='./images/icons8-user-24.png' alt='' />
          <p>My Profile</p>
        </div> */}
        
      {/* </div> */}
      
      
    </div>
  )
}

export default Games
