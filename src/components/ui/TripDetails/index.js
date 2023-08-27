import { Row, Col, Badge } from 'reactstrap';

import DayWise from './DayWise';
import InclusionExclusion from './InclusionExclusion';
import TripHeader from './TripHeader';
import TripSlider from './TripSlider';
import BottomDrawer from '../BottomDrawer';
import PriceBody from '../BottomDrawer/PriceBody';

const Iternary = () => {
    return (
        <>
            <BottomDrawer />
            <TripHeader />
            <section className="container">
                <Row>
                    <Col md="7">
                        <TripSlider />
                        <div className="my-4">
                            <h5 className="mb-3">Upcoming Trips</h5>
                            <Row>
                                <Col className="mb-4" md="4">
                                    <div className="px-3 py-4 bg-light rounded-3 text-center position-relative">
                                        <p className="mb-0 fw-bold">14 Jun - 24 Jul</p>
                                        <Badge color="success" className="position-absolute top-0 end-0 rounded-end-3 rounded-start-0 rounded-bottom-0 py-1 px-2 fw-normal">8 Seats Left</Badge>
                                    </div>
                                </Col>
                                <Col className="mb-4" md="4">
                                    <div className="px-3 py-4 bg-light rounded-3 text-center position-relative">
                                        <p className="mb-0 fw-bold">03 Jul - 10 Jul</p>
                                        <Badge color="warning" className="position-absolute top-0 end-0 rounded-end-3 rounded-start-0 rounded-bottom-0 py-1 px-2 fw-normal">5 Seats Left</Badge>
                                    </div>
                                </Col>
                                <Col className="mb-4" md="4">
                                    <div className="px-3 py-4 bg-light rounded-3 text-center position-relative">
                                        <p className="mb-0 fw-bold">16 Jul - 25 Jul</p>
                                        <Badge color="danger" className="position-absolute top-0 end-0 rounded-end-3 rounded-start-0 rounded-bottom-0 py-1 px-2 fw-normal">1 Seats Left</Badge>
                                    </div>
                                </Col>
                                <Col className="mb-4" md="4">
                                    <div className="px-3 py-4 bg-light rounded-3 text-center position-relative">
                                        <p className="mb-0 fw-bold">16 Jul - 25 Jul</p>
                                        <Badge color="success" className="position-absolute top-0 end-0 rounded-end-3 rounded-start-0 rounded-bottom-0 py-1 px-2 fw-normal">10 Seats Left</Badge>
                                    </div>
                                </Col>
                                <Col className="mb-4" md="4">
                                    <div className="px-3 py-4 bg-light rounded-3 text-center position-relative">
                                        <p className="mb-0 fw-bold">16 Jul - 25 Jul</p>
                                        <Badge color="success" className="position-absolute top-0 end-0 rounded-end-3 rounded-start-0 rounded-bottom-0 py-1 px-2 fw-normal">15 Seats Left</Badge>
                                    </div>
                                </Col>
                            </Row>
                            <hr />
                        </div>
                        <div className="mb-4">
                            <h5>About This Trip</h5>
                            <p>
                                We are going to Spiti valley. You can also call it a look alike Ladakh. Trip starts from Delhi  Chandigarh – Chitkul - Nako – Kaza – Lagza – Chicham Bridge – Kibber – Ki – Hikkim - Chandratal – Kunzum Top - Sissu - Manali – Kullu - Delhi. We are exploring the highest post office in the world. We will draft a letter to our loved ones from here. Let’s pose for a group picture at Chicham Bridge, this is the highest bridge in Asia. We may be lucky to see prayer at ki monastery. We will play Mafia, click good pictures at Langza village with a backdrop of snow-clad mountains and a lot more. We will be visiting a 500-year old mummy which is preserved in the monastery.
                                Did we tell you we are staying in valley view property and your morning view is going to be mountains and Spiti River?
                            </p>
                            <p className="mb-4">
                                Most of you plan a vacation once in a year or maybe for the first time. We at Backpacker Tours always plan an itinerary which creates a memorable and relaxing vacation for you.
                            </p>
                            <hr className="mt-4" />
                        </div>
                        <div className="mb-4">
                            <h5 className="mb-3">Day wise iternary</h5>
                            <DayWise />
                            <hr className="mt-4" />
                        </div>
                        <div className="mb-4">
                            <h5 className="mb-3">Why Travel with Backpacker Tours ?</h5>
                            <ul>
                                <li>Book your seats with us and rest we will do for you. Don’t Trust? Check out Reviews on Google</li>
                                <li> We are taking only up to 15 participates in one batch</li>
                                <li> Because who don’t want a crazy group picture at Langza</li>
                                <li> We are crossing the high pass Kunzum Pass</li>
                                <li> We are taking you to 500 year old mummy and it's crazy history</li>
                                <li>We have age limit of 18 to 40 for our Spiti valley road trip</li>
                                <li>Do check our reviews on Google and Facebook</li>
                                <li>Because we are travelling from Kaza to manali crossing kunzum pass this is the time when pass is less crowded and you may also witness snowfall</li>
                                <li>We are visiting the Moon Lake Chandratal.</li>
                                <li>We are Staying in Sissu for 1 night. You will not find this stay anywhere</li>
                            </ul>
                            <hr className="mt-4" />
                        </div>
                        <div>
                            <h5>Highlights</h5>
                            <p>
                                Road trip around Spiti valley via Kinnaur | Highest post office in the world | Highest bridge in Asia | Oldest Monastery | River walks | Late night Games & Dance | 500-year-old mummy | Kunzum pass | Atal Tunnel | Staying in Sissu | Chandratal lake
                            </p>
                        </div>
                    </Col>
                    <Col className="d-none d-md-block" md="5">
                        <div className="sticky-price-card">
                            <PriceBody />
                        </div>
                    </Col>
                </Row>
            </section>
            <section className="container pt-4 pb-5">
                <hr className="mb-4 mt-0" />
                <InclusionExclusion />
            </section>
        </>

    )
}

export default Iternary;