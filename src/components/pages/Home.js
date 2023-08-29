import Banner from '../ui/Banner';
import UpTrips from '../ui/UpTrips';
import WeekendTrips from '../ui/WeekendTrips';
import Testimonials from '../ui/Testimonials';
import Slider from '../ui/Slider';

const Home = () => {
    // const weekendTripsData = data.filter(trip => trip.category === "weekend");
    return (
        <>
            <Banner />
            <UpTrips />
            {/* <WeekendTrips /> */}
            <Testimonials />
            <Slider />
        </>
    )
}

export default Home