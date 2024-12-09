import { useState, useContext } from 'react';
import { ShopContext } from '../ShopContext';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Get cartItems from context
  const { cartItems } = useContext(ShopContext);

  // Calculate the total number of items in the cart
  const totalItems = Object.values(cartItems).reduce((sum, quantity) => sum + quantity, 0);

  // Function to handle menu close when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-6 py-2 bg-gray-100 shadow-md fixed top-0 left-0 right-0 z-50">
      {/* Branding and Hamburger Icon */}
      <div className="flex flex-row justify-between items-center w-full md:w-auto">
        <Link to={"/"} className='flex flex-row items-center'>
          <img src={assets.logo} alt="logo" className="w-22 h-14" />
          <p className="text-lg font-bold text-gray-700">Shop-it</p>
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button 
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={assets.hamburgerIcon} alt="menu" className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Menu */}
      <ul className={`flex flex-col md:flex-row gap-6 text-gray-600 font-medium md:flex ${isMenuOpen ? 'flex-col' : 'hidden md:flex'}`}>
        <li
          onClick={() => { setMenu('shop'); handleLinkClick(); }}
          className={`cursor-pointer ${menu === 'shop' ? 'text-green-500 font-bold underline' : ''}`}
        >
          <Link to="/">shop</Link>
        </li>
        <li
          onClick={() => { setMenu('ex-uk'); handleLinkClick(); }}
          className={`cursor-pointer ${menu === 'ex-uk' ? 'text-green-500 font-bold underline' : ''}`}
        >
          <Link to="/ex-uk">ex-uk</Link>
        </li>
        <li
          onClick={() => { setMenu('new'); handleLinkClick(); }}
          className={`cursor-pointer ${menu === 'new' ? 'text-green-500 font-bold underline' : ''}`}
        >
          <Link to="/new">new</Link>
        </li>
        <li
          onClick={() => { setMenu('accessories'); handleLinkClick(); }}
          className={`cursor-pointer ${menu === 'accessories' ? 'text-green-500 font-bold underline' : ''}`}
        >
          <Link to="/accessories">accessories</Link>
        </li>
        <li
          onClick={() => { setMenu('phones'); handleLinkClick(); }}
          className={`cursor-pointer ${menu === 'phones' ? 'text-green-500 font-bold underline' : ''}`}
        >
          <Link to="/phones">phones</Link>
        </li>
      </ul>

      {/* Login and Cart on large screens */}
      <div className="flex flex-row items-center gap-4 md:flex hidden">
        {localStorage.getItem('auth-token') 
          ? <button 
              className="bg-green-400 text-white rounded py-2 px-4 hover:bg-green-500 text-sm md:text-base" 
              onClick={() => { localStorage.removeItem('auth-token'); }}>Logout</button>
          : <Link to="/login">
              <button 
                className="bg-green-400 text-white rounded py-2 px-4 hover:bg-green-500 text-sm md:text-base">
                Login
              </button>
            </Link>
        }

        {/* Cart Icon with Badge */}
        <Link to="/cart" className="relative flex items-center">
          <img src={assets.cart} alt="cart" className="w-8 h-8" />
          {totalItems > 0 && (
            <p className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex justify-center items-center text-xs">
              {totalItems}
            </p>
          )}
        </Link>
      </div>

      {/* Login and Cart inside Hamburger for small screens */}
      {isMenuOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          {localStorage.getItem('auth-token') 
            ? <button 
                className="bg-green-400 text-white rounded py-2 px-4 hover:bg-green-500 text-sm md:text-base" 
                onClick={() => { localStorage.removeItem('auth-token'); handleLinkClick(); }}>Logout</button>
            : <Link to="/login" onClick={handleLinkClick}>
                <button 
                  className="bg-green-400 text-white rounded py-2 px-4 hover:bg-green-500 text-sm md:text-base">
                  Login
                </button>
              </Link>
          }

          {/* Cart Icon with Badge */}
          <Link to="/cart" className="relative flex items-center" onClick={handleLinkClick}>
            <img src={assets.cart} alt="cart" className="w-8 h-8" />
            {totalItems > 0 && (
              <p className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex justify-center items-center text-xs">
                {totalItems}
              </p>
            )}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
