import React from 'react'
import arrow from '../assets/arrow_icon.png'
const Breadcrum = (props) => {
    const {product}= props;
  return (
    <div className='flex items-center gap-2 font-bold text-sm text-gray-500 cursor-pointer mt-[72px] px-2'>
        Home<img src={arrow} alt="" /> shop <img src={arrow} alt="" /> {product.category} <img src={arrow} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum