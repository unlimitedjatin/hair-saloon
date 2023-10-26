import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from 'react-modal';
import './universe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

export default function Mediumhair() {
  const images = [
    ['/images/hair/straight blunt/straight blunt with curtain bang 1.jpg', '/images/hair/straight blunt/straight blunt with curtain bang 2.jpg'], // Straight Blunt Haircut with Curtain Bangs 
    ['/images/hair/hair/centre part hair.jpg', '/images/hair/hair/centre part.jpg'], // Center-parted Shoulder-Length Hair 
    ['/images/hair/simple lob/simple  bob.jpg', '/images/hair/simple lob/simple  bob 2.jpg'], // Simple Lob 
    ['/images/hair/asyemertical lob/asymmetrical-bob.jpg', '/images/hair/asyemertical lob/asymmetrical-bob 2.jpg'], // Asymmetrical Lo,
    ['/images/hair/butter fly/butter fly 1.jpg', '/images/hair/butter fly/butter fly.jpg'], // Butterfly Haircu,
    ['/images/hair/choppy bob/1-choppy-angled 1.jpg', '/images/hair/choppy bob/choppy-angled 2.jpg'], // Choppy Long Lo,
    ['/images/hair/curtain bang/curtain-bangs.jpg', '/images/hair/curtain bang/curtain-bangs 2.jpg'], // Curtain Bang,
    ['/images/hair/curly bang/curly-bang 1.jpg', '/images/hair/curly bang/curly-bang.jpg'], //   'Curly Bang,
    ['/images/hair/wolf/2-wolf-cut-on 2.jpg', '/images/hair/wolf/wolf-cut.jpg'], // Wolf Haircu,
    ['/images/hair/messy shag/messy 1.jpg', '/images/hair/messy shag/messy 2.jpg'], // Messy Sha,
  ];
  const titles = [
    'Straight Blunt Haircut with Curtain Bangs',
    'Center-parted Shoulder-Length Hair',
    'Simple Lob',
    'Asymmetrical Lob',
    'Butterfly Haircut',
    'Choppy Long Lob',
    'Curtain Bangs',
    'Curly Bangs',
    'Wolf Haircut',
    'Messy Shag',
  ];

  const descriptions = [
    'Medium Hairstyle for Women with bangs give the thin hair more thickness and bounce. This would be the best option if you’re looking for best haircuts for women this weekend for events like dates and parties.',
    'Shoulder length middle parted hairstyle gives you a more youthful look without looking childish. This can be the best haircuts for women who have non-symmetrical faces & wider face shapes to get a slimmer look.',
    'Simply lob haircut is a perfect hairstyle for all ages of women with both thin and thick hair textures. Lob haircut for women simply looks classic and universal which complements every personality. The lob is slightly choppy from the end and the hairs are just cut above the shoulder. It adds extra movement and natural bounce to your hair.',
    'An asymmetrical bob is a shorter and medium-length haircut that consists of an unevenly parted bob. This women’s haircut has one side longer hair than another side.',
    'You can enhance your natural beauty with a butterfly haircut for women. Butterfly hairstyle for women creates the illusion of short hair by layering your long hair that just falls below the shoulder. It’s the most trending and celebrity-preferred hair style for women in 2023. A butterfly haircut is the easiest way to add texture and volume to thin but medium-long hair.',
    "The choppy lob is a stylish modification of the traditional bob hairstyle. This super sleek style looks like your fingers go through the hair layers. Reddish brown and blonde hairs look stunning in this cool hair style.",
    "Bob Curtains Bang Hairstyle is alluring for every face shape with both thick & thin hairs. It enhances your facial features and adds glow to your skin. You can part off curtain bangs from the middle to try more variations of this classy women’s hairstyle.",
    "Curly bangs look effortlessly stylish and more versatile than you might think. It allows for extra volume, bounce, and shiny texture to your curly hair.",
    "The wolf haircut is a new and trendy hairstyle for women that initially originated in South Korea and got viral worldwide through TikTok. It’s a combination of two haircuts – the Mullet and the Shag. The wolf cut consists of long tresses on the back side and short strands in front. In this hairstyle, the top layers are cut shorter to add extra volume and add liveliness.",
    "Shag is the most trendy med Haircuts for Women because it can bob with any hair length or bixies. Many women also try shaggy haircuts with layers and choppy bottoms. Medium messy shag with curtain bangs is a cool and classy combination for Indian-style dresses. It’s the most preferred hairstyle in the summer season.",
  ]; // replace with your descriptions


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
    <div className="grid lg:grid-cols-5 grid-cols-3 lg:gap-4 gap-2">
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
  );
}
