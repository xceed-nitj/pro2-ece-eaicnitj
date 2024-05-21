import  { useState ,useEffect} from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
function Slider() {
    
  const slides = [
    {
      url: '/side-1.webp',
    },
    {
      url: '/main.webp',
    }
    ,
    {
      url: '/side-2.webp',
    },

    {
      url:'/side-3.webp',
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    // Set up an interval to call nextSlide every 15 seconds
    const intervalId = setInterval(() => {
      nextSlide();
    }, 2500);

    // Clean up the interval when the component is unmounted or on dependency change
    return () => clearInterval(intervalId);
  }, [currentIndex]);
  return (
    <div className="container space-y-8 lg:max-w-7xl mx-auto px-8 sm:px-10 lg:px-8 md:mb-5 ">

    <div className='h-[420px] w-full md:h-[520px] lg:h-[680px]  m-auto py-16  relative group'>
        <h2 className="text-4xl font-sans font-bold text-center text-gray-950 mb-5">
                       Image   Gallery </h2>
                       
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0  left-5 text-2xl rounded-full p-2 bg-black/30 text-white hover:bg-white hover:text-black  cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0  right-5 text-2xl rounded-full p-2 bg-black/30 text-white hover:bg-white hover:text-black  cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-3xl cursor-pointer ${
                currentIndex === slideIndex ? 'text-accent-500' : ''
              }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
    </div>

  );
}

export default Slider;