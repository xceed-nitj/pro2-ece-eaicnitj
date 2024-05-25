import Separator from "./common/Separator";

function AboutNITJ() {



    return (
        <div className="container flex flex-col items-center lg:flex-row lg:justify-between lg:items-start max-w-7xl  px-4 sm:px-10  lg:px-8 mx-auto pt-20 pb-20">
            <div className="w-full md:w-[700px] px-4 lg:w-1/2 lg:max-w-full">
                <h2 className="text-4xl font-bold  text-accent-50 bg-accent-600 px-4 py-2 border-2 border-accent-600  ">
                    About NITJ        </h2>
                <Separator />
                <p className="text-base text-justify font-base min-h-[216px] text-gray-800 pt-2 leading-8">
                    Dr B R Ambedkar National Institute of Technology was established in the year 1987 as Regional Engineering College and was given the status of National Institute of Technology (Deemed University) by the Government of India on October 17, 2002 under the aegis of Ministry of Education (Shiksha Mantralaya), New Delhi. Now the Ministry of Education (Shiksha Mantralaya), Government of India has declared the Institute as “Institute of National Importance” under the act of Parliament-2007. A large number of reputed Industrial houses in the country visit the Institution and select the final year students as Engineers/ Management Trainees. As one of the National Institutes of Technology (NIT), the Institute has the responsibility of providing high quality education in Engineering, Technology and Sciences to produce competent technical and scientific manpower for the country. The Institute offers BTech, MTech, MSc, MBA and PhD programmes in the several disciplines of Engineering, Technology and Sciences.
                </p>

            </div>
            <div className="w-full md:w-[700px] lg:w-1/2 px-4 mt-10 lg:mt-0 mx-auto lg:px-5 ">
            
                <h2 className="text-4xl font-bold  text-accent-50 bg-accent-600 px-4 py-2  border-2 border-accent-600 ">
                    About the Department
                </h2>
                <Separator />
                <p className="text-base  text-justify leading-7  font-base text-gray-800 pt-2">
                    The Department of Electronics & Communication Engineering, Dr. B R Ambedkar NIT Jalandhar has been offering B.Tech programme in Electronics & Communication Engineering since 1989, M.Tech programme in Electronics & Communication Engineering (Full-Time) and VLSI Design (Full Time) from 2007. The Department also offers Ph.D. programmes in various specializations, such as Biomedical Engineering, VLSI Design, Nanoelectronics and Communication Systems etc. The Department has presently 15 faculty members with PhD degrees from reputed Institutes. The Department has established state-of-the-art laboratories for B.Tech, M.Tech and Ph.D. research work. The Department has an advanced Biomedical Signal Processing and Telemedicine Laboratory, VLSI Design Laboratory, Nanoelectronics Research Lab and Communication System Laboratory with sophisticated research equipment. The department has an advanced VLSI lab sponsored by the Ministry of Communication and IT under the SMDP-II project. In the VLSI lab Cadance, Mentor graphic, Synopsys, Magma, Coware and Xilinx softwares are available for project/research work. The department also has 5G Communication Lab Sponsored by Government of India and IoT Lab Sponsored by AWADH, IIT Ropar. 
                </p>
            </div>
        </div>
    );
}

export default AboutNITJ;
