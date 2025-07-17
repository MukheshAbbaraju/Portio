import React from 'react'
import './personal.css';
import Batman from '../assets/Batman.png'
import RAJINI from '../assets/RAJINI.png'
const Body = () => {
  return (
    <div id='personal' >
      <div className='Heading'>
          <h1>Personal Information</h1>
          <p className='persotxt'>personally im a enthusiast of everything. i liked photography, 
            now i like Cricket again(Retired fan, i was, again born, cause SRH played well).<br /><br />
            i like watching Movies, now i'm bored of sitting for straight 3hrs and watch a movie, but in my prime, i saw multiple videos</p>
      </div>
      <div className='bodies'>
        <div className='Body'>
            <img src={Batman} alt='batman' className='Bat'/>
            <p className='bodyText'>Hello there!! my name is mukhesh.. <br /> and i'm a batman fan.</p>
        </div>
        <div className='Body'>
            <img src={RAJINI} alt='RAJINI' className='Bat'/> 
            <p className='bodyText'>And Also for Rajini</p>
        </div>
      </div>    
    </div>
  )
}

export default Body
