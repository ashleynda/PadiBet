import React from 'react'
import './Bet1.css'
import Options from './Options'
import image from '../images/image.png'
import jpg from '../images/.jpg'

const Bet1 = () => {
  return (
    <div className='bet-page'>
      <div className='top'>
        <h3>My Bets</h3>
        <img className='arr' src={image} />
      </div>
      <div className='hist'>
        <button className='slip'>Bets Slip</button>
        <button className='slip'>Bet History</button>
      </div>

      <div className='mid'>
        <img src={jpg} width={280}/>
        <h3>bet-response</h3>
      </div>

      <div className='place1'>
        <button className='place'>Place a bet</button>
        <Options />
      </div>


    </div>   
  )
}

export default Bet1
// import React, { Component } from 'react';
// import styles from './Bet1.css'; // Import css modules stylesheet as styles
// // import './another-stylesheet.css'; // Import regular stylesheet

// class Bet1 extends Component {
//   render() {
//     // reference as a js object
//     return <button className={styles.error}>Error Button</button>;
//   }
// }
