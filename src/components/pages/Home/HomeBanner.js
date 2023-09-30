import HomeBannerAnimation from './HomeBannerAnimation';

import {
    Row,
    Col,
    Button
} from 'reactstrap';

// import banner from '../../../assets/images/banner.png';
import polaroids from '../../../assets/images/polaroids.png';
const HomeBanner = (props) => {

    return (
        <section className="bg-mainbanner">
            <div className="container py-5">
                <Row>
                    <Col className="py-3" lg="5" md="6">
                        <div className="d-flex gap-3 align-items-center justify-content-start py-2 mb-4">
                            {/*
                        **** ASK - Should we keep the logo or a nice text in the banner ***
                        <img
                            style={{ width: "80px" }}
                            alt="Backpackertours Logo"
                            src={BackpackerLogo}
                        /> */}
                            <div className="d-flex flex-column">
                                <span className="mb-0 text-slate text-header">Backpacker</span>
                                <div className="mt-0 text-gradient">
                                    <HomeBannerAnimation />
                                </div>
                            </div>
                        </div>
                        <div className="mb-5 text-muted">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem corporis, et ad quas odit itaque sint voluptas recusandae maxime incidunt? Delectus inventore ducimus odio natus! Accusantium quo quos ab neque!</p>
                        </div>
                        <div className='d-flex gap-3 mb-5'>
                            <div className='p-3 bg-white text-center rounded-4'><span style={{ fontSize: "2rem" }}>🏔️</span><p className='mb-0'>Group Tours</p></div>
                            <div className='p-3 bg-white text-center rounded-4'><span style={{ fontSize: "2rem" }}>⛺</span><p className='mb-0'>Treks & Campings</p></div>
                            <div className='p-3 bg-white text-center rounded-4'><span style={{ fontSize: "2rem" }}>🚐</span><p className='mb-0'>Family Trips</p></div>
                        </div>
                        <div>
                            <Button className="rounded-pill py-2 px-4 text-white bg-gradient2 border-0">
                                Explore Trips <i class="bi bi-arrow-down"></i>
                            </Button>
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