'use client'
import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import Tabs from './Tabs'
import Image from 'next/image'

const Universe = () => {
  const { scrollYProgress } = useScroll();
  const isMobile = window.matchMedia("(max-width: 600px)").matches;
  const x = isMobile ? useTransform(scrollYProgress, [0, 1], [300, -500]) : useTransform(scrollYProgress, [0, 1], [1200, -500]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [-45, 360]);
  return (
    <div className='section-hair-universe py-8'>
      <motion.div style={{ x }} className='hair-dryer-scoll'>
        <Image
          src="/images/dryer.png"
          width={300}
          height={300}
          alt="Hair Salon Dryer"
        />
      </motion.div>
      <motion.div style={{ rotate }} className='hair-knife-scoll'>
        <Image
          src="/images/scissor.png"
          width={300}
          height={300}
          alt="Hair Salon Dryer"
        />
      </motion.div>
      <div className='container mx-auto'>
        <div className='hair-style-top text-center mb-5'>
          <motion.div animate= {{ rotateX : 0 }} initial= {{rotateX : 180}} transition={{duration:1}}>
            <h2 className='title-font mb-5' title='Hair Universe'>Hair Universe</h2>
          </motion.div>
          <p className='w-3/4 mx-auto'>There’s a lot to take into account when searching for the perfect haircut. From your face shape to your preferred hair length to your hair type, it’s important to find a length and texture that works for your strands. The perfect haircut for you will flatter you and your unique hair type and make your styling process even easier.</p>
        </div>
        < Tabs />
      </div>
    </div>
  )
}

export default Universe