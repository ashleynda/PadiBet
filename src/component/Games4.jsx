import React from 'react'
import './Games4.css'
import image from '../images/image.png'
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'

const Games4 = () => {
  return (
    <div>
      <header>
        <h2>Premier league</h2>
        <img src={image} />
      </header>
      <div>
        <p>date&time</p>
        <img src={image1} />
        <img src={image2} />
      </div>

      <div>
        <img src={image3} />
      </div>

   
      
    </div>
  )
}

export default Games4
