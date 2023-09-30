import CardSwiper from './CardSwiper';
import tripsData from '../../data/tripsData';

const UpcomingTripCards = () => {
    //filter out upcoming trips
    const upcomingTripsList = tripsData.filter(trip => trip.category === "upcoming");

    return (
        <section className='bg-gray'>
            <div className="container py-5">
                <div className="mb-4">
                    <div className='mb-4'>
                        <span className='px-3 py-2 bg-white text-center text-slate rounded-4' style={{ fontSize: "3rem" }}>🚐</span>
                    </div>
                    <h3 className='text-slate'>Upcoming Trips</h3>
                </div>
                <CardSwiper data={upcomingTripsList} />
            </div >
        </section>
    );
};

export default UpcomingTripCards;