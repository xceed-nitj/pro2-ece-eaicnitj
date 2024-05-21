import Separator from "./common/Separator";

function AboutNITJ() {



    return (
        <div className="container flex flex-col items-center lg:flex-row lg:justify-between lg:items-start max-w-7xl  px-4 sm:px-10  lg:px-8 mx-auto pt-20 pb-20">
            <div className="w-full md:w-[700px] px-4 lg:w-1/2 lg:max-w-full">
                <h2 className="text-4xl font-bold  text-accent-50 bg-accent-600 px-4 py-2 border-2 border-accent-600  ">
                    About NITJ        </h2>
                <Separator />
                <p className="text-base text-justify font-base min-h-[216px] text-gray-800 pt-2 leading-8">
                Dr B R Ambedkar National Institute of Technology, Jalandhar was established in the year 1987 as Regional Engineering College. The Institute was given the status of National Institute of Technology  by the Government of India on October 17, 2002 under the aegis of Ministry of Human Resource Development, New Delhi and has been declared as “Institute of National Importance” under the act of Parliament-2007. As National Institute of Technology, the Institute has a responsibility of providing high quality technical education in Engineering/Technology and Sciences to produce competent technical manpower and scientists  for the country..
                </p>

            </div>
            <div className="w-full md:w-[700px] lg:w-1/2 px-4 mt-10 lg:mt-0 mx-auto lg:px-5 ">
            
                <h2 className="text-4xl font-bold  text-accent-50 bg-accent-600 px-4 py-2  border-2 border-accent-600 ">
                    About the Department
                </h2>
                <Separator />
                <p className="text-base  text-justify leading-7  font-base text-gray-800 pt-2">
                The Department of Mathematics, NIT-Jalandhar is one of the Thirteen Departments of the Institute. The Department of Mathematics offers M. Sc. and Ph. D. programs in Mathematics. The Department also teaches Mathematics to B. Tech., M. Tech. and Ph. D. students belonging to various engineering streams. The Department keeps in pace with the advances in technology, by providing its students state-of–the-art computer facilities. The students get the opportunity of attending seminars and invited lectures delivered by eminent mathematicians and academicians. They also get the opportunity for campus placement in various national and multinational companies. All students and faculty members are members of “Society for Promotion of Mathematics” which organizes different events throughout the year.
                </p>
            </div>
        </div>
    );
}

export default AboutNITJ;
