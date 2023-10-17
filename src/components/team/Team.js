import React from 'react'
import Image from 'next/image'

const Team = () => {
  return (
    <div className='hair-section-team py-8'>
      <div className='container mx-auto'>
        <div className='hair-style-top text-center'>
          <h2 className='title-font mb-5' title='TRENDSETTERS.'>TRENDSETTERS.
</h2>
        </div>
        <div className='columns-5 text-center'>
          <div className='team-image'>
            <Image
              src="/images/gagan.png"
              alt="Picture of the Team"
              width={500}
              height={500}
            />
            <h3 className='team-name'>Gagan</h3>
          </div>
          <div className='team-image'>
            <Image
              src="/images/moon.png"
              alt="Picture of the Team"
              width={500}
              height={500}
            />
            <h3 className='team-name'>Moon</h3>
          </div>
          <div className='team-image'>
            <Image
              src="/images/nomi.png"
              alt="Picture of the Team"
              width={500}
              height={500}
            />
            <h3 className='team-name'>Nomi</h3>
          </div>
          <div className='team-image'>
            <Image
              src="/images/shadaz.png"
              alt="Picture of the Team"
              width={500}
              height={500}
            />
            <h3 className='team-name'>Shadaz</h3>
          </div>
          <div className='team-image'>
            <Image
              src="/images/sham.png"
              alt="Picture of the Team"
              width={500}
              height={500}
            />
            <h3 className='team-name'>Sham</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team