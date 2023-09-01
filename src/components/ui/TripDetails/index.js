import { useParams } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import Iternary from './Iternary';
import InclusionExclusion from './InclusionExclusion';
import TripHeader from './TripHeader';
import TripSlider from './TripSlider';
import BottomDrawer from '../BottomDrawer';
import PriceBody from '../BottomDrawer/PriceBody';
import UpcomingDates from './UpcomingDates';
import About from './About';
import Why from './Why';
import Highlights from './Highlights';
import ThingsToCarry from './ThingsToCarry';
import Cancellation from './Cancellation';
import Faqs from './Faqs';
import Venue from './Venue';

import data from '../../data/tripsData';

const TripDetails = () => {
    const { id } = useParams();

    const trip = data.find(trip => trip.id === id);

    return (
        <>
            <BottomDrawer
                category={trip.category}
                price_breakup={trip.price_breakup}
            />
            <TripHeader
                title={trip.title}
                total_seats={trip.total_seats}
                duration={trip.duration}
                age={trip.age}
                places_covered={trip.places_covered}
                location={trip.location}
                grade={trip.grade}
            />
            <section className="container pb-5">
                <Row>
                    <Col md="7">
                        <TripSlider />
                        <UpcomingDates departure={trip.departure} />
                        <About aboutInfo={trip.description} />
                        <Iternary category={trip.category} iternaryInfo={trip.iternary} />
                        <Why whyInfo={trip.why} />
                        <Highlights highlightInfo={trip.highlights} />
                        {trip.things_to_carry.length > 0 && <ThingsToCarry things_to_carry={trip.things_to_carry} />}
                        {trip.venue && <Venue venue={trip.venue} />}
                    </Col>
                    <Col className="d-none d-md-block" md="5">
                        <div className="sticky-price-card">
                            <PriceBody category={trip.category} price_breakup={trip.price_breakup} />
                        </div>
                    </Col>
                </Row>
            </section>
            <InclusionExclusion inclusion={trip.inclusion} exclusion={trip.exclusion} note={trip.note} />
            <Cancellation cancle_policy={trip.cancle_policy} />
            {trip.faqs && <Faqs faqs={trip.faqs} />}
        </>

    )
}

export default TripDetails;