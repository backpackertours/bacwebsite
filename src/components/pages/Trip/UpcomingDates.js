import uuid4 from "uuid4";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const UpcomingDates = ({ departure }) => {

    const slides = departure.map((item, index) => (
        <SwiperSlide key={uuid4()}>
            <div className="p-2 bg-light rounded-3 text-center position-relative">
                <p className="mb-0">{item.start} - {item.end}</p>
                {/* <Badge color="success" className="position-absolute top-0 end-0 rounded-end-3 rounded-start-0 rounded-bottom-0 py-1 px-2 fw-normal">{item.seats_left} Seats Left</Badge> */}
            </div>
        </SwiperSlide>
    ));

    return (
        <div className="my-4">
            <h5 className="mb-3">Upcoming Trips 🚐</h5>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                slidesPerGroup={3}
                navigation={true}
                grabCursor={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 25,
                    },
                    768: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        spaceBetween: 25
                    },
                    1024: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        spaceBetween: 25
                    },
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
                {slides}
            </Swiper >
        </div>
    );
}

export default UpcomingDates;