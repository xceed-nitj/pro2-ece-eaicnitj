import { useEffect } from 'react';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SecNavbar from '../components/SecNavbar';



function Registration() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const data = [
        { title: 'IICHE Member', price: 5000 },
        { title: 'Non Member / Industrial Personnel', price: 6200 },
        { title: 'Research Scholar / PG Student (IICHE Member)', price: 4500 },
        { title: 'UG Student (Student Member / Non Member)', price: 2500 },
        { title: 'Research Scholar / PG Student (Non IICHE Member)', price: 5000 },
        { title: 'Foreign Delegates (IICHE Member)', price: 'USD 250' },
        { title: 'Accompanying Spouse (Foreign) (IICHE Member)', price: 'USD 250' },
        { title: 'Industrial Personnel’s (IICHE Member/ Non IICHE Member)', price: 6500 },
        { title: 'Others (IICHE Member/ Non IICHE Member)', price: 3200 },
        { title: 'Senior Member (Over 65 Years) (IICHE Member/ Non IICHE Member)', price: 3200 },
        { title: 'Accompanying Spouse (India, All Categories) (IICHE Member/ Non IICHE Member)', price: 2000 },
    ];



    return (
        <>
            <div className="fixed top-0 w-screen z-40 "> 
      <Navbar />      
      </div>
      <SecNavbar />
      <div className="container max-w-7xl mx-auto px-5 sm:px-10  lg:px-8 mt-[58px] lg:mt-[10px] mb-5">
                <div className="w-full mx-auto  md:w-[700px] px-4 lg:w-full" >
                    <p className="text-2xl font-sans font-bold mb-5   text-gray-950 underline ">
                    Registration Fee

                    </p>
                    <p className="text-xs md:text-base   text-justify font-sans  text-gray-800">
                    
                        <table className="mt-3 border-collapse box-border min-w-full">
                            <thead>
                                <tr className="border-[2px] bg-accent-100  border-accent-500">
                                    <th className="p-1 pl-4 text-left">Categories of Membership</th>
                                    <th className="p-1 pl-4 text-left">Amount in INR (Excluding Taxes)</th>

                                </tr>
                            </thead>
                            <tbody>
                                {data.length > 0 ? data.map((item, index) => (
                                    <tr key={index} className="border-[1px] font-serif border-accent-500">
                                        <td className="p-1 pl-4 text-left">{item.title}</td>
                                        <td className="p-1 pl-4 text-left">{item.price}</td>

                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan="2" className="p-1 text-center">No data available</td>
                                    </tr>

                                )}
                            </tbody>
                        </table>
                        includes fees towards life membership of IIChE subject to the 
production of proof of eligibility.
                    </p>

                </div>
            </div>
            <Footer />

        </>
    )
}

export default Registration
