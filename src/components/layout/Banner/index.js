import { Row, Col, Button } from 'reactstrap';
import banner from '../../../assets/images/banner.png';
import TypewriterAnimation from './TypewriterAnimation';

import sunbed from '../../../assets/images/sunbed.png';
import tent from '../../../assets/images/tent.png';
import fosterfamily from '../../../assets/images/foster-family.png';

const Banner = (props) => {

    return (
        <div className="container pb-5">
            <Row>
                <Col className="py-3" md="5">
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
                                <TypewriterAnimation />
                            </div>
                        </div>
                    </div>
                    <div className="mb-5 text-muted">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem corporis, et ad quas odit itaque sint voluptas recusandae maxime incidunt? Delectus inventore ducimus odio natus! Accusantium quo quos ab neque!</p>
                    </div>
                    {/* Convert this to a saperate section */}
                    {/* <Row className="mb-5">
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
                    </Row> */}
                    <div>
                        <Button className="rounded-pill py-2 px-4" style={{ fontSize: "12px", fontWeight: "bold" }} color="primary">
                            Explore Trips <i class="bi bi-arrow-down"></i>
                        </Button>
                    </div>
                </Col>
                <Col md="7" className="p-5">
                    <img
                        className="w-100"
                        alt="Backpackertours Banner"
                        src={banner}
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