import CardSwiper from '../CardSwiper';
import tripsData from '../../data/tripsData';

const UpTrips = () => {
    //filter out upcoming trips
    const upcomingTripsList = tripsData.filter(trip => trip.category === "upcoming");

    return (
        <div className="container py-5">
            <div className="mb-4">
                <h3>Upcoming Trips</h3>
            </div>
            <CardSwiper data={upcomingTripsList} />
        </div >
    );
};

export default UpTrips;