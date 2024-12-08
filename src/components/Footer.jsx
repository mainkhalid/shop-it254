import logo from '../assets/logo.png'
import instagram from '../assets/instagram.png'
import whatsapp from '../assets/whatsapp.png'
import twitter from '../assets/twitter.png'


const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-gray-300'>
        <div className='flex items-center py-4'>
            <img className='w-22 h-16' src={logo} alt="" />
            <p className=' text-2xl font-bold'>shop-it</p>
        </div>
        <ul className='flex cursor-pointer text-gray-500 gap-4'>
            <li className=' hover:text-green-500 font-bold'>Company</li>
            <li className=' hover:text-green-500 font-bold'>Products</li>
            <li className=' hover:text-green-500 font-bold'>About</li>
            <li className=' hover:text-green-500 font-bold'>Contact</li>
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