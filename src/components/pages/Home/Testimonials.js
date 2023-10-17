import { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselIndicators,
    CarouselControl,
    Row,
    Col,
    Button,
    Card, CardTitle, CardText,
} from 'reactstrap';

const items = [
    {
        src: 'https://images.unsplash.com/photo-1531891570158-e71b35a485bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80',
        title: 'Ratnesh Patil',
        subtitle: 'Software Engineer, Cybage',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere veniam quibusdam pariatur? Facilis beatae incidunt explicabo eius voluptates velit odit!',
        key: 1,
    },
    {
        src: 'https://images.unsplash.com/photo-1552699611-e2c208d5d9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1108&q=80',
        title: 'Shreya Paliwal',
        subtitle: 'Digital Marketing Manager, Keywordio',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere veniam quibusdam pariatur? Facilis beatae incidunt explicabo eius voluptates velit odit!',
        key: 2,
    },
    {
        src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
        title: 'Yashavi Chauhan',
        subtitle: 'Youtuber & Influencer',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere veniam quibusdam pariatur? Facilis beatae incidunt explicabo eius voluptates velit odit!',
        key: 3,
    },
];

const Testimonials = (args) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <Card className="text-center text-white bg-transparent border border-0 py-5 px-10 align-items-center justify-content-center" style={{ height: "350px" }}>
                    <img
                        alt="Sample"
                        src={item.src}
                        className="rounded-circle mb-3"
                        style={{
                            height: "85px",
                            width: "85px"
                        }}
                    />
                    <CardTitle tag="h5">
                        {item.title}
                    </CardTitle>
                    <small
                        className="mb-3 text-white"
                        tag="h6"
                    >
                        {item.subtitle}
                    </small>
                    <CardText>
                        {item.description}
                    </CardText>
                </Card>
            </CarouselItem>
        );
    });

    return (
        <section className="bg-gray">
            <div className="container py-5">
                <Row>
                    <Col className="pe-5 p-3" md="6">
                        <div className="pe-5">
                            <div className='mb-4'>
                                <span className='px-3 py-2 bg-white text-center text-slate rounded-4' style={{ fontSize: "3rem" }}>🙋🏻‍♂️</span>
                            </div>
                            <h2 className="mb-4">Client Reviews</h2>
                            <div className="mb-5">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, praesentium beatae minima doloribus modi ipsa ab, tempore fuga ad eaque nobis necessitatibus distinctio, accusantium officia commodi laudantium molestiae ea. Ullam!
                                Eius consequatur vero ipsa totam eaque illum obcaecati pariatur dolorem eum ab exercitationem.
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
                                items={items}
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