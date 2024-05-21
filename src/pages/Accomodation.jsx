import { useEffect } from 'react';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SecNavbar from '../components/SecNavbar';
function Accommodation() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
           <div className="fixed top-0 w-screen z-40 "> 
      <Navbar />      
      </div>
      <SecNavbar />
      
            <div className="container max-w-7xl mx-auto px-5 sm:px-10  lg:px-8 mt-[58px] lg:mt-[10px] min-h-[300px] mb-5">
                <div className="w-full mx-auto  md:w-[700px] px-4 lg:w-full" >
                    <p className="text-2xl font-sans font-bold mb-5 text-gray-950 underline ">
                        Accomodation                    </p>
                    <p className="text-base  text-justify font-sans font-base text-gray-800">

                        The accommodation for the delegates can be arranged in hotels
                        (List will be available on website), guest houses and institute
                        hostels subject to the availability of the same on request and on
                        payment basis. The requirement for the preferred accommodation
                        along with the tariff range and single/ double occupancy should be
                        sent to the Organizing Secretary well in advance.
                    </p>
               </div>
            </div>
            <Footer />
        </>
    )
}

export default Accommodation
