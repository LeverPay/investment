import React from 'react'
import './Facilitate.css'
import Funding from '../Funding/Funding'

const Facilitate = () => {
  return (
    <div className='facilitate' style={{backgroundImage: 'url("/images/Rectangle.png")'}} >
        <article >
            <h1>
            Facilitate Accessible Financial Services
            </h1>
            <p>
            E-wallet that facilities financial transaction <br /> anytime and anywhere with just a mobile device.
            </p>
            <img src="/images/Group.png" alt="" />
        </article>
        <div style={{backgroundColor: '#051D57'}} className='facilitate-seamless'>
            <main>
                <div>
                <img src="/images/seam.png" alt="" />
                <h1>
                    Seamless Transactions 
                </h1>
                </div>
               
            </main>
            <main>
                <div className='logo-con'>
                    <span>
                    <img src="/images/logo.png" alt="" />
                    </span>
                </div>
                <div className='port-wallet'>
                    <img src="/images/Portfolio-5.png" alt="" />
                    <img src="/images/home-stock.png" alt="" /> 
                </div>
            </main>
        </div>
        <Funding/>
        <section className='inclusion'>
            <main>
                <div>
                <img src="/images/inc.png" alt="" />
                <h1>
                    Supporting FInancial Inclusion 
                </h1>
                </div>
            </main>
            <main>
                <img src="/images/ctg.png" alt="" />
            </main>
        </section>
    </div>
  )
}

export default Facilitate