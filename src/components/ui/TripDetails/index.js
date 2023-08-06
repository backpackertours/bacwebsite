import { Row, Col, Card } from 'reactstrap';
import DayWise from './DayWise';
import DepartureDate from './DepartureDate';
import TripCost from './TripCost';
import InclusionExclusion from './InclusionExclusion';
import TripBanner from './TripBanner';

const Iternary = () => {
    return (
        <>
            <TripBanner />
            <section className="container">
                <Row>
                    <Col md="8">
                        <img
                            className="rounded-4 w-100"
                            alt="Spiti Valley"
                            src="https://images.unsplash.com/photo-1619282401041-56e69dcc5335?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80"
                        />
                        <div className="pt-4">
                            <div className="mb-4">
                                <p className="mb-1"><small>Places Covered</small></p>
                                <small className="text-muted">Delhi | Chandigarh | Chitkul | Nako | Dhankar | Kaza | Hikkim | Ki | Kibber | Chicham Bridge | Chandratal Lake | Kunzum pass | Manali</small>
                                <hr className="mt-4 mb-4" />
                            </div>
                            <div>
                                <p>
                                    We are going to Spiti valley. You can also call it a look alike Ladakh. Trip starts from Delhi  Chandigarh – Chitkul - Nako – Kaza – Lagza – Chicham Bridge – Kibber – Ki – Hikkim - Chandratal – Kunzum Top - Sissu - Manali – Kullu - Delhi. We are exploring the highest post office in the world. We will draft a letter to our loved ones from here. Let’s pose for a group picture at Chicham Bridge, this is the highest bridge in Asia. We may be lucky to see prayer at ki monastery. We will play Mafia, click good pictures at Langza village with a backdrop of snow-clad mountains and a lot more. We will be visiting a 500-year old mummy which is preserved in the monastery.
                                    Did we tell you we are staying in valley view property and your morning view is going to be mountains and Spiti River?
                                </p>
                                <p className="mb-4">
                                    Most of you plan a vacation once in a year or maybe for the first time. We at Backpacker Tours always plan an itinerary which creates a memorable and relaxing vacation for you.
                                </p>
                                <hr className="mt-4 mb-4" />
                            </div>
                        </div>
                    </Col>
                    <Col md="4">
                        <Card>

                        </Card>
                        <div className="mb-4">
                            <h6 className="text-muted">Starting From</h6>
                            <h2>Rs. 18,500 /-</h2>
                        </div>
                        <div className="mb-4">
                            <h5 className="mb-3">Trip Cost</h5>
                            <TripCost />
                        </div>
                        <div>
                            <h5 className="mb-3">Upcoming Trips - Departure from Delhi</h5>
                            <DepartureDate />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md="8">
                        <div>
                            <h6 className="mb-3">Day wise iternary</h6>
                            <DayWise />
                            <hr className="mt-4 mb-4" />
                        </div>
                        <div>
                            <h6 className="mb-3">Why Travel with Backpacker Tours ?</h6>
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
                            <hr className="mt-4 mb-4" />
                        </div>
                        <div>
                            <h6>Highlights</h6>
                            <p>
                                Road trip around Spiti valley via Kinnaur | Highest post office in the world | Highest bridge in Asia | Oldest Monastery | River walks | Late night Games & Dance | 500-year-old mummy | Kunzum pass | Atal Tunnel | Staying in Sissu | Chandratal lake
                            </p>
                        </div>
                    </Col>
                </Row>
                {/* <Row>
                <Col className="pe-5" md="7">
                    <div className="mb-5">
                        <h4 className="mb-3">All About This Trip</h4>
                        <p>
                            We are going to Spiti valley. You can also call it a look alike Ladakh. Trip starts from Delhi  Chandigarh – Chitkul - Nako – Kaza – Lagza – Chicham Bridge – Kibber – Ki – Hikkim - Chandratal – Kunzum Top - Sissu - Manali – Kullu - Delhi. We are exploring the highest post office in the world. We will draft a letter to our loved ones from here. Let’s pose for a group picture at Chicham Bridge, this is the highest bridge in Asia. We may be lucky to see prayer at ki monastery. We will play Mafia, click good pictures at Langza village with a backdrop of snow-clad mountains and a lot more. We will be visiting a 500-year old mummy which is preserved in the monastery.
                            Did we tell you we are staying in valley view property and your morning view is going to be mountains and Spiti River?
                        </p>
                        <p>
                            <strong>
                                Most of you plan a vacation once in a year or maybe for the first time. We at Backpacker Tours always plan an itinerary which creates a memorable and relaxing vacation for you.
                            </strong>
                        </p>
                        
                    </div>
                    <div className="mb-5">
                        <h5 className="">Why Travel with Backpacker Tours ?</h5>
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
                    </div>
                    <div className="mb-5">
                        <h5>Highlights</h5>
                        <p>
                            Road trip around Spiti valley via Kinnaur | Highest post office in the world | Highest bridge in Asia | Oldest Monastery | River walks | Late night Games & Dance | 500-year-old mummy | Kunzum pass | Atal Tunnel | Staying in Sissu | Chandratal lake
                        </p>
                    </div>
                    <div className="mb-5">
                        <h5 className="mb-3">Day wise iternary</h5>
                        <DayWise />
                    </div>
                </Col>
                <Col md="5">
                    <div className="mb-4">
                        <h6 className="text-muted">Starting From</h6>
                        <h2>Rs. 18,500 /-</h2>
                    </div>
                    <div className="mb-4">
                        <h5 className="mb-3">Trip Cost</h5>
                        <TripCost />
                    </div>
                    <div>
                        <h5 className="mb-3">Upcoming Trips - Departure from Delhi</h5>
                        <DepartureDate />
                    </div>
                </Col>
            </Row>
            <hr />
            <InclusionExclusion /> */}
            </section>
            <section className="container pt-4 pb-5">
                <hr className="mb-4 mt-0" />
                <InclusionExclusion />
            </section>
        </>

    )
}

export default Iternary;