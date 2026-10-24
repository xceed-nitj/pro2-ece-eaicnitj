import { useEffect } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

// Registration fees from the EAIC 2027 flyer. Each row lists the fee for
// IEEE/IET members and for everyone else, in each registration period.
const periods = ["Early Bird (till 20 Aug)", "Till 05 Sep", "Spot Registration"];

const indianFees = [
  {
    group: "Authors",
    rows: [
      { type: "Full-Time Students (UG & PG)", fees: [5000, 5500, 5500, 6000, 6500, 7000] },
      { type: "Research Scholars", fees: [6000, 6500, 6500, 7000, 7500, 8000] },
      { type: "Faculty", fees: [8000, 8500, 8500, 9000, 9500, 10000] },
      { type: "Industry", fees: [9000, 9500, 9500, 10000, 10500, 11000] },
    ],
  },
  {
    group: "Delegates",
    rows: [
      { type: "Student / Research Scholar", fees: [7000, 7500, 7500, 8000, 8500, 9000] },
      { type: "Academician / Industry", fees: [7500, 8000, 8000, 8500, 9000, 9500] },
    ],
  },
];

const foreignFees = [
  {
    group: "Authors",
    rows: [
      { type: "Full-Time Students (UG & PG)", fees: [200, 250, 250, 300, 350, 400] },
      { type: "Teachers / Research Scholars", fees: [250, 300, 300, 350, 450, 500] },
      { type: "Industry", fees: [350, 400, 450, 500, 600, 650] },
    ],
  },
];

const FeeTable = ({ title, currency, groups }) => (
  <section className="mb-10">
    <h2 className="text-lg sm:text-xl font-medium text-teal-800 mb-3">{title}</h2>
    <p className="sm:hidden text-xs text-teal-700 mb-2">Swipe the table sideways to see all fees →</p>
    <div className="overflow-x-auto rounded-lg border border-teal-200">
      <table className="min-w-full text-sm text-center !border-0 [&_th]:border-teal-200 [&_td]:border-teal-200">
        <thead className="bg-teal-700 text-white">
          <tr>
            <th rowSpan={2} className="px-3 py-2 text-left font-medium">Category</th>
            <th rowSpan={2} className="px-3 py-2 text-left font-medium">Participant Type</th>
            {periods.map((period) => (
              <th key={period} colSpan={2} className="px-3 py-2 font-medium">
                {period}
              </th>
            ))}
          </tr>
          <tr className="bg-teal-600">
            {periods.map((period) => [
              <th key={`${period}-ieee`} className="px-3 py-1.5 font-normal">IEEE/IET</th>,
              <th key={`${period}-general`} className="px-3 py-1.5 font-normal">General</th>,
            ])}
          </tr>
        </thead>
        <tbody>
          {groups.map(({ group, rows }) =>
            rows.map((row, idx) => (
              <tr key={`${group}-${row.type}`} className="border-t border-teal-100 even:bg-teal-50/50">
                {idx === 0 && (
                  <th
                    rowSpan={rows.length}
                    className="px-3 py-2 text-left font-medium text-teal-900 bg-teal-50 align-middle"
                  >
                    {group}
                  </th>
                )}
                <td className="px-3 py-2 text-left text-gray-700 whitespace-nowrap">{row.type}</td>
                {row.fees.map((fee, i) => (
                  <td key={i} className="px-3 py-2 text-gray-800">
                    {currency}
                    {fee.toLocaleString("en-IN")}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  </section>
);

function RegistrationFee() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Minimal dotted background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(circle, #0d9488 1.5px, transparent 1.5px)`,
          backgroundSize: "20px 20px",
        }}
      />

      <Navbar />

      <div className="pt-20 container mx-auto px-4 sm:px-6 lg:px-8 pb-16 relative z-10">
        <div className="relative p-[2px] rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 shadow-lg">
          <div className="bg-white rounded-xl p-6 sm:p-8">
            <h1 className="text-2xl sm:text-3xl font-medium text-teal-800 mb-6">Registration Fee</h1>
            <div className="w-16 h-0.5 bg-teal-500 mb-6" />

            <FeeTable title="Indian Authors & Delegates (INR)" currency="₹" groups={indianFees} />
            <FeeTable title="Foreign Authors & Delegates (USD)" currency="$" groups={foreignFees} />

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://eaicnitj.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-teal-700 hover:bg-teal-800 text-white font-medium px-6 py-2 rounded-lg shadow-md transition-colors"
              >
                Submission Link
              </a>
              <p className="text-gray-700 text-sm">
                Contact: Dr. Balwinder Raj (
                <a href="mailto:eaic@nitj.ac.in" className="text-teal-700 underline">
                  eaic@nitj.ac.in
                </a>
                )
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default RegistrationFee;
