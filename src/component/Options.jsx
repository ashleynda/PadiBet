import React from 'react'
import './Options.css'
import icons8 from '../images/icons8-news-50.png'
import icons9 from '../images/icons9-games-50.png'
import icons10 from '../images/icons10-us-dollar-circled-50.png'
import icons11 from '../images/icons11-user-24.png'


const Options = () => {
  return (
    <div>
        <div className='choose'>
            <div className='choose1'>
            <img src={icons8} alt='' />
            <p>News</p>
            </div>
            <div className='choose1'>
            <img src={icons9} alt='' />
            <p>Games</p>
            </div>
            <div className='choose1'>
            <img src={icons10} alt='' />
            <p>My Bets</p>
            </div>
            <div className='choose1'>
            <img src={icons11} alt='' />
            <p>My Profile</p>
            </div>
        </div>
    </div>
  )
}

export default Options
