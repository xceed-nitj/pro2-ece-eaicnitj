import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SecNavbar from '../components/SecNavbar';
import axios from "axios";
import { useState, useEffect } from 'react';
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
            .catch(err => console.log(err));
    }, []);

    // Creating an object to group member names by type
    const memberGroups = {};
    data.forEach(item => {
        if (!memberGroups[item.Type]) {
            memberGroups[item.Type] = [];
        }
        memberGroups[item.Type].push(item.Name);
    });

    console.log(memberGroups)
    return (
        <>
            <div className="fixed top-0 w-screen z-40 ">
                <Navbar />
            </div>
            <SecNavbar />
            <div className="container max-w-7xl mx-auto px-5 sm:px-10 min-h-[300px] lg:px-8 mt-[58px] lg:mt-[70px] mb-5">
                {Object.entries(memberGroups).map(([type, names]) => (
                    <div key={type} className="w-full mx-auto md:w-[700px] px-4 lg:w-full">
                        <p className="text-lg font-sans font-bold text-gray-950 underline">
                            {type}
                        </p>
                        <div className="text-base text-justify font-sans font-base text-gray-800">
                            {names.map(name => (
                                <p key={name}>{name}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}

export default Committee;
