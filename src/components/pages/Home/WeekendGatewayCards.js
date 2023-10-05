import CardSwiper from './CardSwiper';
import tripsData from '../../data/tripsData';

const WeekendGatewayCards = () => {

    const upcomingTripsList = tripsData.filter(trip => trip.category === "weekend");

    return (
        <section className='bg-gray'>
            <div className="container py-5 px-sm-4">
                <div className='mb-4'>
                    <span className='px-3 py-2 bg-white text-center text-slate rounded-4' style={{ fontSize: "3rem" }}>⛰️</span>
                </div>
                <div className="mb-4">
                    <h3>Weekend Gateways</h3>
                </div>
                <CardSwiper data={upcomingTripsList} />
            </div>
        </section>
    );
};

export default WeekendGatewayCards;