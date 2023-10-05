import HomeBannerAnimation from './HomeBannerAnimation';

import {
    Row,
    Col,
    Button
} from 'reactstrap';

import polaroids from '../../../assets/images/polaroids.png';
const HomeBanner = (props) => {

    return (
        <section className="bg-mainbanner">
            <div className="container py-5 px-sm-4">
                <Row>
                    <Col className="mb-sm-4 py-sm-3" lg="5" md="6">
                        <div className="d-flex gap-3 align-items-center justify-content-start mb-4">
                            <div className="d-flex flex-column">
                                <span className="mb-0 text-slate text-header">Backpacker</span>
                                <div className="mt-0 text-gradient">
                                    <HomeBannerAnimation />
                                </div>
                            </div>
                        </div>
                        <div className="mb-5 text-muted">
                            <p>Unlock the magic of India's vibrant tapestry with Backpacker Tours, your trusted companion for unforgettable group tours and exhilarating treks. Our expertly crafted itineraries promise to unveil the hidden gems and authentic experiences that will leave you spellbound.</p>
                        </div>
                        <div className='d-flex gap-3 mb-5'>
                            <div className='p-3 bg-white text-center rounded-4'><span style={{ fontSize: "2rem" }}>🏔️</span><p className='mb-0'>Group Tours</p></div>
                            <div className='p-3 bg-white text-center rounded-4'><span style={{ fontSize: "2rem" }}>⛺</span><p className='mb-0'>Treks & Campings</p></div>
                            <div className='p-3 bg-white text-center rounded-4'><span style={{ fontSize: "2rem" }}>🚐</span><p className='mb-0'>Family Trips</p></div>
                        </div>
                        <div>
                            <a href="#upcomingtrips">
                                <Button className="rounded-pill py-2 px-4 text-white bg-gradient2 border-0">
                                    Explore Trips <i class="bi bi-arrow-down"></i>
                                </Button>
                            </a>
                        </div>
                    </Col>
                    <Col className="position-relative" lg="7" md="6">
                        <img
                            className="d-flex w-88 mx-auto"
                            alt="Backpackertours Banner"
                            src={polaroids}
                        />
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default HomeBanner;