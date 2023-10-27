import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from 'react-modal';
import './universe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';


export default function Longhair() {
  const images = [
        ['/images/hair/long layer/long layer 2.jpg', '/images/hair/long layer/long layer.jpg'], // Long Layers
        ['/images/hair/vintage/vintage 1.jpg', '/images/hair/vintage/vintage 2.jpg'], // Vintage Curl'
        ['/images/hair/updo/updo.jpg', '/images/hair/updo/updo 2.jpg'], // Updo'
        ['/images/hair/mess with blayage/mess with balayge 1.jpg', '/images/hair/mess with blayage/mess with balayge.jpg'], // Messy Shag with Balayage'
        ['/images/hair/swampy/Swoopy Layers haircut.jpg', '/images/hair/swampy/Swoopy Layers haircut 2.jpg'], // Swampy Layers
        ['/images/hair/multi layer/multi-layered.jpg', '/images/hair/multi layer/multi-layered 1.jpg'], // Multi-Layered
        ['/images/hair/sharp layerd/sharp layered.jpg', '/images/hair/sharp layerd/sharp-layered 1.jpg'], // Sharp layers
        ['/images/hair/heavy layerd/heavy layered 1.jpg', '/images/hair/heavy layerd/heavy layered 2.jpg'], // Heavy Layered
    ];
    const titles = [
        'Long Layers',
        'Vintage Curl',
        'Updo',
        'Messy Shag with Balayage',
        'Swampy Layers',
        'Multi-Layered',
        'Sharp layers',
        'Heavy Layered',
    ];

    const descriptions = [
        "It’s a modern haircutting style for women that remove volume from an internal length as well as adds a curve to the bottom of the hair. Long layers hairstyles have different face-framing bangs to make you look more stylish and fresh. Long layers look more professional and cute than any other women’s haircuts.",
        "The vintage curl hairstyle was very popular among Hollywood actresses during the 1950s as Victory rolls. It can be identified by voluminous curls or braids that are either on top of the head or one side of the head.",
        "Updo is a traditional Indian hairstyle for women that can be worn every day at work, at home, or on occasion. Updo hairstyle will enhance your face glow and add a touch of tradition to stand you apart from the crowd. It consists of a sophisticated low bun or locked hair in a round knot.",
        "Messy Shag haircuts look ultra trendy with balayage, giving it extra movement and bounce. This haircut for women uses layers and texture to create an effortless messy shag that looks fantastic.",
        "Swampy long layered hair looks phenomenal with traditional Indian clothing and jeans-top. Swampy layered hairstyles for women are the best option that is perfect for both casual and formal occasions.",
        "Long hair Multi-layered hairstyle is perfect if you want to add movement and texture to your youthful hair. In this haircut for women, stylish trimmed long tresses appear more stylish and multi-layers add extra volume to your thin hair.",
        "A sharp layered haircut is an excellent choice for women who have thick, hard, and sharp hair. It’s very trendy and quite versatile for women. It is one of the Best Hairstyles for Women to appear your face in shape, sharp, and look like a model.",
        "Heavy layered haircuts for women look absolutely stunning when you left your hair open or do a ponytail with half. The best option for ladies with oval or round face shapes who wanna dress in traditional Indian outfits.",
    ]; // replace with your descriptions

  const modalVariants = {
    hidden: { opacity: 0, y: "-100vh" },
    visible: { opacity: 1, y: "0" },
    exit: { opacity: 0, y: "100vh" }
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
      <div className="grid lg:grid-cols-4 grid-cols-3 lg:gap-4 gap-2 desktop-div">
        {titles.map((title, i) => (
          <div key={i} className="column hair-style-column" onClick={() => openModal({ title, description: descriptions[i], images: images[i] })}>
            <h2 className="hair-style-title">{title}</h2>
            <div
              onMouseEnter={() => setHovered(prevHovered => prevHovered.map((val, index) => index === i ? true : val))}
              onMouseLeave={() => setHovered(prevHovered => prevHovered.map((val, index) => index === i ? false : val))}
            >
              <Slider ref={slider => (sliders.current[i] = slider)} {...imageSliderSettings}>
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
