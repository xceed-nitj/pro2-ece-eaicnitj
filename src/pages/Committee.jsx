import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SecNavbar from '../components/SecNavbar'
import axios from "axios";
import { useState,useEffect } from 'react';
import getEnvironment from "../getenvironment";
function Committee(props) {
    const confid = props.confid;
    const [data, setData] = useState([]);
    const apiUrl = getEnvironment();
    useEffect(() => {
      axios.get(`${apiUrl}/conferencemodule/committee/conference/${confid}`, {
        withCredentials: true
  
      })
        .then(res => {
          setData(res.data);
          console.log(res.data);
  
        })
        .catch(err => console.log(err))
  
    }, []);
    return (
        <>
            <div className="fixed top-0 w-screen z-40 "> 
      <Navbar />      
      </div>
      <SecNavbar/>
      <div className="container max-w-7xl mx-auto px-5 sm:px-10 min-h-[300px] lg:px-8 mt-[58px] lg:mt-[10px] mb-5">
      {data.map((item) => (

                <div key={item._id} className="w-full mx-auto  md:w-[700px] px-4 lg:w-full" >

                    <p className="text-lg font-sans font-bold  text-gray-950 underline ">
                    {item.Type}
                    </p>
                    <div className="text-base   text-justify font-sans font-base text-gray-800">
                        <div className='mx-5 mb-5'><p className='font-semibold'>  {item.Subtype}</p>
                            <p> {item.Name}</p>
                            <p> {item.Designation},  {item.Institute}</p></div>
                        
                    </div>
                </div>
                ))}

                
            </div>
            <Footer />
        </>
    )
}

export default Committee



