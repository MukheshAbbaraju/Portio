import React from 'react'
import './About.css';
import Pylogo from '../assets/Pylogo.png';
import react from '../assets/react.png';
import javo from '../assets/javoo.png';
import sqlo from '../assets/Sqlo.png';
const About = () => {
  return (
    <div id= 'about' className='About'>
        <div>
          <h1 className='abme'>About me</h1>
          <p className='abme'>Hello, my name is mukhesh, i'm a 21 year old computer science student at R.V.R collage 
            and i'm a fresher as of now(21 may 2025). 
            i love to know stuff that i'm intrested in. you see my intrests and other in this, my webpage..<br /><br />
            i live in Chilakaluripet, near town to Guntur. i also love travelling, i explored a lot of places, 
            i like to live in the place where i explore.<br /><br />
            Anyway, as you see my grades aren't that impresssive. it is due to my lack of intrest in Acadamics.
            
            </p>
        </div>
        <div className='Acadamics'>
          <div className="acadamiccontent">
            <p className='question'>My CGPA <br />in collage</p>
            <h1 className='answer'>7.2</h1>
          </div>
          <div className="acadamiccontent">
            <p className='question'>My Skill in programming</p>
            <h1 className='answer'>50%</h1>
          </div>
          <div className="acadamiccontent">
            <p className='question'>Languages i know</p>
            <h2 className='answer'>English, Hindi</h2>
          </div>
          <div className="acadamiccontent">
            <p className='question'>Good at</p>
            <h2 className='answer'>Front end, Python</h2>
          </div>
        </div>
        <div>
                <h3 className='abme'>What i know</h3>
                    <ul className='whati'>
                    <li>
                       <img src={Pylogo} alt='Pylogo' className='Pylogo'/>                        
                       <p className='abme'>python</p>
                    </li>
                    <li>
                       <img src={react} alt='react' className='Pylogo'/>                
                        <p className='abme'>React</p>
                      </li>
                      <li>
                        <img src={javo} alt='java' className='Pylogo'/>
                        <p className='abme'>java</p>
                      </li>                      
                      <li>
                        <img src={sqlo} alt='Sql' className='Pylogo'/>
                        <p className='abme'>Sql</p>
                      </li>
                    </ul>
                  </div>
    </div>
        
  )
}

export default About
