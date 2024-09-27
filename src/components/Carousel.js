import React, { useRef } from 'react';
import LeftArrow from '../icons/left-arrow.svg';
import RightArrow from '../icons/right-arrow.svg';

export default function Carousel({ carouselData }) {
  const scrollRef = useRef(null);

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div ref={scrollRef} class="carousel carousel-center bg-transparent rounded-box w-full space-x-4 p-4">
        {carouselData.map((item) => (
          <div class="relative carousel-item h-[40rem] w-[20rem] hover:scale-[1.02] transition-all duration-500">
            <img
              src={item.image}
              class="rounded-box w-full h-full object-cover" />

            <div className="absolute p-4 inset-0 flex flex-col items-start justify-start">
              <h2 className="text-white text-2xl font-bold">{item.title}</h2>
              <p className="text-white text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <div className="p-2">
          <button onClick={handlePrev} class="btn btn-circle bg-gray-300 hover:bg-gray-200 border-none">
            <img src={LeftArrow} alt="left-arrow" className="w-8 h-8" />
          </button>
        </div>
        <div className="p-2">
          <button onClick={handleNext} class="btn btn-circle bg-gray-300 hover:bg-gray-200 border-none">
            <img src={RightArrow} alt="right-arrow" className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
}
