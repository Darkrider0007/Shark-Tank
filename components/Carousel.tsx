"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface CarouselItem {
  imageUrl: string;
  heading?: string;
  paragraph?: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [activeItem, setActiveItem] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((prevItem) => (prevItem + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div
      id="indicators-carousel"
      className="relative w-full bg-gray-800/25 text-white rounded-lg"
      data-carousel="static"
    >
      <div className="relative items-center mt-5 h-64 md:h-96 overflow-hidden rounded-lg">
        {items.map((item, index) => (
          <div
            key={index}
            className={`${
              index === activeItem ? 'duration-700 ease-in-out flex justify-center items-center gap-4 ' : 'hidden'
            }`}
            data-carousel-item={index === activeItem ? 'active' : undefined}
          >
            <div className='flex flex-col gap-5 items-center md:flex-row justify-between w-1/2 mt-3'> 
              <div>
                {item.heading && (
                  <h1 className="text-4xl font-bold mb-2">{item.heading}</h1>
                )}
                {item.paragraph && <p className="text-xl mb-4">{item.paragraph}</p>}
              </div>
              {/* <div className='m-5'> */}
                <Image
                  src={item.imageUrl}
                  className="rounded-lg md:ml"
                  alt={`Slide ${index + 1}`}
                  height={300}
                  width={400}
                />
              {/* </div> */}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === activeItem ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            aria-current={index === activeItem}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => setActiveItem(index)}
          ></button>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-2 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={() =>
          setActiveItem((prev) => (prev - 1 + items.length) % items.length)
        }
      >
        <span className='text-3xl'>
          {"<"}
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={() => setActiveItem((prev) => (prev + 1) % items.length)}
      >
        <span className='text-3xl'>
          {">"}
        </span>
      </button>
    </div>
  )
};

export default Carousel;
