'use client'
import React from 'react'
import Tabs from './Tabs'

const Universe = () => {
  return (
    <div className='section-hair-universe py-8'>
      <div className='container mx-auto'>
        <div className='hair-style-top text-center mb-5'>
          <h2 className='title-font mb-5' title='Hair Universe'>Hair Universe</h2>
          <p>There’s a lot to take into account when searching for the perfect haircut. From your face shape to your preferred hair length to your hair type, it’s important to find a length and texture that works for your strands. The perfect haircut for you will flatter you and your unique hair type and make your styling process even easier.</p>
        </div>
        < Tabs />
      </div>
    </div>
  )
}

export default Universe