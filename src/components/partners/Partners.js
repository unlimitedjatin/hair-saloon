'use client'
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const textVariants = {
  hidden: { opacity: 0 },
  visible: (custom) => ({
    opacity: 1,
    transition: {
      delay: custom * 0.2
    }
  })
};

function Partners() {
  const text = "Incomparable Partners";
  const [chars, setChars] = useState([]);
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    setChars(text.split(""));
    if (inView) {
      controls.start("visible");
    }
  }, [text, inView]);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:2000,
  };
  return (
    <div id="class" className='section-hair-partners py-8'>
      <div className='container mx-auto'>
        <div className='hair-style-top text-center'>
          <h2 className='title mb-5 text-dark' title="Incomparable Partners" ref={ref}>
            {chars.map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={textVariants}
                initial="hidden"
                animate={controls}
              >
                {char}
              </motion.span>
            ))}
          </h2>
        </div>
        <div className='flex flex-wrap justify-center gap-4 desktop-div'>
          <div className='partner-img lg:w-1/6 w-2/6'>
            <Image
              src="/images/STE.jpg"
              alt="Picture of the Partner"
              width={200}
              height={200}
            />
          </div>
          <div className='partner-img lg:w-1/6 w-2/6'>
            <Image
              src="/images/mk.jpg"
              alt="Picture of the Partner"
              width={200}
              height={200}
            />
          </div>
          <div className='partner-img lg:w-1/6 w-2/6'>
            <Image
              src="/images/blue sky.jpg"
              alt="Picture of the Partner"
              width={200}
              height={200}
            />
          </div>
          <div className='partner-img lg:w-1/6 w-2/6'>
            <Image
              src="/images/rica.jpg"
              alt="Picture of the Partner"
              width={200}
              height={200}
            />
          </div>
          <div className='partner-img lg:w-1/6 w-2/6'>
            <Image
              src="/images/kevin.jpg"
              alt="Picture of the Partner"
              width={200}
              height={200}
            />
          </div>
          <div className='partner-img lg:w-1/6 w-2/6'>
            <Image
              src="/images/loreal.jpg"
              alt="Picture of the Partner"
              width={200}
              height={200}
            />
          </div>
          <div className='partner-img lg:w-1/6 w-2/6'>
            <Image
              src="/images/ola plex.jpg"
              alt="Picture of the Partner"
              width={200}
              height={200}
            />
          </div>
          <div className='partner-img lg:w-1/6 w-2/6'>
            <Image
              src="/images/shcok.jpg"
              alt="Picture of the Partner"
              width={200}
              height={200}
            />
          </div>
          <div className='partner-img lg:w-1/5 w-2/6'>
            <Image
              src="/images/skyn.jpg"
              alt="Picture of the Partner"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="mobile-div">
          <Slider {...settings}>
            <div className='partner-img lg:w-1/6 w-2/6'>
              <Image
                src="/images/STE.jpg"
                alt="Picture of the Partner"
                width={200}
                height={200}
              />
            </div>
            <div className='partner-img lg:w-1/6 w-2/6'>
              <Image
                src="/images/mk.jpg"
                alt="Picture of the Partner"
                width={200}
                height={200}
              />
            </div>
            <div className='partner-img lg:w-1/6 w-2/6'>
              <Image
                src="/images/blue sky.jpg"
                alt="Picture of the Partner"
                width={200}
                height={200}
              />
            </div>
            <div className='partner-img lg:w-1/6 w-2/6'>
              <Image
                src="/images/rica.jpg"
                alt="Picture of the Partner"
                width={200}
                height={200}
              />
            </div>
            <div className='partner-img lg:w-1/6 w-2/6'>
              <Image
                src="/images/kevin.jpg"
                alt="Picture of the Partner"
                width={200}
                height={200}
              />
            </div>
            <div className='partner-img lg:w-1/6 w-2/6'>
              <Image
                src="/images/loreal.jpg"
                alt="Picture of the Partner"
                width={200}
                height={200}
              />
            </div>
            <div className='partner-img lg:w-1/6 w-2/6'>
              <Image
                src="/images/ola plex.jpg"
                alt="Picture of the Partner"
                width={200}
                height={200}
              />
            </div>
            <div className='partner-img lg:w-1/6 w-2/6'>
              <Image
                src="/images/shcok.jpg"
                alt="Picture of the Partner"
                width={200}
                height={200}
              />
            </div>
            <div className='partner-img lg:w-1/5 w-2/6'>
              <Image
                src="/images/skyn.jpg"
                alt="Picture of the Partner"
                width={200}
                height={200}
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Partners
