import React from 'react';
import { Link } from 'react-router-dom'; 
import arrow from '../assets/arrow_icon.png';

const Breadcrumb = (props) => {
  const { product } = props;

  return (
    <div className="flex items-center gap-2 font-bold text-sm text-gray-500 cursor-pointer mt-[72px] px-2">
      <Link to="/" className="hover:underline">
        Home
      </Link>
      <img src={arrow} alt="" />
      <Link to="/" className="hover:underline">
        Shop
      </Link>
      <img src={arrow} alt="" />
      <p  className="hover:underline">
        {product.category}
      </p>
      <img src={arrow} alt="" />
      <span>{product.name}</span>
    </div>
  );
};

export default Breadcrumb;
