import React from 'react'
import Image from 'next/image'

function Partners() {
  return (
    <div className='section-hair-partners py-8'>
      <div className='container mx-auto'>
        <div className='hair-style-top text-center'>
          <h2 className='title-font mb-5 text-dark' title="Incomparable Partners">Incomparable Partners</h2>
        </div>
        <div className='flex flex-wrap justify-center gap-4'>
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
      </div>
    </div>
  )
}

export default Partners