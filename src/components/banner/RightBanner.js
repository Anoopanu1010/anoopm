import React, { useState, useEffect, useRef } from 'react';
import { bannerImg } from '../../assets';

const RightBanner = () => {
  const [image, setImage] = useState('');
  const imageRef = useRef(null);

  useEffect(() => {
    const convertAssetToBlobURL = async () => {
      try {
        const response = await fetch(bannerImg);
        const blob = await response.blob();
        const blobURL = URL.createObjectURL(blob);
        setImage(blobURL);
      } catch (error) {
        console.error('Error converting asset to blob URL:', error);
      }
    };

    convertAssetToBlobURL();

    // Cleanup function to revoke the object URL when component unmounts
    const cleanup = () => {
      const currentImageRef = imageRef.current;
      if (currentImageRef && currentImageRef.src) {
        URL.revokeObjectURL(currentImageRef.src);
      }
    };

    return cleanup;
  }, []); // Empty dependency array to run effect only once

  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      {image && <img
        ref={imageRef}
        className="w-[240px] h-[320px] lgl:w-[380px] lgl:h-[520px] z-10"
        src={image}
        alt="Banner"
      />}
    </div>
  );
}

export default RightBanner;
