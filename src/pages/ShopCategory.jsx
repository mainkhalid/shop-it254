import React, { useContext } from 'react';
import { ShopContext } from '../ShopContext';
import drop_down from '../assets/drop_down.png';
import Item from '../components/Item';

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);

  return (
    <div className="px-4 py-10 mt-8">
      {/* Banner Section */}
      <div className="w-full mb-8">
        <img
          className="block w-full h-[30vh] object-cover rounded-lg shadow-lg"
          src={props.banner}
          alt="Category Banner"
        />
      </div>

      <div className='bg-gray-100 p-4'>
        {/* Header Section */}
       <div className="flex flex-wrap justify-between items-center mb-6">
         <p className="text-gray-500 text-lg font-semibold">
          <span className="text-gray-800">Showing 1-10</span> out of 40 products
         </p>
         <div className="flex items-center gap-2 text-gray-700">
          <span className="text-sm font-medium">Sort by</span>
          <img src={drop_down} alt="Dropdown" className="w-5 h-5" />
         </div>
        </div>

       {/* Product Grid Section */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {all_products.map((item, i) => {
            if (props.category === item.category) {
              return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
             );
            }
           return null;
          })}
        </div>
        <div className='flex justify-center mt-4'>
          <button className='bg-transparent border border-green-400 text-gray-500 hover:bg-green-100 rounded-full py-2 px-6 text-lg font-bold transition duration-200 cursor-pointer'>Explore more</button>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
