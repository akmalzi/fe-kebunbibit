import { useState, useEffect } from "react";

function AutoImageChanger(){
  const images = [
    "/assets/navigasi/popup-detail/icon/rusa1-icon.png",
    "/assets/navigasi/popup-detail/icon/rusa2-icon.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-4">
      <div className="relative w-[100px] h-[100px]">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-1000 opacity-100"
          key={currentIndex}
        />
      </div>
    </div>
  );
};

export default AutoImageChanger;
