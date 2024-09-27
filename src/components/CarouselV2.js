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

  const handleMoreInfo = () => {
    alert("More info");
  }

  return (
    <div>
      <div ref={scrollRef} class="carousel carousel-center bg-transparent rounded-box w-full space-x-4 p-4">
        {carouselData.map((item) => (
          <div class="relative carousel-item h-[20rem] w-[20rem] hover:scale-[1.02] transition-all duration-500">
            <img
              src={item.image}
              class="rounded-box w-full h-full object-cover" />

            <div className="absolute p-4 inset-0 flex flex-col rounded-box items-end justify-end bg-gradient-to-t from-black to-transparent">
              <h2 className="text-white text-2xl font-bold">{item.title}</h2>
              <p className="text-white text-sm">{item.description}</p>
              <div className="flex justify-end items-end mt-4">
                <button onClick={handleMoreInfo} class="btn btn-circle bg-[#333336] hover:bg-[#333336] border-none">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="w-6 h-6 fill-[#a9a9a9] hover:fill-[#dddddd] card-cta-modal-button-small-icon card-modal-button-small-icon">
                    <path d="M17.25,8.51H11.5V2.75A1.5,1.5,0,0,0,10,1.25h0a1.5,1.5,0,0,0-1.5,1.5V8.5H2.75a1.5,1.5,0,0,0,0,3H8.5v5.75a1.5,1.5,0,0,0,1.5,1.5h0a1.5,1.5,0,0,0,1.5-1.5V11.5h5.75a1.5,1.5,0,0,0,0-3Z"></path>
                  </svg>
                </button>																			
              </div>
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
