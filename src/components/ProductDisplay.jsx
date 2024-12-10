import React, { useState, useContext } from 'react';
import { ShopContext } from '../ShopContext';
import whatsapp from '../assets/whatsapp.png';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart, cart } = useContext(ShopContext); // Access cart from context

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Trigger the modal on successful action
  const handleSuccess = () => {
    setIsModalOpen(true);
  };

  // Modal Component
  const Modal = ({ onClose, children }) => (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="p-6 bg-white rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button
          className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row gap-10 p-6 m-[20px] bg-gray-200 mx-6">
      {/* Left Section - Images */}
      <div className="w-full lg:w-1/2 flex flex-col lg:flex-row items-center gap-6">
        {/* Thumbnails */}
        <div className="flex flex-row lg:flex-col lg:justify-start gap-4">
          <img
            className="w-25 h-20 object-contain border rounded-lg"
            src={product.image}
            alt="Thumbnail 1"
          />
          <img
            className="w-25 h-20 object-contain border rounded-lg"
            src={product.image}
            alt="Thumbnail 2"
          />
          <img
            className="w-25 h-20 object-contain border rounded-lg"
            src={product.image}
            alt="Thumbnail 3"
          />
          <img
            className="w-25 h-20 object-contain border rounded-lg"
            src={product.image}
            alt="Thumbnail 4"
          />
        </div>

        {/* Main Image */}
        <div className="flex-grow">
          <img
            className="w-100 lg:w-[540px] lg:h-[580px] object-contain border rounded-lg"
            src={product.image}
            alt="Main Product"
          />
        </div>
      </div>

      {/* Right Section - Product Details */}
      <div className="w-full lg:w-1/2 space-y-6">
        {/* Product Name */}
        <h1 className="text-2xl lg:text-4xl font-bold">{product.name}</h1>

        {/* Rating */}
        <div className="flex flex-row items-start">
          <div className="flex mb-4 text-yellow-500">
            {Array.from({ length: product.rating }, (_, index) => (
              <span key={index} className="text-lg">&#9733;</span>
            ))}
          </div>
          <p className="text-gray-500">(200 reviews)</p>
        </div>

        {/* Pricing */}
        <div className="text-lg">
          <p className="line-through text-gray-500">${product.old_price}</p>
          <p className="text-2xl font-bold text-red-500">${product.new_price}</p>
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed">
          The {product.name} is designed to provide outstanding performance and reliability. With its ultra-fast
          processor and sleek design, this product is perfect for both work and play.
        </p>

       <div className='flex flex-col lg:flex-row gap-4'>
         {/* Add to Cart Button */}
        <button
          className="w-full lg:w-auto bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600"
          onClick={() => {
            addToCart(product.id);
            handleSuccess();
          }}
        >
          Add to Cart
        </button>
        {/* whatsapp inquire button */}
        <button
          className="flex flex-row items-center w-full lg:w-auto bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600"
          onClick={() => {
            window.open(`https://wa.me/+254740577196?text=I'm%20interested%20in%20your%20product%20${product.name}.%20Can%20you%20provide%20more%20information%20about%20it?`, "_blank");
          }}
        >
          Inquiry
          <img src={whatsapp} alt="" />
        </button>
       </div>

        {/* Modal */}
        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <p className="text-green-600 text-lg font-semibold mb-2">
              Item successfully added to the cart! Thank you 😊.
            </p>
          </Modal>
        )}

        {/* Features */}
       <p className="text-gray-700">
         <span className="font-semibold">Features:</span>
         <ul className="list-disc list-inside mt-2">
           {product.features.map((feature, index) => (
           <li key={index}>{feature}</li>
           ))}
          </ul>
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;

