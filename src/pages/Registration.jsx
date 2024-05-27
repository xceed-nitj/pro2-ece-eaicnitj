import { useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Registration() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="fixed top-0 w-screen z-40">
                <Navbar />
            </div>
            <div className="container max-w-7xl mx-auto px-5 sm:px-10 lg:px-8 mt-[58px] lg:mt-[70px] min-h-[300px] mb-5 flex justify-center items-center">
                <div className="w-full mx-auto md:w-[700px] px-4 lg:w-full">
                    <p className="text-2xl font-sans font-bold mb-5 text-gray-950 underline">
                        Registration Fee
                    </p>
                    <p className="text-base text-left font-sans font-base text-gray-800">
                        <img src="/fee.png" alt="Registration Fee Table" style={{ width: '500px', height: '400px' }} />
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Registration;
