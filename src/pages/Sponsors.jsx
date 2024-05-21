import { useEffect } from 'react';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SecNavbar from '../components/SecNavbar';



function Sponsors() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const data = [
        { category: 'Platinum Sponsorship', price: 3000000 },
        { category: 'Gold Sponsorship', price: 2000000 },
        { category: 'Silver Sponsorship', price: 1500000 },
        { category: 'Delegate Kit', price: 1000000 },
        { category: 'Lunch (each day)', price: 500000 },
        { category: 'Dinner (each day)', price: 500000 },
        { category: 'High Tea (First day or last day)', price: 200000 },
        { category: 'Breakfast (each day)', price: 200000 },
        { category: 'Tea during break', price: 50000 },
        { category: 'Plenary Lectures (each)', price: 100000 },
        { category: 'Parallel Sessions (each)', price: 100000 },
        { category: 'Poster Sessions (each)', price: 150000 },
        { category: 'Cultural Programs (each)', price: 200000 },
        { category: 'Conference Proceeding', price: 200000 },
        { category: 'Delegate Kit CD/Pen Drive', price: 100000 },
        { category: 'Banner of each event', price: 25000 },
    ];


    return (
        <>
            <div className="fixed top-0 w-screen z-40 ">
                <Navbar />
            </div>
            <SecNavbar />

            <div className="container max-w-7xl mx-auto px-5 sm:px-10  lg:px-8 mt-[58px] lg:mt-[10px] mb-5">
                <div className="w-full mx-auto  md:w-[700px] px-4 lg:w-full" >
                    <p className="text-2xl font-sans font-bold mb-5 text-gray-950 underline ">
                        Sponsorship Rates
                    </p>
                    <p className="text-base  text-justify font-sans font-base text-gray-800">
                        The sponsors are entitled to nominate two complimentary
                        delegates along with availing of local hospitality during the
                        congress. They are also entitled to put hoardings/ Banners at the
                        suitable locations provided by the organizers.
                        <table className="mt-3   border-collapse box-border max-w-[400px]">
                            <thead>
                                <tr className="border-[2px] bg-accent-100  border-accent-500">
                                    <th className="p-1 md:pl-4 text-left">Category</th>
                                    <th className="p-1 md:pl-4 text-left">Price in INR</th>

                                </tr>
                            </thead>
                            <tbody>
                                {data.length > 0 ? data.map((item, index) => (
                                    <tr key={index} className="border-[1px] font-serif border-accent-500">
                                        <td className="p-1 md:pl-4 text-left">{item.category}</td>
                                        <td className="p-1 md:pl-4 text-left">{item.price}</td>

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

export default Sponsors