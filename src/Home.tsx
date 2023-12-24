import React from 'react'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import blurCarouselMixed1 from './dist/carousel/blur/blurCarouselMixed1.png'
import blurCarouselMixed2 from './dist/carousel/blur/blurCarouselMixed2.png'

import carouselMixed1 from './dist/carousel/carouselMixed1.png'
import carouselMixed2 from './dist/carousel/carouselMixed2.png'

import ProductsList from './logic/ProductsLogic/Products.tsx'

const Home = () => {
  type Slide = {
    image: any
    blurImage: any
  }

  const slides: Slide[] = [
    {
      image: carouselMixed1,
      blurImage: blurCarouselMixed1,
    },
    {
      image: carouselMixed2,
      blurImage: blurCarouselMixed2,
    },
  ]

  return (
    <div className='home'>
      <div className='home__container'>
        <div className='home__body'>
          <div className='carousel__container'>
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              showStatus={false}
              showThumbs={false}
              showArrows={true}
              stopOnHover={true}
              showIndicators={true}>
              {slides.map((slide, index) => (
                <div key={index}>
                  <div
                    className='blur-load'
                    style={{ backgroundImage: `url(${slide.blurImage})` }}>
                    <img
                      src={slide.image}
                      loading='lazy'
                      alt={`Slide ${index + 1}`}
                    />
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          <ProductsList />
        </div>
      </div>
    </div>
  )
}

export default Home
