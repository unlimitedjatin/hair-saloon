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
          <h2 className='title shine mb-5 text-white' title="There's a Better Way">There&apos;s a Better Way</h2>
          <p className='text-white'>Follow for our weekly update and be the first to know about our specials and promotions.</p>
        </div>
      <Slider {...settings}>
        <div className='insta-slide'>
          <a href='https://instagram.com/ethnix_premium_salon_etx?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr' target='_blank'>
            <Image
              src="/images/insta/baibitha .jpg"
              width={200}
              height={200}
              alt="Picture of the Customer"
              style={{objectFit: "cover"}}
            />
          </a>
        </div>
        <div className='insta-slide'>
          <a href='https://instagram.com/ethnix_premium_salon_etx?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr' target='_blank'>
            <Image
              src="/images/insta/blue.jpg"
              width={200}
              height={200}
              alt="Picture of the Customer"
              style={{objectFit: "cover"}}
            />
          </a>
        </div>
        <div className='insta-slide'>
          <a href='https://instagram.com/ethnix_premium_salon_etx?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr' target='_blank'>
            <Image
              src="/images/insta/chess cover.jpg"
              width={200}
              height={200}
              alt="Picture of the Customer"
              style={{objectFit: "cover"}}
            />
          </a>
        </div>
        <div className='insta-slide'>
          <a href='https://instagram.com/ethnix_premium_salon_etx?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr' target='_blank'>
            <Image
              src="/images/insta/dum cover.jpg"
              width={200}
              height={200}
              alt="Picture of the Customer"
              style={{objectFit: "cover"}}
            />
          </a>
        </div>
        <div className='insta-slide'>
          <a href='https://instagram.com/ethnix_premium_salon_etx?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr' target='_blank'>
            <Image
              src="/images/insta/enjami cover.jpg"
              width={200}
              height={200}
              alt="Picture of the Customer"
              style={{objectFit: "cover"}}
            />
          </a>
        </div>
        <div className='insta-slide'>
          <a href='https://instagram.com/ethnix_premium_salon_etx?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr' target='_blank'>
            <Image
              src="/images/insta/green cover.jpg"
              width={200}
              height={200}
              alt="Picture of the Customer"
              style={{objectFit: "cover"}}
            />
          </a>
        </div>
        <div className='insta-slide'>
          <a href='https://instagram.com/ethnix_premium_salon_etx?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr' target='_blank'>
            <Image
              src="/images/insta/MADURI.jpg"
              width={200}
              height={200}
              alt="Picture of the Customer"
              style={{objectFit: "cover"}}
            />
          </a>
        </div>
        <div className='insta-slide'>
          <a href='https://instagram.com/ethnix_premium_salon_etx?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr' target='_blank'>
            <Image
              src="/images/insta/sep color chiri.jpg"
              width={200}
              height={200}
              alt="Picture of the Customer"
              style={{objectFit: "cover"}}
            />
          </a>
        </div>
        <div className='insta-slide'>
          <a href='https://instagram.com/ethnix_premium_salon_etx?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr' target='_blank'>
            <Image
              src="/images/insta/veena.jpg"
              width={200}
              height={200}
              alt="Picture of the Customer"
              style={{objectFit: "cover"}}
            />
          </a>
        </div>
        <div className='insta-slide'>
          <a href='https://instagram.com/ethnix_premium_salon_etx?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr' target='_blank'>
            <Image
              src="/images/insta/yelow chub.jpg"
              width={200}
              height={200}
              alt="Picture of the Customer"
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