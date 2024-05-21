import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import "./speaker.css"

const speakers = [
    {
        name: "Elon Musk",
        imageUrl: './speaker.jpeg',
    },
    {
        name: "Elon Musk",
        imageUrl: './speaker.jpeg',
    },
    {
        name: "Elon Musk",
        imageUrl: './speaker.jpeg',
    },
    {
        name: "Elon Musk",
        imageUrl: './speaker.jpeg',
    },
    {
        name: "Elon Musk",
        imageUrl: './speaker.jpeg',
    },
    {
        name: "Elon Musk",
        imageUrl: './speaker.jpeg',
    },
    {
        name: "Elon Musk",
        imageUrl: './speaker.jpeg',
    },
    {
        name: "Elon Musk",
        imageUrl: './speaker.jpeg',
    },
    {
        name: "Elon Musk",
        imageUrl: './speaker.jpeg',
    },
    {
        name: "Elon Musk",
        imageUrl: './speaker.jpeg',
    },
]
function SpeakerCard() {

    return (

        <Swiper className='md:py-10 max-w-5xl mx-auto px-10'
            spaceBetween={50}
            initialSlide={2}
            speed={300}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true, }}
            navigation={true}
            loop={true}
            centeredSlides={true}
            modules={[Pagination, Navigation]}
            breakpoints={{
                640: {
                    slidesPerView: 3,
                }
            }}
        >
            {
                speakers.map((speaker, ind) => (
                    <SwiperSlide key={ind} className='py-10'>
                        {({ isActive }) => (
                            <div className={`object-contain w-full h-full relative ease-out duration-300 delay-[250] 
                        ${isActive ? "scale-125" : "opacity-30"} `} >
                                <img src={speaker.imageUrl} className={`object-contain w-full h-full rounded-xl`} />
                                <div className='absolute bottom-0 bg-gradient-to-t from-40% via-90% from-black/60  w-full p-4 rounded-xl'>
                                    <h1 className='text-white font-semibold text-xl'>{speaker.name}</h1>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>

                ))
            }
        </Swiper >

    )

}

export default SpeakerCard