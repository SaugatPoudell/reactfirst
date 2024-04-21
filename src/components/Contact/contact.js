import React from 'react'
import Logo from './logo.jpg'
import './contact.css'

const Contact = () => {
  return (
    <section id="contactPage">
        <div className="clients">
            <h1 className="contactPageTitle">My Clients </h1>
            <p className="clientDesc">
                I have had an opportunity to work with tthe follow clients and they are listed below
            </p>
            <div className="clientImgs">
                <img src={Logo} alt=''  className='clientImg' />
                <img src={Logo} alt=''  className='clientImg' />
                <img src={Logo} alt=''  className='clientImg' />
                <img src={Logo} alt=''  className='clientImg' />
            </div>
        </div>
        <div id="contact">
        <h1 className="contactPageTitle">Contact Me </h1>
        <span className="contactDesc"> Please fill our the form to contact for opportunitties</span>
        <form className='contactForm'>
            <input type='text' className='name' placeholder='Your Name' />
            <input type='text' className='email' placeholder='Your Email' />
            <textarea  className='msg'name='message'  placeholder='Your Message' />
            <button type='submit' value='send' className='submitBtn'>Submit</button>
            <div className='links'>
                <img src={Logo} alt="Facebook" className='link'/>
                <img src={Logo} alt="Youtube" className='link'/>
                <img src={Logo} alt="LinkedIn" className='link'/>
                
            </div>

        
        
        </form>


        </div>
    </section>
  )
}

export default Contact