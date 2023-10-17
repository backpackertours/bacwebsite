import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Carousel,
    CarouselItem,
    CarouselIndicators,
    CarouselControl,
    Row,
    Col,
    Card, CardTitle, CardText,
} from 'reactstrap';

import testimonialsData from '../../data/testimonialsData';

const Testimonials = (args) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === testimonialsData.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? testimonialsData.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const googleMapsLink = "https://maps.app.goo.gl/yrgPAbvCxe5xb12KA";
    const cloudinaryLink = "https://res.cloudinary.com/dgjllfp17/image/upload/v1696523917/Testimonials/";

    const slides = testimonialsData.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.key}
            >
                <Card className="text-center text-white bg-transparent border border-0 py-4 px-5 align-items-center justify-content-center">
                    <img
                        alt="Sample"
                        src={`${cloudinaryLink}/${item.src}`}
                        className="rounded-circle mb-3"
                        style={{
                            height: "85px",
                            width: "85px"
                        }}
                    />
                    <CardTitle tag="h5">
                        {item.name}
                    </CardTitle>
                    <CardText className="testimonials-text">
                        {item.description}
                    </CardText>
                    <div className="d-flex gap-2 mb-3 stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                    </div>
                </Card>
            </CarouselItem>
        );
    });

    return (
        <section className="bg-gray">
            <div className="container py-5 px-sm-4">
                <Row>
                    <Col className="pe-5 p-3 mb-sm-4" md="6">
                        <div className="pe-5">
                            <div className='mb-4'>
                                <span className='px-3 py-2 bg-white text-center text-slate rounded-4' style={{ fontSize: "3rem" }}>🙋🏻‍♂️</span>
                            </div>
                            <h2 className="mb-4">Client Reviews</h2>
                            <div className="mb-5">
                                Discover what our satisfied travelers have to say about their extraordinary experiences with Backpacker Tours. Our group tours have left an indelible impression, creating cherished memories and forming lifelong bonds.
                                Read the testimonials and get inspired to embark on your own adventure in captivating India.
                            </div>
                            <div className="d-flex gap-3">
                                <Button className="rounded-pill py-2 px-4 hover-white" color="primary" outline>
                                    Check Out Reviews On<i className="bi bi-google ms-2"></i>
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col md="6">
                        <Carousel
                            className="p-3 rounded-5 bg-primary h-100"
                            activeIndex={activeIndex}
                            next={next}
                            previous={previous}
                            {...args}
                        >
                            <CarouselIndicators
                                items={testimonialsData}
                                activeIndex={activeIndex}
                                onClickHandler={goToIndex}
                            />
                            {slides}
                            <CarouselControl
                                direction="prev"
                                directionText="Previous"
                                onClickHandler={previous}
                            />
                            <CarouselControl
                                direction="next"
                                directionText="Next"
                                onClickHandler={next}
                            />
                        </Carousel>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default Testimonials;