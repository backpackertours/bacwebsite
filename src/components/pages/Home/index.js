import HomeBanner from './HomeBanner';
import Slider from './Slider';
import Testimonials from './Testimonials';
import UpcomingTripCards from './UpcomingTripCards';
import WeekendGatewayCards from './WeekendGatewayCards';

const Home = () => {
    return (
        <>
            <HomeBanner />
            <UpcomingTripCards />
            <WeekendGatewayCards />
            <Testimonials />
            <Slider />
        </>
    )
}

export default Home;