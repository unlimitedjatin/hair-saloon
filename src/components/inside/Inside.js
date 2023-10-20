'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './inside.css'

const Inside = () => {
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true, /* set centerMode to false to show complete slide instead of 3 */
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <div className='section-inside-ethnix py-8'>
      <div className='container mx-auto'>
        <div className='hair-style-top text-center'>
          <h2 className='inside-title-font mb-5 animate-charcter' title='Inside Ethnix'>Inside Ethnix</h2>
        </div>
        <div className="lg:grid lg:grid-cols-4 grid-cols-1 gap-4">
          <div className="saloon-img">
            <img src="/images/saloon 1.jpg" alt="Image 1" />
          </div>
          <div className="saloon-img">
            <img src="/images/saloon 2.jpg" alt="Image 2" />
          </div>
          <div className="col-span-2 saloon-img">
            <img src="/images/saloon 6.jpg" alt="Image 3" />
          </div>
          <div className="col-span-2 saloon-img">
            <img src="/images/saloon 3.jpg" alt="Image 3" />
          </div>
          <div className="saloon-img">
            <img src="/images/saloon 4.jpg" alt="Image 4" />
          </div>
          <div className="saloon-img">
            <img src="/images/saloon 5.jpg" alt="Image 5" />
          </div>
        </div>
      </div>
    </div >
  )
}

export default Inside