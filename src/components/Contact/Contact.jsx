import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'


const Contact = () => {
  return (
    <section className='contact'>
        <h1>
            Contact Us
        </h1>
        <img src="/images/Group.png" alt="" />
        <main>
            <p>
            For more information on investments or enquiries, please visit our website : <br /> <Link>leverpay.io/invest </Link> <br />Or message our investor relations team at : <br /><Link>investment@leverpay.io</Link>  <br /> Or call us at : <br /><span>+2349060898687</span> 
            </p>
        </main> 
    </section>
  )
}

export default Contact