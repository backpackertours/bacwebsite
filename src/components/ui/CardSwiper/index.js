// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import TripCard from '../TripCard';

const CardSwiper = ({ data }) => {

    const slides = data.map(trip => (
        <SwiperSlide>
            <TripCard data={trip} />
        </SwiperSlide>
    ));

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 25,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 25,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 25,
                    },
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
                {slides}
            </Swiper >
        </>
    );
}

export default CardSwiper