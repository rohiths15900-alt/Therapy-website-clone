import Appointment from '@/components/Appointment'
import Block3 from '@/components/Block3'
import Foot from '@/components/Foot'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Hero2 from '@/components/Hero2'
import Navbar from '@/components/Navbar'
import Our from '@/components/Our'
import Running from '@/components/Running'
import Special from '@/components/Special'
import Swing from '@/components/Swing'
import Together from '@/components/Together'
import React from 'react'


const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Hero2/>
      <Block3/>
      <Running/>
      <Our/>
      <Swing/>
      <Together/>
      <Special/>
      <Appointment/>
      <Footer/>
      <Foot/>
    </div>
  )
}

export default page