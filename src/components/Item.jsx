import React from 'react';
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className="w-full max-w-[280px] mx-auto bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
        <Link to={`/product/${props.id}`}>
         <img
         src={props.image}
         alt={props.name}
         className="w-full h-[200px] object-contain"
         />
        </Link>
      <div className="p-4">
        <p className="text-lg font-semibold mb-2">{props.name}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-green-600">
            {props.new_price.toLocaleString()} Ksh
          </span>
          <span className="text-lg text-gray-500 line-through">
            {props.old_price.toLocaleString()} Ksh
          </span>
        </div>
      </div>
    </div>
  );
};

export default Item;
