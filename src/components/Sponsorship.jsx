import Separator from "./common/Separator";

function SponsorShip() {
    const data1 = [
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
    const halfLength = Math.ceil(data1.length / 2);
  const firstHalf = data1.slice(0, halfLength);
  const secondHalf = data1.slice(halfLength);
  const array=firstHalf.map((value1,index)=>({
    value1,
    value2:secondHalf[index]


  }));
    const data2 = [
        { location: 'Multicolor Back page', price: 150000 },
        { location: 'Multicolor Back inside gatefold', price: 100000 },
        { location: 'Multicolor Front inside gatefold', price: 60000 },
        { location: 'Multicolor Full page', price: 25000 },
        { location: 'Multicolor Half page', price: 15000 },
        { location: 'Black & White Full Page', price: 15000 },
        { location: 'Black & White half Page', price: 7500 },
    ];
    return (
        <div className=" container flex flex-col items-center lg:flex-row lg:justify-between lg:items-start max-w-7xl mx-auto px-5 sm:px-10 lg:px-8 py-20">
            <div className="w-full md:w-[700px] lg:w-3/5 px-4 lg:max-w-full">
                <h2 className="text-4xl font-sans font-bold text-gray-950  ">
                Sponsorship Rates
                </h2>
                <Separator />
                
                <p className="text-base  text-justify font-sans font-base text-gray-800">
                    The sponsors are entitled to nominate two complimentary
                    delegates along with availing of local hospitality during the
                    congress. They are also entitled to put hoardings/ Banners at the
                    suitable locations provided by the organizers.
                    <table className="mt-3  text-sm md:text-base border-collapse box-border min-w-full">
                        <thead>
                            <tr className="border-[2px] bg-accent-100  border-accent-500">
                                <th className="p-1 md:pl-4 text-left">Category</th>
                                <th className="p-1 md:pl-4 text-left">Price in INR</th>
                                <th className="p-1 md:pl-4 text-left">Category</th>
                                <th className="p-1 md:pl-4 text-left">Price in INR</th>
                                

                            </tr>
                        </thead>
                        <tbody>
                            {array.length > 0 ? array.map((item, index) => (
                                
                                <tr key={index} className="border-[1px] font-serif border-accent-500">
                                    <td className="md:p-1 md:pl-4 text-left">{item.value1.category}</td>
                                    <td className="md:p-1 md:pl-4 text-left">{item.value1.price}</td>
                                    <td className="md:p-1 md:pl-4 text-left">{item.value2.category}</td>
                                    <td className="md:p-1 md:pl-4 text-left">{item.value2.price}</td>
                                    
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


            <div className="w-full md:w-[700px] px-4 lg:w-2/5 lg:max-w-[450px] mt-10 lg:mt-0 mx-auto lg:px-5 ">
                <h2 className="text-4xl font-sans font-bold text-gray-950  ">Souvenir</h2>

                <Separator />
                <p className="text-base  text-justify font-sans font-base text-gray-800">
                    An informative souvenir will be made available to all the delegates.
                    Contributions are solicited to support this mega event,
                    CHEMCON-2024, through advertisements. The rates are as
                    follows:
                    <table className="mt-3 border-collapse box-border min-w-full">
                        <thead>
                            <tr className="border-[2px] bg-accent-100  border-accent-500">
                                <th className="p-1 pl-4 text-left">Location</th>
                                <th className="p-1 pl-4 text-left">Price in INR</th>

                            </tr>
                        </thead>
                        <tbody>
                            {data2.length > 0 ? data2.map((item, index) => (
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
    );
}

export default SponsorShip;
