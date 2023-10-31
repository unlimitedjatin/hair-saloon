import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './social.css'

const SocialLinks = () => {
  return (
    <div className='social-link'>
      <a href="https://www.instagram.com/your_username/" target="_blank" rel="noopener noreferrer" className='social-icon social-insta'>
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://wa.me/918197789440" target="_blank" rel="noopener noreferrer" className='social-icon social-wa'>
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
      <a href="tel:your_number" className='social-icon social-phone'>
        <FontAwesomeIcon icon={faPhone} size="2x" />
      </a>
    </div>
  );
};

export default SocialLinks;
