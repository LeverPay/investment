import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div> 
            <span>
                <img src="/images/ng.svg.png" alt="" />
                Nigeria 
                {/* <img src="/images/arrd.png" alt="" /> */}
            </span>
            <ul>
                <li><Link><img src="/images/twitter logo.png" alt="" /></Link></li>
                <li><Link><img src="/images/telegram logo.png" alt="" /></Link></li>
                <li><Link><img src="/images/facebook logo.png" alt="" /></Link></li>
                <li><Link><img src="/images/youtube logo.png" alt="" /></Link></li>
                <li><Link><img src="/images/discord.png" alt="" /></Link></li>
                <li><Link><img src="/images/instagram logo.png" alt="" /></Link></li>
                <li><Link><img src="/images/linkedin logo.png" alt="" /></Link></li>
            </ul>
        </div>
        <hr />
        <div className='bottom'>
            <span>
                <img src="/images/.png" alt="" /> Leverpay
            </span>
            <ul>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
                <li>Cookie Policy</li>
                <li>Merchant service agreement</li>
                <li>Payment protection promise</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer