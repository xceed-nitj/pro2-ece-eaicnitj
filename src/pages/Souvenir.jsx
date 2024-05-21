import { useEffect } from 'react';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SecNavbar from '../components/SecNavbar';



function Souvenir() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const data = [
        { location: 'Multicolor Back page', price: 150000 },
        { location: 'Multicolor Back inside gatefold', price: 100000 },
        { location: 'Multicolor Front inside gatefold', price: 60000 },
        { location: 'Multicolor Full page', price: 25000 },
        { location: 'Multicolor Half page', price: 15000 },
        { location: 'Black & White Full Page', price: 15000 },
        { location: 'Black & White half Page', price: 7500 },
    ];



    return (
        <>
            <div className="fixed top-0 w-screen z-40 "> 
      <Navbar />      
      </div>
      <SecNavbar />

      <div className="container max-w-7xl mx-auto px-5 sm:px-10  lg:px-8 mt-[58px] lg:mt-[10px] min-h-[300px] mb-5">
                <div className="w-full mx-auto  md:w-[700px] px-4 lg:w-full" >
                    <p className="text-2xl font-sans font-bold mb-5  text-gray-950 underline ">
                        Souvenir
                    </p>
                    <p className="text-base  text-justify font-sans font-base text-gray-800">
                        An informative souvenir will be made available to all the delegates.
                        Contributions are solicited to support this mega event,
                        CHEMCON-2024, through advertisements. The rates are as
                        follows:
                        <table className="mt-3 border-collapse box-border max-w-[400px]">
                            <thead>
                                <tr className="border-[2px] bg-accent-100  border-accent-500">
                                    <th className="p-1 pl-4 text-left">Location</th>
                                    <th className="p-1 pl-4 text-left">Price in INR</th>

                                </tr>
                            </thead>
                            <tbody>
                                {data.length > 0 ? data.map((item, index) => (
                                    <tr key={index} className="border-[1px] font-serif border-accent-500">
                                        <td className="p-1 pl-4 text-left">{item.location}</td>
                                        <td className="p-1 pl-4 text-left">{item.price}</td>

                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan="7" className="p-1 text-center">No data available</td>
                                    </tr>

                                )}
                            </tbody>
                        </table>

                    </p>

                </div>
            </div>
            <Footer />

        </>
    )
}

export default Souvenir
