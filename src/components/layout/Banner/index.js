import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Row, Col, Badge, Button } from 'reactstrap';
import BackpackerBanner from '../../../assets/images/BackpackerBanner.png';
import BackpackerLogo from '../../../assets/images/BackpackerLogo.png';
import sunbed from '../../../assets/images/sunbed.png';
import tent from '../../../assets/images/tent.png';
import fosterfamily from '../../../assets/images/foster-family.png';

import TypewriterAnimation from './TypewriterAnimation';

const Banner = (props) => {

    return (
        <div className="container">
            <Row>
                <Col className="py-3" md="5">
                    <div className="d-flex gap-3 align-items-center justify-content-start  pt-5 mb-5">
                        {/*
                        **** ASK - Should we keep the logo or a nice text in the banner ***
                        <img
                            style={{ width: "80px" }}
                            alt="Backpackertours Logo"
                            src={BackpackerLogo}
                        /> */}
                        <div className="d-flex flex-column">
                            <span className="mb-0" style={{ fontSize: "4rem", fontWeight: "500" }}>Let's go on</span>
                            <div className="mt-0 text-secondary">
                                <TypewriterAnimation />
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem corporis, et ad quas odit itaque sint voluptas recusandae maxime incidunt? Delectus inventore ducimus odio natus! Accusantium quo quos ab neque!</p>
                    </div>
                    <Row className="mb-5">
                        <Col className="text-center" md="4">
                            <img
                                className="mb-3 bg-light rounded p-3"
                                alt="Services"
                                src={sunbed}
                                style={{ width: "70px" }}
                            />
                            <p>Holiday Trips</p>
                        </Col>
                        <Col className="text-center border-start border-end" md="4">
                            <img
                                className="mb-3 bg-light rounded p-3"
                                alt="Services"
                                src={tent}
                                style={{ width: "70px" }}
                            />
                            <p>Treks & Campings</p>
                        </Col>
                        <Col className="text-center" md="4">
                            <img
                                className="mb-3 bg-light rounded p-3"
                                alt="Services"
                                src={fosterfamily}
                                style={{ width: "70px" }}
                            />
                            <p>Family Trips</p>
                        </Col>
                    </Row>
                    <div>
                        <Button className="rounded-pill py-2 px-3" style={{ fontSize: "12px", fontWeight: "bold" }} color="primary">
                            Explore Trips <i class="bi bi-arrow-down"></i>
                        </Button>
                    </div>

                </Col>
                <Col md="7">
                    <img
                        className="w-100"
                        alt="Backpackertours Banner"
                        src={BackpackerBanner}
                    />
                </Col>
            </Row>
            {/* <Card inverse>
                <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/900/270?grayscale"
                    style={{
                        height: 400
                    }}
                    width="100%"
                />
                <CardImgOverlay>
                    <CardTitle tag="h1" className="text-center">
                        Backpacker Tours
                    </CardTitle>
                    <CardText className="text-center">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </CardText>
                </CardImgOverlay>
            </Card> */}
        </div>
    );
};

export default Banner;