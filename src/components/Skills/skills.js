import React from 'react'
import './skills.css'
import pp from './pp.png';
import ps from './ps.png';


const Skills = () => {
  return (
    <>    <section id='skills'>         
        <span className="skillTitle"> What i Do</span>
            <span className="skillDesc">I am learning web development from certain time and i also posses basic skill in Adobe Premier Pro and Adobe Photo
            Shop and its is really useful skill to have id you are intrested in photos and videos.</span>
<div className="skillBars">
    <div className="skillBar">
    <img src={pp} alt='PremierPro'  className='skillBarImg'/>
    <div className="skillBarText">
        <h2>VideoEditing</h2>
        <p>I can edit simple bit of videos in premier pro and can add music from my experience. I use the video in youutbe</p>
        </div>
    </div>
</div>
<div className="skillBars">
    <div className="skillBar">
    <img src={ps} alt='PremierPro'  className='skillBarImg'/>
    <div className="skillBarText">
        <h2>PhotoEditing</h2>
        <p>I can edit and tweak a little bit on photos on Photoshop.The Above picture of mine is also edited from Photosop</p>
        </div>
    </div>
</div>
</section>

</>
   
  )
}

export default Skills