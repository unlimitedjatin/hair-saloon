import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from 'react-modal';
import './universe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

Modal.setAppElement('#hair-trends');

export default function Shorthair() {
  const images = [
    ['/images/hair/long pixie/long pixe 1.jpg', '/images/hair/long pixie/long pixe 2.jpg'], // Long Pixie Haircut 
    ['/images/hair/italian bob/italian 1.jpg', '/images/hair/italian bob/italian 2.jpg'], // Italian Bob Haircut
    ['/images/hair/hair/modren mulet short 1.jpg', '/images/hair/hair/modren mullet.jpg'], // Modern Mullet with Short Haircut
    ['/images/hair/hair/bixe 1.jpg', '/images/hair/hair/bixe.jpg'], // Bixie Haircut for Women
    ['/images/spiky 1.jpg', '/images/spiky 2.jpg'], // Spiky Pixie Haircut // One Length Midi or Mid Length Hairstyle
    ['/images/hair/mohawk/mohawk hair cut 1.jpg', '/images/hair/mohawk/mohawk hair cut 2.jpg'], // Mohawk Short Haircut
    ['/images/hair/angeled bob/angled bob  1.jpg', '/images/hair/angeled bob/angled bob .jpg'], // Angled Bob Hairstyle
    ['/images/hair/hair/bob with bang.jpg', '/images/hair/hair/bob with bang 2.jpg'], // Bob with Bangs
    ['/images/hair/mullet with layer/Mullet-hairstyles 1.jpg', '/images/hair/mullet with layer/Mullet-hairstyles 2.jpg'], // Mullet Haircut with Layers
    ['/images/hair/SHORT WAVY BOB CUT/SHORT WAVY 1.jpg', '/images/hair/SHORT WAVY BOB CUT/SHORT WAVY 3.jpg'], // Short Wavy Bob
  ];
  const titles = [
    'Long Pixie Haircut',
    'Italian Bob Haircut',
    'Modern Mullet with Short Haircut',
    'Bixie Haircut for Women',
    'Spiky Pixie Haircut',
    'Mohawk Short Haircut',
    'Angled Bob Hairstyle',
    'Bob with Bangs',
    'Mullet Haircut with Layers',
    'Short Wavy Bob',
  ];

  const descriptions = [
    'These are one of the Best Haircuts for Women who have blonde hair. These haircuts look stylish on both girls and women. Long pixie hairstyle especially suits oblong and square shape face women.',
    'In the Italian bob haircut for women, your hair is cut just below the chin and above the shoulder. In this woman’s hairstyle, the bottom volume is very high and looks like an Italian bob hugging the neck. This Italian hairstyles for female adds allure to your style and personality. ',
    'Mullet is a variation of the modern Short Haircut in which the front hair is more short compared to the back hair. Side hair and front hair can be cut with style to add a modern touch. Nowadays, most mullet Hairstyles for Women are done with colored hair. This Women Hair Cut Style is then trimmed by the side that looks stylish and trendy on ladies. ',
    'You may confuse that what difference between Bixie and Pixie Hairstyles for Women. A Bixie Haircut for Women is shorter than a bob but longer than a pixie. Most face shapes look stylish with bixie Hair Cuts for Women. But, oval, heart and round faces look great in this trendy women’s hairstyle.',
    'Spiky Pixie is a trendy Short Hairstyle for Women. If you like haircuts with edgy, piecey textures, then this Ladies Haircut can be the best fit for you. In this haircut, the side and back hair are cropped shorter with longer hair at the top and front. Hair wax and gel are used to make pixie hair spiky and edgy. ',
    "In a mohawk haircut, the sides of the head are trimmed or shaved and feature a stand-up stripe of hair from the forehead to the back of the head. With colored hair mohawk hair style for women look more stylish and trendy for girls and ladies. Face shapes like oval and square look cool in these haircuts for women. ",
    "It’s a type of short-medium haircut in which hair is cut at a certain angle, making it short in the back and gradually increasing the length towards the front. This is similar to the Italian bob hairstyle. You can style angled bob hairstyles for women in many ways using different textures and volumes of hair according to your hair’s density and face shape.",
    "Bobs with bangs can really complement features of oblong and round shape faces. Women with big foreheads and long pointed chins also can try this celebrity Hairstyle for Women. Bob with bangs style looks very chic and wonderful because it makes your face smaller and highlights your natural features.",
    "The Mullet hairstyle looks extremely chic and stylish adding some layers to it. Do not add much texture and volume to the bottom otherwise, it will be wispy. Mullet is a modern-day haircut for women that gives an untamed and savage edge to your personality. It was quite popular in the 1970s and recently many Hollywood actresses adopted this timeless hairstyle.",
    "Looking for short haircuts for women that are low maintenance and look great on every occasion? No look further, a short wavy bob is the perfect hairstyle that looks great at the workplace, at night out, party, and on casual occasions. You can try feathered and textured short bob haircut with wavy curls or with bangs. It will look gorgeous in golden or blonde hair with square/long face shapes.",

  ]; // replace with your descriptions
  const modalVariants = {
    hidden: { opacity: 0, y: "-100vh" },
    visible: { opacity: 1, y: "0" },
    exit: { opacity: 0, y: "100vh" }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: false,
    autoplaySpeed: 0,
  };
  const imageSliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: false,
    autoplaySpeed: 0,
  };

  const columnSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // change this to the number of slides you want to show in desktop view
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '', images: [] });
  const sliders = useRef(titles.map(() => ({ current: null })));
  const [hovered, setHovered] = useState(titles.map(() => false));

  useEffect(() => {
    hovered.forEach((isHovered, i) => {
      if (isHovered) {
        sliders.current[i].slickPlay();
      } else {
        sliders.current[i].slickPause();
      }
    });
  }, [hovered]);

  const openModal = (content) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="grid lg:grid-cols-5 grid-cols-3 lg:gap-4 gap-2 desktop-div">
        {titles.map((title, i) => (
          <div key={i} className="column hair-style-column" onClick={() => openModal({ title, description: descriptions[i], images: images[i] })}>
            <h2 className="hair-style-title">{title}</h2>
            <div
              onMouseEnter={() => setHovered(prevHovered => prevHovered.map((val, index) => index === i ? true : val))}
              onMouseLeave={() => setHovered(prevHovered => prevHovered.map((val, index) => index === i ? false : val))}
            >
              <Slider ref={ref => (sliders.current[i] = ref)} {...settings}>
                {images[i].map((image, j) => (
                  <div key={j}>
                    <img src={image} alt="" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        ))}
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <div className="hair-styles-popup">
            <div className="popup-images">
              {modalContent.images.map((image, j) => (
                <img key={j} src={image} alt="" />
              ))}
            </div>
            <div className="popup-content">
              <h2>{modalContent.title}</h2>
              <p>{modalContent.description}</p>
            </div>
            <button onClick={closeModal}><FontAwesomeIcon className="" icon={faWindowClose} />
            </button>
          </div>
        </Modal>
      </div>
      <div className="gap-2 hair-style mobile-div">
        <Slider {...columnSliderSettings}>
          {titles.map((title, i) => (
            <div key={i} className="column hair-style-column" onClick={() => openModal({ title, description: descriptions[i], images: images[i] })}>
              <h2 className="hair-style-title">{title}</h2>
              <div
                onMouseEnter={() => setHovered(prevHovered => prevHovered.map((val, index) => index === i ? true : val))}
                onMouseLeave={() => setHovered(prevHovered => prevHovered.map((val, index) => index === i ? false : val))}
              >
                <Slider ref={ref => (sliders.current[i] = ref)} {...imageSliderSettings}>
                  {images[i].map((image, j) => (
                    <div key={j}>
                      <img src={image} alt="" />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          ))}
        </Slider>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <div className="hair-styles-popup">
            <div className="popup-images">
              {modalContent.images.map((image, j) => (
                <img key={j} src={image} alt="" />
              ))}
            </div>
            <div className="popup-content">
              <h2>{modalContent.title}</h2>
              <p>{modalContent.description}</p>
            </div>
            <button onClick={closeModal}><FontAwesomeIcon className="" icon={faWindowClose} /></button>
          </div>
        </Modal>
      </div>
    </>
  );
}
