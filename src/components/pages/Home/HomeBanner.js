import HomeBannerAnimation from './HomeBannerAnimation';

import {
    Row,
    Col,
    Button
} from 'reactstrap';

import banner from '../../../assets/images/banner.png';

const HomeBanner = (props) => {

    return (
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
                            <span className="mb-0" style={{ fontSize: "4rem", fontWeight: "600" }}><span className="text-primary">Backpacker</span> takes you on unforgettable</span>
                            <div className="mt-0 text-secondary">
                                <HomeBannerAnimation />
                            </div>
                        </div>
                    </div>
                    <div className="mb-5 text-muted">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem corporis, et ad quas odit itaque sint voluptas recusandae maxime incidunt? Delectus inventore ducimus odio natus! Accusantium quo quos ab neque!</p>
                    </div>
                    <div>
                        <Button className="rounded-pill py-2 px-4" style={{ fontSize: "12px", fontWeight: "bold" }} color="primary">
                            Explore Trips <i class="bi bi-arrow-down"></i>
                        </Button>
                    </div>
                </Col>
                <Col className="ps-5" lg="7" md="6">
                    <img
                        className="w-100"
                        alt="Backpackertours Banner"
                        src={banner}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default HomeBanner;