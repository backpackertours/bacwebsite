import { useParams } from 'react-router-dom';
// import TripDetails from '../../ui/TripDetails';
import UpcomingTripsInfo from './UpcomingTripInfo';
import tripsData from '../../data/tripsData';

const Trip = () => {
    const { id } = useParams();

    const trip = tripsData.find(trip => trip.id === id);

    return (
        <UpcomingTripsInfo trip={trip} />
    )
}

export default Trip