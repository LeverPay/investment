import React from 'react'
import './service.css'

const Service = () => {
    return (
        <section className='service'>
            <h1 className="service-h1"> 
                These are why you should be <br /> excited...
            </h1>

            <p className="service-p">
                At <span className="lever">Leverpay,</span>  we envision a world where payments are seamless, secure, and accessible to everyone.
                Our mission is to make this vision a reality by providing innovative  payment solutions that prioritizes
                user convenience by leveraging digital technology to provide local and cross-border payment while enabling
                businesses to spread their tentacles globally in order to attain new revenue heights.
            </p>

            <div className="shape">
                <img className='shape-1' src='./images/bg.png' alt="" />

            </div>

            <div className="started">
               <h1 className='started-h1'>
                 Get started
                 </h1>
                <span className='visit'>
                    visit: https://leverpay.io/invest
                </span><br />
                <img src="/images/Group.png" alt="" />
                <div className="shapex">
            <img className='shaper' src='./images/big.png' alt="" />
            </div>
            <div className='why2'>
                <h1 className="service-h1">
                    These are why you should be <br /> excited...
                </h1><br />
                <img src="/images/Group.png" alt="" />
            </div>
            </div>

            
        </section>
    )

}

export default Service