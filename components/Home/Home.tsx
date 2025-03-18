import React from 'react'
import Hero from './Hero/Hero'
import Destination from './Destination/Destination'
import Hotel from './Hotel/Hotel'
import ChooseUs from './ChooseUs/ChooseUs'
import Review from './Reviews/Review'
import News from './News/News'
import Newsletter from './Newsletter/Newsletter'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Destination />
      <Hotel />
      <ChooseUs />
      <Review />
      <News />
      <Newsletter />
    </div>
  )
}

export default Home