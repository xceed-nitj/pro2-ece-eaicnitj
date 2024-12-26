import  { useState ,useEffect} from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
//import { RxDotFilled } from 'react-icons/rx';
import "./hero.css"
import SecNavbar from './SecNavbar';

import nitjlogo from '../../public/logo.png'
import ieeelogo from '../../public/ieee.svg'

function HeroSection() {

  function SubmitPaperButton(props) {
    return (
      <div className='md:mr-5 flex flex-col justify-center'>
                  <a href={props.destination}
                    className="inline-flex justify-between items-center py-1 px-1 pr-4  text-sm text-accent-700 bg-accent-100 rounded-full 2xl:text-lg"
                    role="alert">
                      <span className="text-xs bg-accent-600 rounded-full text-white px-1.5 py-2 mr-3 font-medium 2xl:px-[0.8rem] 2xl:py-4 ">
                          <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="22"><path d="M80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18q30 0 58.5 3t55.5 9l-70 70q-11-2-21.5-2H400q-71 0-127.5 17T180-306q-9 5-14.5 14t-5.5 20v32h250l80 80H80Zm542 16L484-282l56-56 82 82 202-202 56 56-258 258ZM400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm10 240Zm-10-320q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Z" className=' fill-accent-50 2xl:h-24' /></svg>
                      </span>
                      <span className="text-sm font-semibold 2xl:text-lg ">
                          Submit paper
                      </span>
                      <svg
                        className="ml-2 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"></path>
                      </svg>
                  </a>
              </div>
    )
  }

  function CollegeName(props){
    return(
      <div className="flex flex-row items-center bg-accent-900  px-2 rounded-full 2xl:px-4">
              <div className=' bg-accent-900 rounded-full p-2 2xl:p-4'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m600-120-240-84-186 72q-20 8-37-4.5T120-170v-560q0-13 7.5-23t20.5-15l212-72 240 84 186-72q20-8 37 4.5t17 33.5v560q0 13-7.5 23T812-192l-212 72Zm-40-98v-468l-160-56v468l160 56Zm80 0 120-40v-474l-120 46v468Zm-440-10 120-46v-468l-120 40v474Zm440-458v468-468Zm-320-56v468-468Z" className=' fill-accent-200'/></svg>
              </div>
              <span className=' text-xs mr-1 font-medium text-accent-100 md:p-0 p-3 2xl:text-lg'>
                {props.name}
              </span>
            </div>
    )
  }

  function Gallery(props) {
    
    const slides = props.slides;
  
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
    }, [currentIndex, nextSlide]);

    return (
      <div className="md:w-[80%] flex-auto pt-10 mt-10 md:block hidden">
        <div className="h-4/6 m-auto  relative group ">
          <div className="slider">
            <div className="card"></div>
            <div
              style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
              className="image"
            ></div>
          </div>
          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[42%] -translate-x-0  left-5 text-2xl rounded-full p-2 bg-black/30 text-white hover:bg-white hover:text-black  cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[42%] -translate-x-0  right-5 text-2xl rounded-full p-2 bg-black/30 text-white hover:bg-white hover:text-black  cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`text-3xl cursor-pointer ${
                  currentIndex === slideIndex ? "text-accent-500" : ""
                }`}
              >
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  function TextSection() {
    return (
      <>
      {/* Date Section */}
      <div className='flex flex-col justify-center w-full'>
        <div className="md:ml-8 flex flex-row gap-2 sm:mb-3 mb-0 md:text-left text-center justify-center md:justify-normal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path
              d="M580-240q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"
              className=" opacity-60"
            />
          </svg>
          <h3 className=" font-bold opacity-60">5th - 7th June 2025</h3>
        </div>
      </div>

      {/* Text Section */}
      <h1 className="xl:text-5xl md:text-3xl sm:text-2xl text-md md:ml-8 font-bold sm:text-left text-center text-accent-900 2xl:text-6xl">
        IEEE Technically Sponsored <br /> International Conference on
        <br />
        <span className="md:text-5xl xl:text-6xl sm:text-4xl text-3xl font-bold text-justify text-accent-950 xl:mt-4 2xl:text-7xl">
          Electronics, AI and Computing
        </span>
        
      </h1>
      <div className="inline-block flex justify-center text-center p-3 w-full md:text-left">
        <span className="font-large text-accent-700 2xl:text-lg  font-bold">
        &quot;Innovating for a Sustainable and Connected Future&quot;
        </span>
      </div>
      </>
    )
  }

  function Logos() {

    const logoStyle = "h-full sm:h-[150%] object-contain"

    return (
      <div className='flex gap-10 h-[7vh] justify-center align-center'>
        <img src={nitjlogo} className={logoStyle} alt="NITJ_LOGO" />
        <img src={ieeelogo} className={logoStyle} alt="IEEE_LOGO" />
      </div>
    )
  }

  return (
    <>
      {/* <div className="h-full Hero pattern flex md:flex-row flex-col sm:mt-[52px] mt-[40px]">
        <div className="container lg:max-w-7xl p-4 h-full flex items-center justify-evenly mx-auto md:mb-5 flex-col xl:gap-2 xl:mt-6 xl:ml-10 xl:-mr-14 xl:pr-0 ">

          <Logos/>

          <TextSection/>

          <div className='box-border md:mt-2 md:mt-10 mt-1 flex md:flex-row flex-col md:gap-0 sm:justify-between md:ml-7 xl:justify-start 2xl:pt-4 justify-center gap-2'>
            <SubmitPaperButton destination="https://cmt3.research.microsoft.com/EAIC2025"/>
            <CollegeName name='Dr. B. R. Ambedkar National Institute of Technology, Jalandhar' />            
          </div>

        </div>

        <Gallery slides={[
          {url: '/ece1.jpeg',},
          {url: '/ece2.jpg',},
          {url: '/ece3.jpeg',},
          {url:'/ece4.jpg',},]} />

      </div>
      <div className="flex flex-col justify-center">
          <SecNavbar />
      </div> */}

      <div className='h-[100svh] pattern sm:pt-[52px] pt-[10px]'>
        <div className='h-full box-border flex flex-row'>

          {/* left div */}
          <div className='h-full w-full sm:w-[50%] p-5 flex flex-col pb-[70px] justify-evenly items-center'>
            <Logos/>
            <TextSection/>
            <div className='box-border md:mt-2 md:mt-10 mt-1 flex md:flex-row flex-col md:gap-0
             sm:justify-between md:ml-7 xl:justify-start 2xl:pt-4 justify-center gap-2 hidden sm:flex'>
              <SubmitPaperButton destination="https://cmt3.research.microsoft.com/EAIC2025"/>
              <CollegeName name='Dr. B. R. Ambedkar National Institute of Technology, Jalandhar' />            
            </div>
            
            <div className='sm:hidden w-full'>
              <SubmitPaperButton destination="https://cmt3.research.microsoft.com/EAIC2025"/>
            </div>
            <div className='sm:hidden'>
              <CollegeName name='Dr. B. R. Ambedkar National Institute of Technology, Jalandhar' />            
            </div>
          </div>


          {/* right div */}
          <div className='Hero h-full w-[50%] sm:flex flex-col justify-center items-center hidden'>
          <Gallery slides={[
            {url: '/ece1.jpeg',},
            {url: '/ece2.jpg',},
            {url: '/ece3.jpeg',},
            {url:'/ece4.jpg',},]} />
          </div>

        </div>

        <div className="flex flex-col justify-center">
          <SecNavbar />
        </div>

      </div>
        
    </>
  );
}


export default HeroSection;
