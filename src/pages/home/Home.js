import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Banner from '../../components/banner/Banner'
import Services from '../../components/services/Services'
import Portfolio from '../../components/portfolio/Portfolio'
import Hire from '../../components/hire/Hire'
import Footer from '../../components/footer/Footer'
import Feedback from '../../components/feedback/Feedback'

function Home() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Services/>
      <Portfolio/>
      <Hire/>
      <Feedback/>
      <Footer/>
    </>
  )
}

export default Home