import React from 'react'
import './Growth.css'

const Growth = () => {
    return (
        <section className='growth'>
            <div className='left'>
                <main>
                    <article>
                        <div>
                            <img src="/images/path.png" alt="" />
                            <img className='div-icon' src="/images/menu.png" alt="" />
                        </div>
                        <div>
                            <h1>
                                Minimal Investment
                            </h1>
                            <p>
                                You don’t need a fortune to be part of Leverpay exciting journey The minimum investment amount is #5000, payable in either Naira or Stablecoin. We believe in inclusivity, and your investment no matter the size, is vital to our success.
                            </p>
                        </div>
                    </article> 
                    <article>
                        <img className='roi-img' src="/images/graph.png" alt="" />
                    </article>
                </main>
                <main className='roi'>
                    <article>
                        <div>
                            <img src="/images/path.png" alt="" />
                            <img className='div-icon' src="/images/wallet-check.png" alt="" />
                        </div>
                        <div>
                            <h1>
                                Return Of Investment
                            </h1>
                            <p>
                                Investors stand to gain substantial returns as Leverpay grows. We anticipate impressive ROI of as we expand our user base, increase revenue streams, and secure our position as a market leader.
                            </p>
                        </div>
                    </article>
                    <article>
                        <img className='roi-img' src="/images/Group 7.png" alt="" />
                    </article>
                </main>
            </div>

            <div className='right' > 
                <main>
                    <article>
                        <div>
                            <img src="/images/path.png" alt="" />
                            <img className='div-icon' src="/images/chart.png" alt="" />
                        </div>
                        <div>
                            <h1>
                                Projected Growth
                            </h1>
                            <p>
                                Our robust business model and strategic initiatives are projected to skyrocket our valuation to $80 million within the next 3 years. Your investment now can reap significant rewards as we ascend to new heights in the fintech industry.
                            </p>
                        </div>
                    </article>
                    <article>
                        <img className='roi-img' src="/images/g8.png" alt="" />
                    </article>
                </main>
                <main>
                    <article>
                        <div>
                            <img src="/images/path.png" alt="" />
                            <img className='div-icon' src="/images/judge.png" alt="" style={{width:'80px'}} />
                        </div>
                        <div>
                            <h1>
                                Invest Today,
                                Secure Tomorrow
                            </h1>
                            <p>
                                Don’t miss out on the opportunity to become an early Venture Capitalist in our startup.
                                Invest with us today and watch your money grow exponentially.

                            </p>
                        </div>
                    </article>
                    <article>
                    </article>
                </main>
            </div>


        </section>
    )
}

export default Growth