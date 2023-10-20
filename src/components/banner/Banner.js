import React from 'react'
const Banner = () => {
  return (
    <div>
      <video className='desktop-div' width="100%" height="240" autoPlay muted loop>
  <source src="/videos/salon web 1.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
      <video className='mobile-div' width="100%" height="240" autoPlay muted loop>
  <source src="/videos/salon-mobile.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

    </div>
  )
}

export default Banner