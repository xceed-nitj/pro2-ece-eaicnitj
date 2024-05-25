import  { useState ,useEffect} from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
//import { RxDotFilled } from 'react-icons/rx';
import "./hero.css"
import SecNavbar from './SecNavbar';
// import axios from "axios";
// import formatDate from "../utility/formatDate";
// import getEnvironment from "../getenvironment";

// function heroSection(props) {
//   const confid = props.confid;
//   const [data, setData] = useState(null);

//   const apiUrl = getEnvironment();

//   useEffect(() => {
//     const animation = () => {
//       let tl = gsap.timeline();
//       let tl2 = gsap.timeline();
//       let tl3 = gsap.timeline();
//       let tl4 = gsap.timeline();
//       let tl5 = gsap.timeline();
//       let tween = tl.fromTo(
//         ".main",
//         {
//           x: 600,
//           y: 600,
    
//         },
//         {
//           x: 0,
//           y: 0,
        
//           duration: 3.5,
//           stagger: 7,
//           opacity: 1,
//           ease: "sine.out",
//         }
//       );

//       let tween2 = tl2.fromTo(
//         ".main",
//         { x: 0, y: 0, zIndex: -1 },
//         {
//           x: -600,
//           y: -600,
//           duration: 3.5,
//           stagger: 7,
//           opacity: 0,
//           delay: 7,
//           ease: "sine.out",
//         }
//       );

//       let tween3 = tl3.fromTo(
//         ".main2",
//         {
//           opacity: 0,
//           x: 600,
//           y: 600,
         
//         },
//         {
//           x: 0,
//           y: 0,
//           duration: 3.5,
//           stagger: 7,
//           opacity: 1,
//           ease: "sine.out",
//           delay: 21,
         
//         }
//       );

//       let tween4 = tl4.to(".main2", {
//         x: -600,
//         y: -600,
//         duration: 3.5,
//         stagger: 7,
//         opacity: 1,
//         delay: 28,
//         ease: "sine.out",
//       });

//       let tween5 = tl5.to("main", { opacity: 0, duration: 0.5 });

//       tween.seek(0);
//       tween2.seek(0);
//       tween5.play();
//       tween3.seek(0);
//       tween4.seek(0);
//     };

//     animation();
//     setInterval(() => {
//       animation();
//     }, 49000);
//   }, []);

//   useEffect(() => {
//     window.scrollTo(0, 0);

//     axios
//       .get(`${apiUrl}/conferencemodule/home/conf/${confid}`, {
//         withCredentials: true,
//       })
//       .then((res) => {
//         setData(res.data);
//         console.log(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, [apiUrl, confid]);

//   return (
//     <>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center max-w-7xl mx-auto lg:px-8 px-3 mt-[58px] lg:mt-[2px]">
//         <div className="flex flex-col items-center md:items-start justify-center py-5 gap-8 ">
//           <p className="lg:text-4xl md:text-4xl text-4xl leading-tight lg:leading-none tracking-wide font-bold text-accent-500 text-center  ">
//             {data ? data.confName : " "}{" "}
//           </p>

//           <p className="lg:text-3xl md:text-3xl text-3xl leading-tight lg:leading-none tracking-wide font-bold text-accent-400 text-center my-3 mx-auto">
//             {data ? data.shortName : " "}{" "}
//           </p>

//           <h3 className=" mx-auto font-bold text-center tracking-wide  lg:text-xl">
//             Role of Chemical Engineering towards Sustainable Development and
//             Atmanirbhar bharat
//           </h3>

//           <h4 className="text-accent-500 mx-auto font-bold text-center md:text-left text-md ">
//             {" "}
//             {data
//               ? formatDate(data.confStartDate) +
//                 " to " +
//                 formatDate(data.confEndDate)
//               : " "}
//           </h4>
//           <p className=" mx-auto">
//             <p className=" mx-auto font-semibold text-center  ">Organized by</p>
//             <h4 className=" mx-auto font-bold  text-xl text-center md:text-center ">
//               <p> Indian Institute of Chemical Engineers</p>
//               <p> Doaba Regional Centre</p> <p>NIT Jalandhar</p>
//             </h4>
//           </p>
//           <div className="flex flex-col md:flex-row   gap-4 items-center">
//             <div className="flex flex-col justify-center items-center max-w-[300px]">
//               <p className="  font-semibold text-center md:text-left ">
//                 77<sup>th </sup>Annual Session
//               </p>
//               <img src="/logo77th.jpg" className=" w-16 md:w-20 " alt="" />

//               <p className=" font-bold text-center ">
//                 Indian Institute Of Chemical Engineers
//               </p>
//             </div>
//             <div className="flex flex-col justify-center  max-w-[300px] items-center">
//               <p className=" font-semibold text-center md:text-left ">
//                 Organized At
//               </p>
//               <img src="/logo.png" className=" w-16 md:w-20 " alt="" />

//               <p className=" font-bold text-center ">
//                 Dr. B R Ambedkar National Institute of Technology, Jalandhar
//               </p>
//             </div>
//           </div>
//           {/* <section className="mt-8 lg:mt-14 text-stone-900 text-center md:text-left">
//             <h1 className="lg:text-5xl text-3xl  font-bold">
//               IIChE ChemCon 2024
//             </h1>
//             <div className="space-y-4 mt-6 lg:mt-10">
//               <p className="lg:text-xl text-lg font-medium">


//               </p>

//             </div>
//           </section> */}
//           <a
//             href="#"
//             className="mt-3 mx-auto flex items-center justify-center whitespace-nowrap rounded-md border w-fit border-transparent bg-accent-500 px-6 py-2 text-base font-semibold text-white shadow-sm hover:bg-accent-700"
//           >
//             Register
//           </a>
//         </div>

//         <div className="relative h-full w-full p-[0%] min-h-[20rem] overflow-hidden ">
//           <div className="h-full w-full relative">
//             <div className="opacity-0 absolute main  grid grid-cols-4 grid-rows-4 gap-2 md:gap-5 w-full h-full ">
//               <div className="relative col-span-4 row-span-3 flex justify-center rounded-lg">
//                 <div className="absolute w-full h-full   z-30  rounded-lg" />
//                 <img
//                   src="/main.webp"
//                   className={`bg-black  object-cover h-full object-left lg:rounded-xl rounded-lg`}
//                   alt=""
//                 />
//               </div>
//             </div>
//             <div className="opacity-0 absolute main  grid grid-cols-4 grid-rows-4 gap-2 md:gap-5 w-full h-full ">
//               <div className="  relative col-span-4 row-span-3 flex justify-center rounded-lg">
//                 <div className="absolute w-full h-full   z-20  rounded-lg" />
//                 <img
//                   src="/side-1.webp"
//                   className={`bg-black  object-cover h-full object-left lg:rounded-xl rounded-lg`}
//                   alt=""
//                 />
//               </div>
//             </div>

//             <div className="opacity-0 absolute main  grid grid-cols-4 grid-rows-4 gap-2 md:gap-5 w-full h-full ">
//               <div className="  relative col-span-4 row-span-3 flex justify-center rounded-lg">
//                 <div className="absolute w-full h-full  z-10  rounded-lg" />
//                 <img
//                   src="/side-2.webp"
//                   className={`bg-black  object-cover h-full object-left lg:rounded-xl rounded-lg`}
//                   alt=""
//                 />
//               </div>
//             </div>

//             <div className="opacity-0 absolute main  grid grid-cols-4 grid-rows-4 gap-2 md:gap-5 w-full h-full ">
//               <div className="  relative col-span-4 row-span-3 flex justify-center rounded-lg">
//                 <div className="absolute w-full h-full  z-10  rounded-lg" />
//                 <img
//                   src="/side-3.webp"
//                   className={`bg-black  object-cover h-full object-left lg:rounded-xl rounded-lg`}
//                   alt=""
//                 />
//               </div>
//             </div>
//             <div className="opacity-0 absolute main2 grid grid-cols-4 grid-rows-4 gap-2 md:gap-5 w-full h-full ">
//               <div className="relative col-span-4 row-span-3 flex justify-center rounded-lg">
//                 <div className="absolute w-full h-full   z-30  rounded-lg" />
//                 <img
//                   src="/main.webp"
//                   className={`bg-black  object-cover h-full object-left lg:rounded-xl rounded-lg`}
//                   alt=""
//                 />
//               </div>
//             </div>
//             <div className="opacity-0 absolute main2  grid grid-cols-4 grid-rows-4 gap-2 md:gap-5 w-full h-full ">
//               <div className="  relative col-span-4 row-span-3 flex justify-center rounded-lg">
//                 <div className="absolute w-full h-full   z-20  rounded-lg" />
//                 <img
//                   src="/side-1.webp"
//                   className={`bg-black  object-cover h-full object-left lg:rounded-xl rounded-lg`}
//                   alt=""
//                 />
//               </div>
//             </div>

//             <div className="opacity-0 absolute main2  grid grid-cols-4 grid-rows-4 gap-2 md:gap-5 w-full h-full ">
//               <div className="  relative col-span-4 row-span-3 flex justify-center rounded-lg">
//                 <div className="absolute w-full h-full   z-10  rounded-lg" />
//                 <img
//                   src="/side-2.webp"
//                   className={`bg-black  object-cover h-full object-left lg:rounded-xl rounded-lg `}
//                   alt=""
//                 />
//               </div>
//             </div>

//             <div className="opacity-0 absolute main2  grid grid-cols-4 grid-rows-4 gap-2 md:gap-5 w-full h-full ">
//               <div className="  relative col-span-4 row-span-3 flex justify-center rounded-lg">
//                 <div className="absolute w-full h-full  z-10  rounded-lg" />
//                 <img
//                   src="/side-3.webp"
//                   className={`bg-black  object-cover h-full object-left lg:rounded-xl rounded-lg`}
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

function HeroSection() {
    
  const slides = [
    {
      url: '/ece1.jpeg',
    },
    {
      url: '/ece2.jpg',
    }
    ,
    {
      url: '/ece3.jpeg',
    },

    {
      url:'/ece4.jpg',
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
    <>
      <div className="Hero flex md:flex-row flex-col  bg-accent-300 mt-[52px] ">
        <div className="container lg:max-w-7xl p-4  mx-auto md:mb-5 ">
          <div className='flex flex-col justify-center'>
          <div className="ml-8 flex flex-row gap-2 mb-3 md:text-left text-center justify-center md:justify-normal">
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
            <h3 className=" font-bold opacity-60 ">5th - 7th June 2025</h3>
          </div>
          </div>
          <h1 className="md:text-4.5xl text-3xl md:ml-8 font-bold sm:text-left text-center  text-accent-900">
            International Conference <br />
            <span className="ON md:text-3xl text-2xl text-center text-accent-900">
              on
            </span>
            <br />
            <span className="md:text-5xl text-4xl font-bold text-justify text-accent-950">
              Electronics, AI and Computing
            </span>
          </h1>
          <div className='md:ml-8 mt-4 flex md:flex-row flex-col md:gap-0 gap-3 rounded-full justify-around'>
            <a
              href="#"
              className="inline-flex justify-between items-center py-1 px-1 pr-4  text-sm text-accent-700 bg-accent-100 rounded-full "
              role="alert"
            >
              <span className="text-xs bg-accent-600 rounded-full text-white px-1.5 py-2 mr-3 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="22"><path d="M80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18q30 0 58.5 3t55.5 9l-70 70q-11-2-21.5-2H400q-71 0-127.5 17T180-306q-9 5-14.5 14t-5.5 20v32h250l80 80H80Zm542 16L484-282l56-56 82 82 202-202 56 56-258 258ZM400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm10 240Zm-10-320q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Z" className=' fill-accent-50'/></svg>
              </span>
              <span className="text-sm font-semibold">
                Register
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
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>

            <div className="flex flex-row items-center bg-accent-900  px-2 rounded-full py-">
            <div className=' bg-accent-900 rounded-full p-2 '>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m600-120-240-84-186 72q-20 8-37-4.5T120-170v-560q0-13 7.5-23t20.5-15l212-72 240 84 186-72q20-8 37 4.5t17 33.5v560q0 13-7.5 23T812-192l-212 72Zm-40-98v-468l-160-56v468l160 56Zm80 0 120-40v-474l-120 46v468Zm-440-10 120-46v-468l-120 40v474Zm440-458v468-468Zm-320-56v468-468Z" className=' fill-accent-200'/></svg>
            </div>
            <span className=' text-sm font-medium text-accent-100 md:p-0 p-3 '>Dr. B. R. Ambedkar National Institute of Technology,
Jalandhar
</span>
            </div>
                  </div>
                
                

              </div>

        <div className="w-3/4  flex-auto pt-5 md:block hidden">
          <div className="h-4/6 w-5/6 m-auto  relative group ">
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
//                  <RxDotFilled />

              ))}
                      </div>


          </div>
              </div>

          </div>
          <div className="container lg:max-w-7xl">
              <SecNavbar />
          </div>
    </>
  );
}


export default HeroSection;
