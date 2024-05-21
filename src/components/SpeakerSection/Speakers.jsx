import SpeakerCard from "./SpeakerCard"


function Speakers() {
    return (
        <div className='container max-w-7xl mx-auto space-y-16 px-8 py-16 '>
            {/* heading */}
            <h2 className="text-4xl font-bold mb-4 text-center">Our Speakers</h2>
            {/* speakers Div */}
            <div className="flex justify-center">
                <SpeakerCard />
            </div>
        </div >
    )
}

export default Speakers