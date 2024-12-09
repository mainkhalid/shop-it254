import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import instagram from '../assets/instagram.png'
import whatsapp from '../assets/whatsapp.png'
import twitter from '../assets/twitter.png'


const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-gray-300'>
        <div className='flex items-center py-4'>
            <Link to={"/"}
             className='flex flex-row items-center'>
             <img src={logo} alt="logo" className="w-22 h-14" />
              <p className="text-lg font-bold text-gray-700">Shop-it</p>
            </Link>
        </div>
        <ul className='flex cursor-pointer text-gray-500 gap-4'>
            <li className=' hover:text-green-500 font-bold'>Company</li>
            <li className=' hover:text-green-500 font-bold'>Products</li>
            <li 
             className=' hover:text-green-500 font-bold'>
             <Link to={'/about'}>About</Link>
            </li>
            <li
             className=' hover:text-green-500 font-bold'>
             <Link to={'/contact'}>Contact</Link>
            </li>
        </ul>
        <div className='flex items-center gap-8'>
            <div className='cursor-pointer py-2'>
                <img src={instagram} alt="" />
            </div>
            <div className='cursor-pointer py-2'>
                <img src={twitter} alt="" />
            </div>
            <div className='cursor-pointer py-2'>
                <img src={whatsapp} alt="" />
            </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
            <hr className='w-[80%] bg-gray-500 border outline-none'/>
            <p>Copyright @2024- All right reserved</p>
        </div>
    </div>
  )
}

export default Footer