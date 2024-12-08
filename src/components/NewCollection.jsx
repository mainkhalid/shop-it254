import React from 'react'
import { useEffect, useState } from 'react'
import Item from './Item'


const NewCollection = () => {
    const [new_collection, setNew_Collection] = useState([]);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/newcollections`)
            .then((res) => res.json())
            .then((data) => setNew_Collection(data));
    }, []);

  return (
    <div className="p-6 bg-gray-200">
        <h1  className="text-3xl font-bold text-center mb-6">New Collection</h1>
        <hr className="mb-6 border-gray-300" />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-4'>
            {new_collection.map((item, i) => {
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
            })}
        </div>
    </div>
  )
}

export default NewCollection