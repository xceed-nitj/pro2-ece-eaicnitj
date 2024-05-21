import { useEffect,useState } from 'react';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SecNavbar from '../components/SecNavbar';
import { useParams } from 'react-router-dom';
import getEnvironment from '../getenvironment';
import axios from 'axios';
function CommonNews() {
    const apiUrl = getEnvironment();
    const  {newsid}  = useParams();
    const [data,setData]=useState("");


    useEffect(() => {
        window.scrollTo(0, 0);
        console.log(newsid);
        axios.get(`${apiUrl}/conferencemodule/announcements/${newsid}`, {
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
      <SecNavbar />

      <div className="container max-w-7xl mx-auto px-5 sm:px-10  lg:px-8 mt-[58px] lg:mt-[10px] min-h-[300px] mb-5">
                <div className="w-full mx-auto  md:w-[700px] px-4 lg:w-full" >
                    <p className="text-2xl font-sans font-bold mb-5  text-gray-950 underline ">
                    {data.title}                    </p>
                    <p className="text-base  text-justify font-sans font-base text-gray-800">
                    
                     <div dangerouslySetInnerHTML={{__html:data.description}}/> 

                    </p>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default CommonNews
