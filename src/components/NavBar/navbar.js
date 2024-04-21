import React, { useState } from 'react'
import "./navbar.css"
import Logo from "../../assets/logo.jpg";
import {Link} from 'react-scroll';
import search from '../../assets/search_icon.png';
import Ham from './../NavBar/Ham.png';

const Navbar = () => {
  const [ShowMenu,setShowMenu]=useState('false');
  return (
    <nav className="navbar">
        <img src={Logo} alt="Logo" className='logo'/>
        <div className='desktopMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-10} duration={500} className="desktopMenuListItem">About</Link>
        <Link  activeClass='active' to='works' spy={true} smooth={true} offset={-10} duration={500} className="desktopMenuListItem">Portfoilio</Link>
        <Link  activeClass='active' to='clients' spy={true} smooth={true} offset={-30} duration={500} className="desktopMenuListItem">Clients</Link>
        

        </div>
        <button className="desktopMenuBtn" onClick= {()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});}}>
            <img src={search} alt="" className='dektopMenuImg' />Contact Me </button>
            <img src={Ham} alt="Menu" className='mobMenu' onClick={()=>{setShowMenu(!ShowMenu)}}/>
        <div className='navMenu' style={{display:ShowMenu?'none':'flex'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" >Home</Link>
        <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-10} duration={500} className="ListItem" >About</Link>
        <Link  activeClass='active' to='works' spy={true} smooth={true} offset={-8} duration={500} className="ListItem" >Portfoilio</Link>
        <Link  activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" >Clients</Link>
        

        </div>


    </nav>
  )
}

export default Navbar