import { useParams } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import Iternary from './Iternary';
import TripHeader from './TripHeader';
import TripSlider from './TripSlider';
import UpcomingDates from './UpcomingDates';
import Description from './Description';
import Why from './Why';
import Highlights from './Highlights';
import ThingsToCarry from './ThingsToCarry';
import Cancellation from './Cancellation';
import Faqs from './Faqs';
import Venue from './Venue';
import BottomDrawer from './BottomDrawer';
import PriceBody from './PriceBody';

import tripsData from '../../data/tripsData';
import InclusionCard from './InclusionCard';

const Trip = () => {
    const { id } = useParams();
    const trip = tripsData.find(item => item.id === id);

    const {
        category,
        title,
        total_seats,
        duration,
        location,
        grade,
        age,
        places_covered,
        discount,
        gallery,
        months,
        departure,
        description,
        iternary,
        why,
        highlights,
        price_breakup,
        price_extras,
        private_plan,
        inclusion,
        exclusion,
        note,
        cancle_policy,
        things_to_carry,
        venue,
        faqs
    } = trip;

    const isDescription = description && description.length > 0;
    const isFaqs = faqs && faqs.length > 0;
    const isHighlights = highlights && highlights.length > 0;
    const isThingsToCarry = things_to_carry && things_to_carry.length > 0;
    const isWhy = why && why.length > 0;

    window.scrollTo(0, 0);

    return (
        <section className="bg-gray">
            <div className="bg-dark text-light text-center py-1">We are still working on the website. For inquiry, please contact +91 8082647928.</div>
            <BottomDrawer trip={trip} />
            <TripHeader
                title={title}
                private_plan={private_plan}
                total_seats={total_seats}
                duration={duration}
                age={age}
                places_covered={places_covered}
                location={location}
                grade={grade}
            />
            <section className="container pb-5 px-sm-4">
                <Row>
                    <Col md="8">
                        <TripSlider gallery={gallery} />
                        <UpcomingDates months={months} departure={departure} />
                        {isDescription && <Description description={description} />}
                        <Iternary category={category} iternary={iternary} />
                        {isWhy && <Why why={why} />}
                        {isHighlights && <Highlights highlights={highlights} />}
                        {isThingsToCarry && <ThingsToCarry things_to_carry={things_to_carry} />}
                        {venue && <Venue venue={venue} />}
                        {inclusion && <InclusionCard title="Inclusion" items={inclusion} icon="check2" />}
                        {exclusion && <InclusionCard title="Exclusion" items={exclusion} icon="x" />}
                        {note && <InclusionCard title="Please Note" items={note} icon="dash" />}
                        <Cancellation cancle_policy={cancle_policy} />
                    </Col>
                    <Col className="d-none d-md-block" md="4">
                        <div className="sticky-price-card">
                            <PriceBody
                                category={category}
                                price_breakup={price_breakup}
                                price_extras={price_extras}
                                discount={discount}
                                trip={trip}
                            />
                        </div>
                    </Col>
                </Row>
            </section>
            {isFaqs && <Faqs faqs={faqs} />}
        </section>
    )
}

export default Trip;