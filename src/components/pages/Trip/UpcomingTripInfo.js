import { Row, Col } from 'reactstrap';

import Iternary from './Iternary';
import InclusionExclusion from './InclusionExclusion';
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

const UpcomingTripsInfo = ({ trip }) => {
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

    return (
        <>
            <BottomDrawer
                category={category}
                price_breakup={price_breakup}
                price_extras={price_extras}
                discount={discount}
            />
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
            <section className="container pb-5">
                <Row>
                    <Col md="8">
                        <TripSlider gallery={gallery} />
                        <UpcomingDates departure={departure} />
                        {isDescription && <Description description={description} />}
                        <Iternary category={category} iternary={iternary} />
                        {isWhy && <Why why={why} />}
                        {isHighlights && <Highlights highlights={highlights} />}
                        {isThingsToCarry && <ThingsToCarry things_to_carry={things_to_carry} />}
                        {venue && <Venue venue={venue} />}
                    </Col>
                    <Col className="d-none d-md-block" md="4">
                        <div className="sticky-price-card">
                            <PriceBody
                                category={category}
                                price_breakup={price_breakup}
                                price_extras={price_extras}
                                discount={discount}
                            />
                        </div>
                    </Col>
                </Row>
            </section>
            <InclusionExclusion inclusion={inclusion} exclusion={exclusion} note={note} />
            <Cancellation cancle_policy={cancle_policy} />
            {isFaqs && <Faqs faqs={faqs} />}
        </>

    )
}

export default UpcomingTripsInfo;