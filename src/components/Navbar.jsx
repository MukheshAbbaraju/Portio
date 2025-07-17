import React from 'react'
import NavLogo from '../assets/NavLogo.png'

const Navbar = () => {
  return (
    <div class='navbar'>
      <img src={NavLogo} alt='Hola' className='NavLogo' />
        <ul>
            <li><a href="#home" onClick={(e) => {
              e.preventDefault();
              window.location.reload();
            }} >Home</a></li>
            <li><a href="#about" onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }} >About</a></li>
            <li><a href="#works" onClick={(e) => {
              e.preventDefault();
              document.getElementById('personal')?.scrollIntoView({ behavior: 'smooth' });
            }} >Personal</a></li>
            <li><a href="#contact" onClick={(e) => {
              e.preventDefault();
              document.getElementById('touchme')?.scrollIntoView({ behavior: 'smooth' });
            }} >Touch Me</a></li>

        </ul>
    </div>
  )
}

export default Navbar
