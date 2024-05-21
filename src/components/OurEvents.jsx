import {  Link } from "react-router-dom";

const data = [
  {
    title: "Technical Sessions",
    content:
    `
  `,
    bg: "bg-accent-100",
  },
  {
    title: "",
    content:
      "",
    bg: "bg-accent-200",
  },
  {
    title: "",
    content:
      "",
    bg: "bg-accent-300",
  },
  {
    title: "",
    content:
      "",
    bg: "bg-accent-400 text-white",
  },
  {
    title: "",
    content:
      "",
    bg: "bg-accent-500 text-white",
  },
  // {
  //   title: "Accommodation",
  //   content:
  //     "The accommodation for the delegates can be arranged in hotels (List will be available on website), guest houses and institute     hostels subject to the availability of the same on request and on  payment basis. The requirement for the preferred accommodation along with the tariff range and single/ double occupancy should be  sent to the Organizing Secretary well in advance.",
  //   bg: "bg-accent-100",
  // },
  // {
  //   title: "Souvenir",
  //   content:
  //     "An informative souvenir will be made available to all the delegates. Contributions are solicited to support this mega event, CHEMCON-2024, through advertisements",
  //   bg: "bg-accent-200",
  // },
]; // replace Array.from({ length: 12 }) with data to get layout
function OurEvents() {
  
  return (

    <div className="container space-y-8 lg:max-w-7xl mx-auto px-8 sm:px-10 lg:px-8 md:mb-1 mt-10">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-5">Our Events</h2>
      </div>
      <Link  to="/events" smooth>

      <div className="grid md:grid-rows-2 md:grid-cols-3 justify-around gap-5 md:gap-5 ">

        {data.map((item, index) => (
          <div
          className={`py-8 px-4 max-h-[300px] overflow-hidden text-justify hover:shadow-xl hover:shadow-accent-700 border-solid rounded-xl ${item.bg} ${
            index % 7 === 0 ? "md:row-span-2 md:max-h-[620px] " : ""
          }`}
          key={index}
        >
            <div className="flex h-full ">
              <div>
                <h4 className="font-semibold mb-3 md:text-2xl text-xl">
                  {item.title}
                </h4>
                <div className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.content }} />

              </div>
            </div>
          </div>
        ))}
      </div>
      </Link>

    </div>
  );
}

export default OurEvents;
