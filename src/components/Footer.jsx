import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import instagram from '../assets/instagram.png';
import whatsapp from '../assets/whatsapp.png';
import twitter from '../assets/twitter.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='flex flex-col justify-center items-center bg-gray-300'>
      <div className='flex items-center py-4'>
        <Link to={'/'} className='flex flex-row items-center' onClick={scrollToTop}>
          <img src={logo} alt="logo" className="w-16 h-16 rounded-full object-cover" />
          <div className="flex flex-col ml-3">
          <p className="text-lg font-bold text-gray-700">ANNEX</p>
         <span className="text-sm text-red-600">Computers</span>
  </div>
        </Link>
      </div>
      <ul className='flex cursor-pointer text-gray-500 gap-4'>
        <li className='hover:text-green-500 font-bold'>
          <Link to={'/'} onClick={scrollToTop}>Shop</Link>
        </li>
        <li className='hover:text-green-500 font-bold'>
          <Link to={'/policy'} onClick={scrollToTop}>Policy</Link>
        </li>
        <li className='hover:text-green-500 font-bold'>
          <Link to={'/about'} onClick={scrollToTop}>About</Link>
        </li>
        <li className='hover:text-green-500 font-bold'>
          <Link to={'/contact'} onClick={scrollToTop}>Contact</Link>
        </li>
      </ul>
      <div className='flex items-center gap-8'>
        <div className='cursor-pointer py-2'>
          <img src={instagram} alt="Instagram"
          onClick={() => window.open('https://www.instagram.com/tshiroann/', '_blank')} />
        </div>
        <div className='cursor-pointer py-2'>
          <img src={twitter} alt="Twitter" />
        </div>
        <div className='cursor-pointer py-2'>
          <img src={whatsapp} alt="WhatsApp" 
          onClick={() => window.open('https://wa.me/+254740577196', '_blank')}/>
        </div>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <hr className='w-[80%] border border-green-500' />
        <p>Copyright @2025 - All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
