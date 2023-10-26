'use client'
import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import './inside.css'
import { Audiowide } from 'next/font/google';

const audioWide = Audiowide({ subsets: ['latin'], weight: ['400'] });
const data = [
  { img: "/images/saloon 1.jpg", alt: "Image 1" },
  { img: "/images/saloon 2.jpg", alt: "Image 2" },
  { img: "/images/head massage.jpg", alt: "Image 3" },
  { img: "/images/saloon 6.jpg", alt: "Image 4" },
  { img: "/images/saloon 3.jpg", alt: "Image 5" },
  { img: "/images/saloon 4.jpg", alt: "Image 6" },
  { img: "/images/saloon 5.jpg", alt: "Image 7" },
  { img: "/images/nail.jpg", alt: "Image 8" }
];
// Hook for animating when in view
const useAnimateOnInView = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return { ref, controls };
};

const Inside = () => {
  const { ref: parentRef, controls: parentControls } = useAnimateOnInView();

  return (
    <div id='inside-etx' className='section-inside-ethnix py-8'>
      <div className='container mx-auto'>
        <div className='hair-style-top text-center'>
          <h2 className={`${audioWide.className} inside-title-font mb-5 animate-charcter`} title='Inside Ethnix'>Inside Ethnix</h2>
        </div>
        <motion.div
          className="lg:grid lg:grid-cols-5 grid-cols-1 gap-4"
          ref={parentRef}
          animate={parentControls}
          initial="hidden"
          variants={{
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
            hidden: { opacity: 0 },
          }}
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                visible: { x: 0 },
                hidden: { x: -100 }
              }}
              transition={{ duration: 0.5 }}
              className={`bg-contain bg-center saloon-img ${index === 3 || index === 4 ? 'lg:col-span-2' : ''}`}
            >
              <img src={item.img} alt={`Image ${index + 1}`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div >
  )
}

export default Inside