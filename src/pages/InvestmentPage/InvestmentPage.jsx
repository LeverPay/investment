import React from 'react'
import TopNav from '../../components/TopNav/TopNav'
import Heropage from '../../components/TopNav/Heropage/Heropage'
import './InvestmentPage.css'
import Service from '../../components/Service/Service'
import Growth from '../../components/Growth/Growth'
import Facilitate from '../../components/Facilitate/Facilitate'
import Qualities from '../../components/Qualities/Qualities'
import Patners from '../../components/Patners/Patners'
import Contact from '../../components/Contact/Contact'
import Flow from '../../components/Flow/Flow'
import Footer from '../../components/Footer/Footer'

const InvestmentPage = () => {
  return (
    <div className='page'>
        <TopNav/>
        <Heropage/>
        <Service />
        <Growth/>
        <Facilitate/>
        <Qualities/>
        <Patners/>
        <Contact/>
        <Flow/>
        <Footer/>
    </div>
  )
}

export default InvestmentPage