import React from 'react';
import Image from 'next/image';
import './team.css';

const Team = () => {
  return (
    <div className='hair-section-team py-8' id='crew'>
      <div className='container mx-auto'>
        <div className='hair-style-top text-center'>
          <h2 className='title mb-5' title='TRENDSETTERS.'><div className="waviy">
            <span style={{ "--i":1 }}>T</span>
            <span style={{ "--i":2 }}>R</span>
            <span style={{ "--i":3 }}>E</span>
            <span style={{ "--i":4 }}>N</span>
            <span style={{ "--i":5 }}>D</span>
            <span style={{ "--i":6 }}>S</span>
            <span style={{ "--i":7 }}>E</span>
            <span style={{ "--i":8 }}>T</span>
            <span style={{ "--i":9 }}>T</span>
            <span style={{ "--i":10 }}>E</span>
            <span style={{ "--i":11 }}>R</span>
            <span style={{ "--i":12 }}>S</span>
          </div>
          </h2>
        </div>
        <div className='lg:grid lg:grid-cols-6 justify-center lg:gap-4 gap-2 text-center'>
          <div className='team-image'>
            <Image
              src="/images/staff/GAGAN.png"
              alt="Picture of the Team"
              width={500}
              height={500}
            />
            <h3 className='team-name'>Gagan</h3>
          </div>
          <div className='team-image'>
            <Image
              src="/images/staff/MOON.png"
              alt="Picture of the Team"
              width={500}
              height={500}
            />
            <h3 className='team-name'>Moon</h3>
          </div>
          <div className='team-image'>
            <Image
              src="/images/staff/NOMI .png"
              alt="Picture of the Team"
              width={500}
              height={500}
            />
            <h3 className='team-name'>Nomi</h3>
          </div>
          <div className='team-image'>
            <Image
              src="/images/staff/SHADAZ.png"
              alt="Picture of the Team"
              width={500}
              height={500}
            />
            <h3 className='team-name'>Shadaz</h3>
          </div>
          <div className='team-image'>
            <Image
              src="/images/staff/SHAM.png"
              alt="Picture of the Team"
              width={500}
              height={500}
            />
            <h3 className='team-name'>Sham</h3>
          </div>
          <div className='team-image'>
            <Image
              src="/images/staff/ZIGGY.png"
              alt="Picture of the Team"
              width={500}
              height={500}
            />
            <h3 className='team-name'>Ziggy</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team