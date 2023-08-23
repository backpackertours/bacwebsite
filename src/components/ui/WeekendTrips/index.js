import CardSwiper from '../CardSwiper';
import data from './data';

const WeekendTrips = (props) => {
    return (
        <div className="container py-5">
            <div className="mb-4">
                <h3>Weekend Trips</h3>
            </div>
            <CardSwiper data={data} />
        </div>

    );
};

export default WeekendTrips;