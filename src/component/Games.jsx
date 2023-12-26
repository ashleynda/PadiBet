import React from 'react'
import './Games.css'
import Options from './Options'

const Games = () => {
  return (
    <div className='games-container'>
      <div className='header1'>
        <img className='hamburger' src="./images/Vector1.png" alt="" />
        <div className='notify'>
          <p>$</p>
          <img src="./images/bi_wallet-fill.png" alt="" />
          <img src="./images/ant-design_notification-filled.png" alt="" />
        </div>
      </div>

      <div className='sports'>
        <div className='spot'>
          <img className='spot1' src="./images/bx_football-removebg-preview.jpg" alt="" />
          <p>soccer</p>
        </div>
        <div className='spot'>
          <img className='spot1' src="./images/bx_basketball-removebg-preview.jpg" alt="" />
          <p>basketball</p>
        </div>
        <div className='spot'>
          <img className='spot1' src="./images/icon-park-solid_badminton-removebg-preview.jpg" alt="" />
          <p>badminton</p>
        </div>
        <div className='spot'>
          <img className='spot1' src="./images/fluent_sport-hockey-24-filled-removebg-preview.jpg" alt="" />
          <p>hockey</p>
        </div>
        <div className='spot'>
          <img className='spot1' src="./images/icon-park-solid_boxing-removebg-preview.jpg" alt="" />
          <p>boxing</p>
        </div>
        <div className='spot'>
          <img className='spot1' src="./images/ci_tennis-match-removebg-preview.jpg" alt="" />
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
          <img src="./images/sliders-h.png" alt="" />
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
