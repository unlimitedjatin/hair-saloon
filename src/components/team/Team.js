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
        <div className='lg:grid lg:grid-cols-5 grid-cols-3 justify-center gap-4 text-center'>
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