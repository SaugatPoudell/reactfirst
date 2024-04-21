import React from 'react';
import './works.css';
import Logo from './logo.jpg';

const Works = () => {
  return (
    <section id='works'>
        <h2 className="workstitle">My Portfolio</h2>
        <span className="worksDesc"> I take pride to paying attention to smallest details and working with it</span>
        <div className="worksImgs">
            <img src={Logo} alt='' className='worksImg'/>
            <img src={Logo} alt='' className='worksImg'/>
            <img src={Logo} alt='' className='worksImg'/>
            <img src={Logo} alt='' className='worksImg'/>
            <img src={Logo} alt='' className='worksImg'/>
            <img src={Logo} alt='' className='worksImg'/>
        </div>
        <button className="workBtn">See More</button>
    </section>
  )
}

export default Works