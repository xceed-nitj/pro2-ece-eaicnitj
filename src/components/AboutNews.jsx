import { useState, useEffect, useRef } from "react";
import Separator from "./common/Separator";
import { Link } from "react-router-dom";
import axios from "axios";
import getEnvironment from "../getenvironment";

function AboutNews(props) {
  const [apiUrl, setApiUrl] = useState(null);
    useEffect(() => {
        // Fetch the environment URL
        getEnvironment().then(url => setApiUrl(url));
    }, []);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const aboutDiv = useRef(100)
  console.log(aboutDiv)
  console.log(aboutDiv.current.offsetHeight)

  const confId = props.confid;
  // const [data, setData] = useState(null)

  // useEffect(() => {
  //   axios.get(`${apiUrl}/conferencemodule/home/conf/${confid}`, {
  //     withCredentials: true

  //   })
  //     .then(res => {
  //       setData(res.data);
  //       console.log(res.data);

  //     })
  //     .catch(err => console.log(err))

  // }, []);
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    if(apiUrl) {
    axios.get(`${apiUrl}/conferencemodule/announcements/conf/${confId}`, {
      withCredentials: true

    })
      .then(res => {
        setNewsData(res.data);
        console.log(res.data);

      })
      .catch(err => console.log(err))
    }
  }, [apiUrl, confId]);


  return (
    <div className="container max-w-7xl flex flex-col items-center lg:flex-row lg:justify-evenly lg:items-start  mx-auto px-5 sm:px-10  lg:px-8 py-20">
      <div ref={aboutDiv} className="border border-[transparent] w-full  md:w-[700px] px-4 lg:w-3/5 ">
        <h2 className="text-4xl font-bold  text-accent-50 bg-accent-600 px-4 py-2 rounded-t-xl border-2 border-accent-600 ">
          About the <span className="text-4xl font-bold text-accent-50 py-2 ">Conference</span> 
        </h2>
        <Separator />
        <div className=" border-dashed border-accent-700 border-2 bg-accent-50 rounded-b-xl border-t-0 ">
        <p className="text-lg text-justify font-base text-accent-900 p-2 ">
          {/* {data ? <div className="min-h-[216px]" dangerouslySetInnerHTML={{ __html: data.aboutConf }} /> : <div className="min-h-[216px]"></div>} */}

                      EAIC-2025 is technically sponsored by IEEE Delhi section and IEEE student branch, NIT Jalandhar. It aims to bring together leading researchers, academicians, and industry professionals worldwide to present cutting-edge research, discuss emerging trends, and network within various technology fields. The program includes keynote speeches, technical presentations, panel discussions, and technology exhibitions. Nestled in the heart of culturally vibrant Punjab, participants will experience the host institutes academic excellence and dynamic research environment. This conference is a celebration of innovation and collaboration, providing an unparalleled opportunity to engage with the global scientific community, present research, and contribute to advancing technology. Participants will delve into specialized tracks covering areas such as Nanoelectronics, VLSI Design, Communication Systems, Machine Learning, Power Electronics, Control, Renewable Energy, Electric Mobility, Security and Privacy etc. These tracks technical depth and breadth ensure that attendees can explore the latest advancements and applications in their fields.

                  </p></div>
        
        {/* <h2 className="text-4xl font-sans font-bold mt-4 text-gray-950  ">
          About IICHE
        </h2>
        <Separator />
        <p className="text-base text-justify font-sans font-base text-gray-800">
          {data ? <div dangerouslySetInnerHTML={{ __html: data.aboutIns }} /> : " "}
        </p> */}
      </div>
      <div className={`h-[${aboutDiv.current.offsetHeight}px] flex flex-col sm:w-full md:w-[700px] box-border sm:pr-6 lg:w-2/5 lg:ml-4 max-w-[700px] h-96 mt-10 sm:px-2 lg:mt-0 ml-5 md:mx-auto lg:px-5`}>
        <h2 className="text-4xl font-bold  text-accent-50 bg-accent-600 px-4 py-2 rounded-t-xl border-2 border-accent-600 shadow-xl shadow-accent-200 drop-shadow-xl">News</h2>

        <Separator />
        <div
          id="news"
          className="flex-1 overflow-auto bg-accent-100 rounded-b-xl p-4 border-2 border-accent-600 border-t-0"
        >
          <div
            className={`space-y-4 h-full ${isMouseOver ? "animate-none cursor-default" : "animate-wiggle"
              }`}
            onMouseOver={() => setIsMouseOver(true)}
            onMouseOut={() => setIsMouseOver(false)}
          // className="flex flex-col  animate-wiggle"
          >


                      {newsData.map((item) => (
                          <Link key={item._id} target="_blank" rel="noopener noreferrer"
                              to={item.link !== "" ? item.link : `/news/${item._id}`}  >

                              {!item.hidden && <div className="relative my-4 rounded-xl hover:shadow-lg hover:shadow-accent-600/50 bg-white border-solid border-[3px] border-accent-500">
                  <div className="w-2 h-2 animate-ping bg-accent-600 absolute  -left-1 -top-1 rounded-full"></div>
                  <p className="text-lg font-medium  text-accent-600 p-4 -mt-2 border-b-2 border-dashed border-accent-400">{item.title}</p>

                                      {item.new && <span className=' absolute mr-10 right-0 mt-5 flex flex-row animate-bounce '>

                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 stroke-red-400 ">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                                          </svg>
                                          <p className=" text-red-400 text-sm ml-1 font-semibold">NEW</p>
                                      </span >}

                                 
                     <p className="text-sm pt-4 p-4">
                    {item.metaDescription}
                  </p>
                              </div>
                            
                              }
                          </Link>
                      ))}

       
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutNews;
