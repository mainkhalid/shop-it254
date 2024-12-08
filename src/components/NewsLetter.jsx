// import React from 'react'

// const NewsLetter = () => {
//   return (
//     <div className='width=[65%] flex flex-col  items-center height=[40vh] justify-center m-auto mb-8'>
//         <h1 className='text-2xl font-bold text-gray-500'>Get Exclussive Offer On Your Email</h1>
//         <p className='text-sm text-gray-500'>Subscribe to our newletter and stay up to date</p>
//         <div>
//             <input
//             className='p-2 w-[300px] mr-2 focus:outline-none border
//              border-green-300 rounded'
//              type="email" 
//              placeholder='Your Email ' />
//             <button className='bg-transparent border border-green-400 text-gray-500 hover:bg-green-100 rounded py-2 px-6 text-lg font-bold transition duration-200 cursor-pointer'>Subscribe</button>
//         </div>
//     </div>
//   )
// }

// export default NewsLetter
import React from 'react';

const NewsLetter = () => {
  return (
    <div className="w-[65%] flex flex-col items-center h-[40vh] justify-center m-auto mb-8">
      <h1 className="text-2xl font-bold text-gray-500">
        Get Exclusive Offer On Your Email
      </h1>
      <p className="text-sm text-gray-500">
        Subscribe to our newsletter and stay up to date
      </p>
      <div className="mt-4">
        <input
          className="p-2 w-[300px] mr-2 focus:outline-none border border-green-300 rounded"
          type="email"
          placeholder="Your Email"
        />
        <button className="bg-transparent border border-green-400 text-gray-500 hover:bg-green-100 rounded py-2 px-6 text-lg font-bold transition duration-200 cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
