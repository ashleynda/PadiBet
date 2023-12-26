import React from 'react'
import './Options.css'

const Options = () => {
  return (
    <div>
        <div className='choose'>
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
            </div>
        </div>
    </div>
  )
}

export default Options
