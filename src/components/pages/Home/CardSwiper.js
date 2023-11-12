import TripCard from './TripCard';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const CardSwiper = ({ data }) => {

    const slides = data.map(trip => (
        <SwiperSlide key={trip.id}>
            <TripCard trip={trip} />
        </SwiperSlide>
    ));

    return (
        <>
            <Swiper
                slidesPerView={1.25}
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

export default CardSwiper;