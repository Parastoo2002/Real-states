// components/Footer.js
import { FaTelegramPlane, FaInstagram, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    
    <footer className="bg-gray-600 text-white p-10">
      <p className='text-center pt-0 pb-7 font-bold'>Follow Us in</p>
      <div className="container mx-auto">
        <ul className="font-bold flex justify-center space-x-10">
          <li>
            <a href="https://t.me/yourtelegramlink" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-300">
              <FaTelegramPlane className="mr-1" /> Telegram
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/yourinstagramlink" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-pink-500">
              <FaInstagram className="mr-1" /> Instagram
            </a>
          </li>
          <li>
            <a href="https://twitter.com/yourtwitterlink" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-400">
              <FaTwitter className="mr-1" /> Twitter
            </a>
          </li>
          <li>
            <a href="mailto:youremail@example.com" className="flex items-center hover:text-yellow-300">
              <FaEnvelope className="mr-1" /> Email
            </a>
          </li>
          <li>
            <a href="tel:+1234567890" className="flex items-center hover:text-green-400">
              <FaPhone className="mr-1" /> Phone
            </a>
          </li>
        </ul>
      </div>
      
    </footer>
  );
};

export default Footer;

  