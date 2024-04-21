
import "./intro.css";
import React from 'react';
import bg from "./logo.png";
import logo from "./logo.jpg";
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">


        <div className="introContent">
          <span className="hello">Hello</span>
          <span className="introText">I am <span className="IntroName">Saugat</span><br/>Website Designer <br/></span>
          <span>
         <p className="introPara">I am Learning Web development</p>
          </span>
          <Link><button className="btn"><img src={logo} alt="HireMe" />Hire Me</button></Link>
        </div>
        <img src={bg} alt='Profile' className='bg'/>
    </section>
  )
}

export default Intro