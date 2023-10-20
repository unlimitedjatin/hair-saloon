import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './reviews.css'

const TestimonialSlider = ({ testimonials }) => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "20px",
        speed: 500,
        // nextArrow: <FontAwesomeIcon icon={faArrowRight} />,
        // prevArrow: <FontAwesomeIcon icon={faArrowLeft} />,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
        {testimonials.map((testimonial, index) => {
            const words = testimonial.text.split(' ');
            const displayText = words.length > 30 ? words.slice(0, 30).join(' ') + '...' : testimonial.text;
            return (
                <div key={index} className='review-col'> {/* Add key here */}
                    <div className='review'>
                        <div className='user-star'>
                            <img src={testimonial.image} alt={testimonial.author} className="author-image" />
                            <h3>{testimonial.author}</h3>
                        </div>
                        <div className="rating">
                            {[...Array(testimonial.rating)].map((star, i) => (
                                <FontAwesomeIcon key={i} icon={faStar} />
                            ))}
                        </div>
                        <p>{displayText}</p>
                        {words.length > 30 && <a href="https://www.google.com/maps/place/Ethnix+unisex+hair+design+studio-+Marathalli/@12.954544,77.6953963,17z/data=!4m14!1m5!8m4!1e1!2s106723194695833464245!3m1!1e1!3m7!1s0x3bae130dff219cdd:0x6b76155fedf27256!8m2!3d12.9545388!4d77.6979712!9m1!1b1!16s%2Fg%2F11h12syjtp?hl=en-US&entry=ttu" target="_blank" rel="noopener noreferrer">Read more</a>}
                    </div>
                </div>
            );
        })}
    </Slider>
    );
};

export default TestimonialSlider;
