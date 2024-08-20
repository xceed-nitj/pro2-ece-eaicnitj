import { useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SecNavbar from '../components/SecNavbar';

function Speakers() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const keynoteSpeakers = [
        "Prof. Kewal K. Saluja, University of Wisconsin-Madison, USA",
        "Prof. Ravinder Dahiya, Professor, ECE Dept, Northeastern University, Boston, USA",
        "Prof. Abusaleh M. Jabir, Oxford Brookes University, UK",
        "Prof. Ahmed Hemani, KTH University Sweden",
        "Prof. Ernesto Limiti, University of Rome, Italy",
        "Prof. Sudeb Dasgupta, Department of ECE, Indian Institute of Technology, Roorkee",
        "Prof. Satyabrata Jit, Department of ECE, IIT BHU",
        "Prof. Rajendra Singh, IIT Delhi",
        "Prof. Jawar Singh, Department of EE, IIT Patna",
        "Prof. Santosh K Vishvakarma, IIT Indore",
        "Dr. Hari Shanker Gupta, Scientist, SAC ISRO, Ahmedabad, India"
    ];

    return (
        <>
            <div className="fixed top-0 w-screen z-40">
                <Navbar />
            </div>
            <SecNavbar />

            <div className="container max-w-7xl mx-auto px-5 sm:px-10 lg:px-8 mt-[58px] lg:mt-[10px] mb-5">
                <div className="w-full mx-auto md:w-[700px] px-4 lg:w-full mt-20">
                    <p className="text-2xl font-sans font-bold mb-5 text-gray-950 underline">
                        Keynote Speakers
                    </p>
                    <div className="bg-gray-100 p-5 rounded-lg shadow-sm">
                        <ul className="list-disc pl-5 text-base text-justify font-sans font-base text-gray-800 space-y-2">
                            {keynoteSpeakers.map((speaker, index) => (
                                <li key={index} className="mb-2">{speaker}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Speakers;