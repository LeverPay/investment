import React from 'react'
import './Heropage.css'
const Heropage = () => {
    return (
        <section className='hero'>
            <article>
                <h1>
                    Invest In LeverPay: <br />
                    <span className="hero-text-span">Unlock The Future </span> 
                    Of Fintech
                </h1>
                <p>
                    Are you ready to be part of the financial technology revolution? <span className='text-span'> LeverPay</span> invites you to invest in our future success. The Fintech industry with projection to reach <span className='text-span'>$6.56 </span> <span className='billion'>billion</span> by 2027 with an average profit margin of 26.8%, we are poised for explosive growth and are seeking <span className='text-span'>  $1.1 million </span>to accelerate our journey
                </p>
            </article>

                {/* <img src="/images/Mask.png" id='hero_bg' alt="" /> */}
            <main style={{backgroundImage:'url("/images/Mask.png")'}}>
                <div>
                    <img src="/images/calendar.png" alt="" />
                </div>
                <div className='dollar'>
                    <img src="/images/expenses.png" alt="" />
                    <span>
                        <img src="/images/usd.png" alt="" />
                        <img src="/images/bal.png" alt="" />
                    </span>
                </div>
                <div>
                    <img src="/images/save.png" alt="" />
                </div>
                <div>
                <img src="/images/crypto converter.png" alt="" id='cryptoC'/> 
                </div>
            </main>
        </section>
    )
}

export default Heropage