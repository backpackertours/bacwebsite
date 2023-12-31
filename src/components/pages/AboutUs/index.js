import { Row, Col } from 'reactstrap';

import founder from '../../../assets/images/founder.png';

const AboutUs = () => {
    return (
        <section className="bg-gray">
            <div className="bg-dark text-light text-center py-1">We are still working on the website. For inquiry, please contact +91 8082647928.</div>
            <div className="container py-5 px-sm-4">
                <Row>
                    <Col className="mx-auto" lg="8">
                        {/* TODO - Remove this if not used. */}
                        {/* <div className='mb-4 text-center'>
                            <span className='px-3 py-2 bg-white text-center text-slate rounded-4' style={{ fontSize: "3rem" }}>🚀</span>
                        </div> */}
                        <h1 className="mb-4 text-center">Our Mission</h1>
                        <div className="mb-4 fs-5 text-muted text-center">
                            <p><i className="bi bi-quote text-primary" style={{ fontSize: "4rem", fontWeight: "600" }}></i> Welcome to Backpacker Tours, your gateway to unforgettable adventures in India! Our mission
                                is to take you beyond the ordinary, exploring offbeat locations that are untouched by mass
                                tourism.
                            </p>
                            <p>
                                Our itineraries are carefully planned, catering to backpackers' preferences for authentic
                                experiences, cultural immersion, and outdoor thrills. Whether you're an adrenaline junkie
                                seeking mountain treks or a soul-searcher longing for serene beaches & road trips we have the
                                perfect journey for you
                            </p>
                            <p>
                                Staying true to our backpacker anthem, we prioritize valley view accommodations without
                                compromising on comfort and safety. From cozy homestays in remote villages to eco-friendly
                                stays nestled amidst nature, each stay is handpicked to provide you with a unique and enriching
                                experience.
                            </p>
                            <p>
                                We believe in responsible tourism, which means we care about the impact our trips have on the
                                places we visit. We want to leave a positive effect on the communities and the environment.
                            </p>
                            <p>
                                So, if you're ready for a unique and memorable journey, join us to explore the hidden and lesserknown
                                parts of India with other like-minded travelers. Let's have an amazing adventure together!
                            </p>
                        </div>
                        <div className="mt-5 text-center">
                            <img src={founder} className="founder-img rounded-5" alt="Backpacker Tours Founder"></img>
                            <h3 className="mt-4">Chirag Jain</h3>
                            <h5 className="text-primary">Founder</h5>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default AboutUs;