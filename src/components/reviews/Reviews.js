'use client'
import { useEffect, useRef } from 'react';
import TestimonialSlider from './TestimonialSlider';
import './reviews.css';
import { gsap } from 'gsap';

const testimonials = [
  {
    rating: 5,
    text: "I had an amazing experience at this salon! Sam worked his magic and gave me the exact fresh look I wanted. Super polite, friendly, and incredibly talented! Nomi's hair color suggestion was spot-on; she really knows her stuff and made the process enjoyable. Kudos to Manager Chetan for excellent customer service—polite and professional. I'll definitely be back!",
    author: 'elen roy',
    image: '/images/review-1.png',
  },
  {
    rating: 4,
    text: "I am a regular customer  there , it's been a few months that i am having my hair cut and beard shape They always suggest the best style for you Even the people are very polite The prize is reasonable too",
    author: 'Naveen kumara KN',
    image: '/images/review-2.png',
  },
  {
    rating: 4,
    text: "The use of excellent personnel, first-rate services, and premium products. You'll surely be happy regardless of the cost. Mr. Ali performs the keratin treatment, and I am incredibly glad and satisfied with his job. He has a lot of attention and patience, and there is no doubt that he is a true professional. Excellent work.",
    author: 'Kavita Khangar',
    image: '/images/review-3.png',
  },
  {
    rating: 4,
    text: "The staffs are so friendly and dedicated to their work. Especially, Deepika, she was the one who did the services for me. Deepika did a really great job, she is really committed to her work. A really great salon in Marathahalli for both men and women. Really happy about the service and hospitality.",
    author: 'Hanan Harish',
    image: '/images/review-4.png',
  },
  {
    rating: 4,
    text: 'This is the only salon that I trust to properly deal with my personal care. Their extensive knowledge and skill are truly unmatched. Sangeeta’s waxing technic is so amazing that I got very less pain during waxing. She also makes sure no hair is left behind. She removes the ingrown hair with threading which can’t be pulled off in the waxing. I haven’t seen such a dedicated beautician in my life. Her skill level matches her confidence level! The staff is friendly, warm, and cooperative. They greet me with happy faces all the time.',
    author: 'RAGINI ZAPATE',
    image: '/images/review-5.png',
  },
];

const Reviews = () => {
  const textRef = useRef();

  useEffect(() => {
    gsap.fromTo(textRef.current,
      { strokeDashoffset: 1000 },
      { strokeDashoffset: 0, duration: 4, ease: "power1.inOut", repeat: -1 }
    );
  }, []);


  return (
    <div className='section-reviews py-8'>
      <div className='container mx-auto'>
        <div className="signature-animation">
          <h2 className='title review-title text-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 100">
              <text ref={textRef} x="50%" y="50%" dy=".35em" textAnchor="middle" stroke="#000" fill="none" strokeWidth="2" strokeDasharray="1000">
                REVIEWS
              </text>
            </svg>
          </h2>
        </div>
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </div>
  );
};

export default Reviews;
