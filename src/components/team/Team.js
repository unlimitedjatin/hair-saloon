import React from 'react'
import Image from 'next/image'

const Team = () => {
  return (
    <div className='hair-section-team py-8'>
      <div className='container mx-auto'>
        <div className='hair-style-top text-center'>
          <h2 className='title-font mb-5' title='Built and Maintained by the best TRENDSETTERS.'>Built and Maintained by the best TRENDSETTERS.
</h2>
        </div>
        <div className='columns-5'>
          <div className='team-image'>
            <Image
              src="/images/gagan.png"
              alt="Picture of the Team"
              width={500}
              height={500}
            />
          </div>
          <div className='team-image'>
            <Image
              src="/images/moon.png"
              alt="Picture of the Team"
              width={500}
              height={500}
            />
          </div>
          <div className='team-image'>
            <Image
              src="/images/nomi.jpg"
              alt="Picture of the Team"
              width={500}
              height={500}
            />
          </div>
          <div className='team-image'>
            <Image
              src="/images/shadaz.jpg"
              alt="Picture of the Team"
              width={500}
              height={500}
            />
          </div>
          <div className='team-image'>
            <Image
              src="/images/shadaz.jpg"
              alt="Picture of the Team"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team