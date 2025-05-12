import React from 'react';
import img1 from '../assets/retina1.jpg';
import img2 from '../assets/retina2.jpg';

const ImageGallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {[img1, img2, img1, img2].map((img, idx) => (
        <img key={idx} src={img} alt={`Retina ${idx}`} className="rounded-lg shadow-md hover:scale-105 transition-transform" />
      ))}
    </div>
  );
};

export default ImageGallery;
