import React from 'react'
import './Footer.css'
import logo from '../Images/logo.PNG'
import facebook from '../Images/Icons/facebook.png'
import google from '../Images/Icons/google.png'
import instagram from '../Images/Icons/instagram.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div id="foot">
        <div className="footContainer" id="footContainer1">
          <img src={logo} />
        </div>
        <div className="footContainer" id="footContainer2">
          <h1>Indian Thali</h1>
          <p>Indian Food is a customized traditional indian thali ordering app which allows us to design our own thali.</p>
        </div>
        <div className="footContainer" id="footContainer3">
          <h3>Check</h3>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/menu'>Menu</Link></li>
            <li><Link to='/'>Services</Link></li>
            <li><Link to='/'>Contact Us</Link></li>
            <li><Link to='/cart'>Cart</Link ></li>
            <li><Link to='/checkout'>Checkout</Link ></li>
          </ul >
        </div >
        <div className="footContainer" id="footContainer4">
          <a href='https://facebook.com'><img src={facebook} alt="fb" className='footerSMIcons' /></a>
          <a href='https://google.com'><img src={google} alt="gl" className='footerSMIcons' /></a>
          <a href='https://instagram.com'><img src={instagram} alt="ig" className='footerSMIcons' /></a>
        </div>
      </div >
    </>
  )
}

export default Footer
