import React from 'react'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

import ProductsList from './logic/ProductsLogic/Products.tsx'

const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        <div className='home__body'></div>
        <ProductsList />
      </div>
    </div>
  )
}

export default Home
