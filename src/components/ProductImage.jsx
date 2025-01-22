import React from "react";

const ProductImage = ({ src, alt, className }) => {
  const handleError = (e) => {
    e.target.src = "/default-placeholder.png"; // Path to fallback image
  };

  return <img src={src} alt={alt} onError={handleError} className={className} />;
};

export default ProductImage;
