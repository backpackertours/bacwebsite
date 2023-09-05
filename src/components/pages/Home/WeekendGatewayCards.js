import CardSwiper from './CardSwiper';
import tripsData from '../../data/tripsData';

const WeekendGatewayCards = () => {

    const upcomingTripsList = tripsData.filter(trip => trip.category === "weekend");

    return (
        <div className="container py-5">
            <div className="mb-4">
                <h3>Weekend Trips</h3>
            </div>
            <CardSwiper data={upcomingTripsList} />
        </div>

    );
};

export default WeekendGatewayCards;