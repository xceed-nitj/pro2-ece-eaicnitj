// import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useEffect } from 'react';
import SecNavbar from '../components/SecNavbar';
const data = [
  { dimension: '6m x 6m (Central Hall)', price: 100000 },
  { dimension: '3m x 3m', price: 30000 },
  { dimension: '3m x 2m', price: 25000 },
];

function Events() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="fixed top-0 w-screen z-40 "> 
      <Navbar />      
      </div>
      <SecNavbar />

      <div className="container max-w-7xl mx-auto px-5 sm:px-10  lg:px-8 mt-[58px] lg:mt-[10px] mb-5">
                <div className="w-full mx-auto  md:w-[700px] px-4 lg:w-full" >
          <p className="text-2xl font-sans font-bold mb-2 text-accent-500 underline ">
            Technical Sessions
          </p>
          <p className="text-base  text-justify font-sans font-base text-gray-800">
            Technical Sessions will focus on the theme of the Congress and
            the following broad themes will be covered with interaction through
            Plenary Sessions, Invited Lectures, Paper Presentations and
            Poster Sessions. There will be three best paper awards each in
            Oral and Poster presentations in each session. Award will be
            given to the top two papers presented in each session in both Oral
            and Poster presentations. The following topics but not limited to
            are to be covered:
            <ul className='list-disc list-inside md:grid md:grid-cols-2 '>
              <li >Chemical Process Safety Management</li>  <li> Green Technology
              </li>
              <li>Novel Separation Techniques
              </li> <li>New and Renewable Energy </li>
              <li>Sustainable Development </li>
              <li>Hydrocarbon and other fossil fuels</li>
              <li>Energy and Environmental Policy Issues</li>
              <li>Modelling, Simulation and Scale-up</li>
              <li> Nanotechnology </li>
              <li>Process Development</li>
              <li>Chemical and Fertilizer Technology</li>
              <li>Nuclear and Thermal Power</li>
              <li> Chemical Engineering in the New Century</li>
              <li> Agrochemical Technology</li>
              <li>Membrane Separation Processes</li>
              <li>Mining and Mineral</li>
              <li>Biochemical and Bioprocessing</li>
              <li> Industrial Biotechnology</li>
              <li>Process Intensification</li>
              <li>Process Systems Engineering</li>
              <li> Waste Water Treatment</li>
              <li>Solid Waste Management</li>

            </ul>
          </p>
        </div>
<section id="targetSection">
        <div className="m-5 " >
          <p className="text-2xl font-sans font-bold mb-2 text-accent-500 underline ">
            Sri Dhirubhai Ambani Commemoration Day
          </p>
          <p className="text-base  text-justify font-sans font-base text-gray-800">
            Shri Dhirubhai Ambani Commemoration day will be celebrated on
            December 28, 2024 as a tribute to the great visionary.
          </p>

        </div>
        </section>
        <div className="m-5 ">
          <p className="text-2xl font-sans font-bold mb-2 text-accent-500 underline ">
            International Symposium
          </p>
          <p className="text-base  text-justify font-sans font-base text-gray-800">
            International Joint Symposiums related to the theme will be held
            as part of CHEMCON 2024.

          </p>

        </div>

        <div className="m-5 ">
          <p className="text-2xl font-sans font-bold mb-2 text-accent-500 underline ">
            Exhibition
          </p>
          <p className="text-base  text-justify font-sans font-base text-gray-800">
            An exhibition of Chemical Engineering and allied businesses
            including safety, technology providers, consultants, institution, tour
            packages and communication, Equipment, Instruments, Books
            and Journals, etc. is proposed during CHEMCON 2024. Interested
            organizations will be allotted space of the following dimensions in
            the form of exhibition stalls with all facilities like furniture, power,
            etc., at a cost given below:
            <table className="mt-3  border-collapse box-border md:w-[400px]">
              <thead>
                <tr className="border-[2px] bg-accent-100  border-accent-500">
                  <th className="p-1 pl-4 text-left">Dimension</th>
                  <th className="p-1 pl-4 text-left">Price in INR</th>

                </tr>
              </thead>
              <tbody>
                {data.length > 0 ? data.map((item, index) => (
                  <tr key={index} className="border-[1px] font-serif border-accent-500">
                    <td className="p-1 md:pl-4 text-left">{item.dimension}</td>
                    <td className="p-1 md:pl-4 text-left">{item.price}</td>

                  </tr>
                )) : (
                  <tr>
                    <td colSpan="2" className="p-1 text-center">No data available</td>
                  </tr>

                )}
              </tbody>
            </table>

          </p>

        </div>
        <div className="m-5 ">
          <p className="text-2xl font-sans font-bold mb-2 text-accent-500 underline ">
            Quiz Competition           </p>
          <p className="text-base  text-justify font-sans font-base text-gray-800">
            Quiz Competition will be conducted for the student delegates
            based on GATE 2024 syllabus. The prizes will be distributed to the
            winners
          </p>

        </div>
      </div >
      <Footer />

    </>
  )
}

export default Events