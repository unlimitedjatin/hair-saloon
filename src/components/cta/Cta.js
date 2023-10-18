'use client'
import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './cta.css'

function Cta() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }
    ]
  };
  return (
    <div className='hair-section-cta py-8'>
    <div className='container mx-auto'>
      <div className='hair-style-top text-center'>
          <h2 className='title shine mb-5 text-white' title="There's a Better Way">There's a Better Way</h2>
          <p className='text-white'>Follow for our weekly update and be the first to know about our specials and promotions.</p>
        </div>
      <Slider {...settings}>
        <div className='insta-slide'>
          <a href='#'>
            <Image
              src="/images/midlength.jpg"
              width={200}
              height={200}
              alt="Picture of the author"
              style={{objectFit: "cover"}}
            />
          </a>
        </div>
        <div className='insta-slide'>
          <a href='#'>
            <Image
              src="/images/midlength3.jpg"
              width={200}
              height={200}
              alt="Picture of the author"
              style={{objectFit: "cover"}}
            />
          </a>
        </div>
        <div className='insta-slide'>
          <a href='#'>
            <Image
              src="/images/midlength.jpg"
              width={200}
              height={200}
              alt="Picture of the author"
              style={{objectFit: "cover"}}
            />
          </a>
        </div>
        <div className='insta-slide'>
          <a href='#'>
            <Image
              src="/images/midlength3.jpg"
              width={200}
              height={200}
              alt="Picture of the author"
              style={{objectFit: "cover"}}
            />
          </a>
        </div>
        <div className='insta-slide'>
          <a href='#'>
            <Image
              src="/images/midlength.jpg"
              width={200}
              height={200}
              alt="Picture of the author"
              style={{objectFit: "cover"}}
            />
          </a>
        </div>
        <div className='insta-slide'>
          <a href='#'>
            <Image
              src="/images/midlength3.jpg"
              width={200}
              height={200}
              alt="Picture of the author"
              style={{objectFit: "cover"}}
            />
          </a>
        </div>
       
        <div className='insta-slide'>
          <a href='#'>
            <Image
              src="/images/midlength.jpg"
              width={200}
              height={200}
              alt="Picture of the author"
              style={{objectFit: "cover"}}
            />
          </a>
        </div>
        <div className='insta-slide'>
          <a href='#'>
            <Image
              src="/images/midlength3.jpg"
              width={200}
              height={200}
              alt="Picture of the author"
              style={{objectFit: "cover"}}
            />
          </a>
        </div>
        <div className='insta-slide'>
          <a href='#'>
            <Image
              src="/images/midlength.jpg"
              width={200}
              height={200}
              alt="Picture of the author"
              style={{objectFit: "cover"}}
            />
          </a>
        </div>
        <div className='insta-slide'>
          <a href='#'>
            <Image
              src="/images/midlength3.jpg"
              width={200}
              height={200}
              alt="Picture of the author"
              style={{objectFit: "cover"}}
            />
          </a>
        </div>
      </Slider>
    </div>
    </div>
  )
}

export default Cta